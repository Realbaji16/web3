import { Detail } from "../Detail"

export const Statistics = () => {
  return (
    <div className="bg-white p-8 flex flex-col gap-6 rounded-xl">
        <Detail title="Total stETH staked" value="3434434.0 stETH" />
        <Detail title="Annual percentage rate" value="9,821,298.154 ETH" />
        <Detail title="Stakers" value="477405" />
        <Detail title="stETH market cap" value="$24,126,196,702" />
    </div>
  )
}
