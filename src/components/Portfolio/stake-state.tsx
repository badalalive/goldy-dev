'use client';
import {formatEtherToFloat, formatNumber} from "@/utills/common.util";
import {useCustomContractRead, useCustomContractReadWithArg} from "@/utills/contract.calls.helper";
import {GoldyAddress, GoldyPriceOracleAddress, VestingAddress} from "@/config/address/contract.address";
import {Erc20TokenAbi} from "@/config/abi/erc20.token.abi";
import {useAccount} from "wagmi";
import {GoldyPriceOracleAbi} from "@/config/abi/goldy.price.oracle.abi";
import {VestingAbi} from "@/config/abi/vesting.abi";


interface StakeStateProps {
    locked: number
}

export default function StakeState(props: StakeStateProps) {
    const { address, isConnected } = useAccount();
    const { data: goldyBalance, isError: isGoldyBalanceError } = useCustomContractReadWithArg(GoldyAddress, Erc20TokenAbi, "balanceOf", [address], isConnected);
    const { data: usdtPriceData, isError: isUsdtPriceError } = useCustomContractRead(GoldyPriceOracleAddress, GoldyPriceOracleAbi, "getGoldyUSDTPrice", isConnected);
    const { data: totalVestedTokenAmount, isError: isTotalVestedTokenAmountError } = useCustomContractRead(VestingAddress, VestingAbi, "totalVestedTokenAmount", isConnected);
    const { data: vestingCount, isError: isVestingCountError } = useCustomContractRead(VestingAddress, VestingAbi, "_vestingPoolIdTracker", isConnected);
    console.log("totalVestedTokenAmount =>", totalVestedTokenAmount);
    console.log("vestingCount =>", vestingCount);
    return (<>
        <div className="flex mt-10 mx-16">
            <div className="container flex flex-row space-x-4 text-white">
                <div className="container flex flex-row basis-1/2 rounded-md p-4 border-2 border-[#FFD678] bg-[#5F563C]">
                    <div className="container basis-2/3">
                        <p className="text-[#FFE082] text-xl">Stakes</p>
                        <p className="font-bold text-xl my-2">Your Balance: {formatNumber(formatEtherToFloat(goldyBalance ?? 0))} Goldy</p>
                        <p>Locked tokens: {formatNumber(props.locked ?? 0)}</p>
                        <p className="my-2">Value of <span className="text-[#FFE082]">Goldy</span></p>
                        <p>USDT = ${formatNumber(Number((formatEtherToFloat(usdtPriceData ?? 0) * formatEtherToFloat(goldyBalance ?? 0)).toFixed(10)))}</p>
                        <p>Physical Gold = {formatNumber(formatEtherToFloat(goldyBalance ?? 0) / 10000)  } Ounce</p>
                        <button className="bg-[#FFE082] px-6 py-2 text-black mt-3 rounded-md font-bold">Buy Coins</button>
                    </div>
                    <div className="container flex justify-end mb-8 basis-1/3">
                        <img src='/spiral.svg' className="w-60" alt='logo'/>
                    </div>
                </div>
                <div className="container basis-1/2 rounded-md p-4 border-2 border-[#FFD678] bg-[#5F563C]">
                    <p className="text-[#FFE082] text-xl">Statistics</p>
                    <div className="flex flex-row justify-between space-x-2.5">
                        <div className="p-2">
                            <p>Total Stakers</p>
                            <p className="text-center">{formatNumber(Number(vestingCount) ?? 0)}</p>
                        </div>
                        <div className="p-2">
                            <p>Total Staked Value</p>
                            <p className="text-center">{formatNumber(formatEtherToFloat(totalVestedTokenAmount ?? 0))}</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#FFE082] px-6 py-2 text-black mt-3 rounded-md font-bold">
                            <span className="px-28">Total Raised</span>
                            <p>${formatNumber(1.823)} out of ${formatNumber(899.09)}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}