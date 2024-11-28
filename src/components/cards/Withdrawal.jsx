// src/pages/Withdrawal.jsx
import React from "react";
import { useAccount } from 'wagmi';
import { Detail } from "../Detail";
import Accordion from "./Accordion";

const Withdrawal = () => {
  const { address, isConnected } = useAccount();
  return (
<div className="min-h-screen flex justify-center items-center text-white py-16 px-4 md:px-0">
                <div className="w-full max-w-lg flex flex-col gap-10">
                  <div>
                    <h2 className="font-bold text-black text-2xl mx-auto w-fit">
                      Withdrawals
                    </h2>
                    <h3 className="font-medium text-black text-xs mx-auto w-fit text-[#b3b5b8] mt-1 mb-4">
                      Stake and receive stETH while staking
                    </h3>
                    {isConnected && balance !== null && (
                      <Dashboard address={address} balance={balance} />
                    )}
                    <div className="bg-white p-6 md:p-8 flex flex-col gap-6 rounded-xl">
                      <NumberInput />


                      {/* Inner card */}
                      <div className="flex gap-4">
                      <div className="inn inn2 p-4 rounded-xl grid gap-6">
                        <div>
                        
                          <p className="text-sm mt-[5px] mb-[10px]">
                            You can stake ETH in{' '}
                            <span className="text-[#00a3ff]">the DVV vault</span> to get
                            stETH rewards, gain points and help to decentralize the Lido
                            Protocol
                          </p>
                        </div>
                 
                   
                      </div>
                      <div className="inn inn2 p-4 rounded-xl grid gap-6">
                        <div>
                      
                          <p className="text-sm mt-[5px] mb-[10px]">
                            You can stake ETH in{' '}
                            <span className="text-[#00a3ff]">the DVV vault</span> to get
                            stETH rewards, gain points and help to decentralize the Lido
                            Protocol
                          </p>
                        </div>
                    
                     
                      </div>
                      
                      </div>
                      
                      <button
                        type="button"
                        className="bg-[#00a3ff] text-[#f7fcff] p-4 rounded-xl text-sm font-bold"
                        onClick={open}
                      >
                        Connect Wallet
                      </button>

                      <Detail title="You will receive" value="3434434.0 stETH" />
                      <Detail title="Max transaction cost" value="1 ETH = 1 stETH" />
                      <Detail title="Exchange rate" value="$2.68" />
                      <Detail title="Reward fee" value="10%" tooltip="asfasdf" />
                    </div>
                    
                  
                  </div>
                  <Accordion />
                </div>
              
              </div>
  );
};

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


export default Withdrawal;
