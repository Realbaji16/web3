import React from 'react';


const Rewards = () => {
  const referrals = [
    { name: 'Alice', rewards: '0.5 ETH' },
    { name: 'Bob', rewards: '0.3 ETH' },
    { name: 'Charlie', rewards: '0.2 ETH' },
  ];

  return (
    <div className='min-h-screen flex justify-center items-center text-white py-16 px-4 md:px-0'>
    <div className="w-full bg-gray-900 text-white  p-6 w-full max-w-md flex flex-col gap-10">
      <h1 className="text-3xl font-bold mb-6">Referral Rewards</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Referrals</h2>
        <div className="space-y-4">
          {referrals.map((referral, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
            >
              <span className="font-medium">{referral.name}</span>
              <span className="text-green-400">{referral.rewards}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Share Your Referral Link</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            readOnly
            value="https://stake.lido.fi/referral/yourcode"
            className="flex-1 bg-gray-700 text-gray-300 p-2 rounded-lg"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
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
