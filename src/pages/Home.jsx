import Accordion from "../components/cards/Accordion";
import { Stake } from "../components/cards/Stake";
import { Statistics } from "../components/cards/Statistics";

export default function Home() {

  return (
    <div className=" flex justify-center items-center text-white py-4">
      <div className="md:w-[min(90%,_500px)] flex flex-col gap-10">
      
        <div>
          <h2 className="flex justify-between items-center mb-3">
            <span className="text-black font-bold text-lg">Lido statistics</span>
            <a className="text-xs font-medium text-[#00A3FF]">View on Etherscan</a>
          </h2>
          <Statistics />
          <Accordion />
          
        </div>
      </div>
    </div>
  )
};
