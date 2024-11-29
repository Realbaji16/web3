import React from 'react';


const Rewards = () => {
  const referrals = [
    { name: 'Alice', rewards: '0.5 ETH' },
    { name: 'Bob', rewards: '0.3 ETH' },
    { name: 'Charlie', rewards: '0.2 ETH' },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center text-white py-16 px-4 md:px-0">
    <div className="w-full bg-gray-900 text-white p-6 max-w-md flex flex-col gap-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Referral Rewards</h1>
      
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Your Referrals</h2>
        <div className="space-y-4">
          {referrals.map((referral, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
            >
              <span className="text-sm md:text-base font-medium">{referral.name}</span>
              <span className="text-sm md:text-base text-green-400">{referral.rewards}</span>
            </div>
          ))}
        </div>
      </div>
  
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Share Your Referral Link</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            readOnly
            value="https://stake.lido.fi/referral/yourcode"
            className="w-full md:flex-1 bg-gray-700 text-gray-300 p-2 rounded-lg text-sm md:text-base"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-sm md:text-base rounded-lg"
            onClick={() => navigator.clipboard.writeText("https://stake.lido.fi/referral/yourcode")}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Rewards;
