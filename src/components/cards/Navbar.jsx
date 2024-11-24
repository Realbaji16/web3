import React, { useState, useEffect } from 'react';
import { useAppKit } from '@reown/appkit/react';
import { useAccount } from 'wagmi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faDollarSign, faInfoCircle, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const [displayAddress, setDisplayAddress] = useState(null);

  useEffect(() => {
    if (isConnected && address) {
      setDisplayAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
    } else {
      setDisplayAddress(null);
    }
  }, [isConnected, address]);

  return (
    <nav className="bg-gray-800 text-white fixed bottom-0 w-full md:relative md:bottom-auto md:w-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="hidden md:block">
            <a href="/" className="text-xl font-bold text-white">
              MyLogo
            </a>
          </div>

          {/* Main Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-8 ml-10">
            <a href="#features" className="text-gray-300 hover:text-white flex items-center">
              <FontAwesomeIcon icon={faBolt} />
              <span className="ml-2">Stake</span>
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white flex items-center">
              <FontAwesomeIcon icon={faDollarSign} />
              <span className="ml-2">Wrap</span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-white flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="ml-2">Withdrawals</span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white flex items-center">
              <FontAwesomeIcon icon={faTrophy} />
              <span className="ml-2">Rewards</span>
            </a>
          </div>

          {/* Wallet Connection Buttons */}
          <div className="hidden md:flex space-x-4">
            {isConnected ? (
              <span className="font-bold text-white">{displayAddress}</span>
            ) : (
              <>
                <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition">
                  Sign In
                </button>
                <button
                  onClick={() => open()}
                  className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex md:hidden space-x-8 justify-around w-full">
         
          <a href="#features" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faBolt} size="lg" />
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faDollarSign} size="lg" />
            </a>
            <a href="#about" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTrophy} size="lg" />
            </a>

     
  
        </div>
      )}
    </nav>
  );
};

export default Navbar;
