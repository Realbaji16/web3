// Dashboard.jsx
import React from 'react';

const Dashboard = ({ address, balance }) => {
  return (
<div className="dashb flex justify-center items-center text-white py-4 bg-gray-600 border-x-3">
  <div className="w-[90%] md:w-[90%] md:px-[5%] lg:w-[500px] flex flex-col gap-10">
    <h2 className="flex justify-between items-center mb-3">
      <p className="text-sm font-bold text-white">
        Available to stake:<br /> ${balance} USD
      </p>
      <p className="text-sm text-[#b3b5b8]">
        {`${address.slice(0, 6)}...${address.slice(-4)}`}
      </p>
    </h2>
    <hr />
    <h2 className="flex justify-between items-center mb-3">
      <p className="text-sm text-white">
        Staked Amount:<br /> <span className="font-bold">${balance} stETH</span>
      </p>
      <p className="text-sm text-green">
        Lido APR<br /> <span className="font-bold">3.0%</span>
      </p>
    </h2>
  </div>
</div>



  );
};

export default Dashboard;
