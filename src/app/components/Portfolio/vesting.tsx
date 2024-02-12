'use client';
import {formatEtherToFloat, formatNumber} from "@/app/utills/common.util";
import {useAccount} from "wagmi";
import {useCustomContractRead, useCustomContractReadWithArg} from "@/app/utills/contract.calls.helper";
import {GoldyAddress, GoldyPriceOracleAddress} from "@/app/config/address/contract.address";
import {Erc20TokenAbi} from "@/app/config/abi/erc20.token.abi";
import {GoldyPriceOracleAbi} from "@/app/config/abi/goldy.price.oracle.abi";
import React from "react";

export default function Vesting() {
    const { address, isConnected } = useAccount();
    const { data: goldyBalance, isError: isGoldyBalanceError } = useCustomContractReadWithArg(GoldyAddress, Erc20TokenAbi, "balanceOf", [address], isConnected);
    const [locked, setLocked ] = React.useState<number>(0);
    return (
        <div className="flex flex-col mt-24 mx-16 bg-[#272727] rounded-md">
            <div className="container flex flex-row">
                <div className="container basis-1/2 p-8">
                    <span className="font-bold text-[22px] leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#be9f59] to-[#433420]">Lock or Unlock Tokens For Maximum <br/><p className="text-[#be9f59]">Profits</p></span>
                    <h1 className="text-white text-xs">Goldy coin fully backed by physical gold. Merges gold&apos;s safety with digital asset convenience, security, and affordability.</h1>
                </div>
                <div className="container flex flex-col basis-1/2 py-4 space-y-4">
                    <div className="flex flex-row justify-center space-x-4 pr-4">
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Total</p>
                            <p className="text-2xl text-white">{formatNumber(formatEtherToFloat(goldyBalance ?? 0))}</p>
                        </div>
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Lockable</p>
                            <p className="text-2xl text-white">{formatNumber(formatEtherToFloat(goldyBalance ?? 0) - locked)}</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center space-x-4 pr-4">
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Locked</p>
                            <p className="text-2xl text-white">{formatNumber(locked)}</p>
                        </div>
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Unlocked</p>
                            <p className="text-2xl text-white">{formatNumber(0)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerx flex flex-row space-x-6 justify-center mb-6">
                <button className="bg-[#FFE082] px-24 py-4 text-black mt-3 rounded-md font-bold">
                    <span>Lock Token</span>
                </button>
                <button className="bg-[#FFBC50] px-24 py-4 text-black mt-3 rounded-md font-bold">
                    <span>Unlock Token</span>
                </button>
            </div>
    </div>);
}