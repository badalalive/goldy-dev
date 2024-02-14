'use client';
import {formatEtherToFloat, formatNumber} from "@/app/utills/common.util";
import {useAccount, useContractReads, useContractWrite, useWaitForTransaction} from "wagmi";
import {useCustomContractRead, useCustomContractReadWithArg} from "@/app/utills/contract.calls.helper";
import {GoldyAddress, GoldyPriceOracleAddress, IcoAddress, VestingAddress} from "@/app/config/address/contract.address";
import {Erc20TokenAbi} from "@/app/config/abi/erc20.token.abi";
import {GoldyPriceOracleAbi} from "@/app/config/abi/goldy.price.oracle.abi";
import React from "react";
import {VestingAbi} from "@/app/config/abi/vesting.abi";
import Spinner from "@/app/components/Loader/spinner.loader";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import LockUnlockModal from "@/app/components/Portfolio/lock-unclock-modal";
import { ethers } from 'ethers';

export default function Vesting() {
    const { address, isConnected } = useAccount();
    const [ list, setList] = React.useState<any[]>([]);
    const { data: goldyBalance, isError: isGoldyBalanceError } = useCustomContractReadWithArg(GoldyAddress, Erc20TokenAbi, "balanceOf", [address], isConnected);
    const { data: vestingCount, isError: isVestingCountError } = useCustomContractRead(VestingAddress, VestingAbi, "_vestingPoolIdTracker", isConnected);
    const { data: vestingPools, isError, isLoading: isVestingPoolsLoading } = useContractReads({
        contracts: list.map((index) => ({
            address: VestingAddress,
            abi: VestingAbi,
            functionName: 'vestingPools',
            args: [index],
        })), enabled: true
    })
    const { data: withdrawAvailable, isError: isWithdrawAvailableError, isLoading: isWithdrawAvailableLoading } = useContractReads({
        contracts: list.map((index) => ({
            address: VestingAddress,
            abi: VestingAbi,
            functionName: 'availableToWithdraw',
            args: [vestingPools?.at(index)?.result],
        })), enabled: true
    })
    console.log("withdrawAvailable =>", withdrawAvailable);
    const [locked, setLocked ] = React.useState<number>(0);
    const searchParams = useSearchParams();
    const lock = searchParams.get("lock");
    const unlock = searchParams.get("unlock");
    const { data, isLoading, isSuccess, error,  write } = useContractWrite({
        address: GoldyAddress,
        abi: Erc20TokenAbi,
        functionName: 'approve',
    })
    const { data: vestingData, isLoading: isVestingLoading, isSuccess: isIcoSuccess, error: icoError,  write: vestingWrite } = useContractWrite({
        address: VestingAddress,
        abi: VestingAbi,
        functionName: 'create',
    })
    const {isSuccess: isTransactionSuccess, isFetched: isTransactionFetched, isLoading: isTransactionLoading} = useWaitForTransaction({
        hash: data?.hash,
    })
    React.useEffect(() => {
        const _list = [];
        for (let i = 0; i < Number(vestingCount); i++) {
            _list.push(i);
        }
        setList(_list);
        setLocked(0);
        console.log("Vesting pools =>", vestingPools);
        vestingPools?.map((pool: any) => {
            setLocked((currentValue) => {
                return currentValue + Number(formatNumber(formatEtherToFloat(pool?.result[5])));
            })
        })
    }, [vestingCount, vestingPools])
    function callApproval(value: string) {
        write({
            args: [ VestingAddress, ethers.parseUnits(String(value), 18) ]
        })
    }
    function callCreate(value: string, time: number) {
        vestingWrite({
            args: [ 0, time, 10000, 0, ethers.parseUnits(String(value), 18), address, GoldyAddress]
        })
    }
    return (
        <>
            {lock && <LockUnlockModal value={String( goldyBalance ?? 0)} info={"Locking amount should not be more than the balance"} buttonName={"Lock Coin"} approvalAction={callApproval} createAction={callCreate} status={isTransactionSuccess} isLoading={isLoading} isVestingLoading={isVestingLoading} isTransactionLoading={isTransactionLoading} title={"Lock Tokens"}/>}
            {unlock && <LockUnlockModal value={String(goldyBalance ?? 0)} info={"Unlocking amount should not be more than the locked balance"} buttonName={"Unlock Coin"} approvalAction={callApproval} createAction={callCreate} status={isTransactionSuccess} isLoading={isLoading} isVestingLoading={isVestingLoading} isTransactionLoading={isTransactionLoading} title={"Unlock Tokens"}/>}
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
                <Link href="/portfolio?lock=true">
                    <button className="bg-[#FFE082] px-24 py-4 text-black mt-3 rounded-md font-bold">
                        <span>Lock Token</span>
                    </button>
                </Link>
                <Link href="/portfolio?unlock=true">
                    <button className="bg-[#FFBC50] px-24 py-4 text-black mt-3 rounded-md font-bold">
                        <span>Unlock Token</span>
                    </button>
                </Link>
            </div>
    </div>
        </>);
}