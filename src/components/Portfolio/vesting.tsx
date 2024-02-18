'use client';
import {formatEtherToFloat, formatNumber} from "@/utills/common.util";
import {useAccount, useContractReads, useContractWrite, useWaitForTransaction} from "wagmi";
import {useCustomContractRead, useCustomContractReadWithArg} from "@/utills/contract.calls.helper";
import {GoldyAddress, GoldyPriceOracleAddress, IcoAddress, VestingAddress} from "@/config/address/contract.address";
import {Erc20TokenAbi} from "@/config/abi/erc20.token.abi";
import {GoldyPriceOracleAbi} from "@/config/abi/goldy.price.oracle.abi";
import React from "react";
import {VestingAbi} from "@/config/abi/vesting.abi";
import Spinner from "@/components/Loader/spinner.loader";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import LockUnlockModal from "@/components/Portfolio/lock-unclock-modal";
import { ethers } from 'ethers';

interface VestingProps {
    locked: number,
    withdrawalAmount: number
}
export default function Vesting(props: VestingProps) {
    const { address, isConnected } = useAccount();
    const { data: goldyBalance, isError: isGoldyBalanceError } = useCustomContractReadWithArg(GoldyAddress, Erc20TokenAbi, "balanceOf", [address], isConnected);
    const searchParams = useSearchParams();
    const lock = searchParams.get("lock");
    const unlock = searchParams.get("unlock");
    const { data, isLoading, isSuccess, error,  write } = useContractWrite({
        address: GoldyAddress,
        abi: Erc20TokenAbi,
        functionName: 'approve',
    })
    const { data: vestingData, isLoading: isVestingLoading, isSuccess: isVestingSuccess, error: vestingError,  write: vestingWrite } = useContractWrite({
        address: VestingAddress,
        abi: VestingAbi,
        functionName: 'create',
    })
    const { data: vestingWithdrawData, isLoading: isVestingWithdrawLoading, isSuccess: isVestingWithdrawSuccess, error: vestingWithdrawError,  write: vestingWithdrawWrite } = useContractWrite({
        address: VestingAddress,
        abi: VestingAbi,
        functionName: 'withdrawWithSpecificAmount',
    })
    const {isSuccess: isTransactionSuccess, isFetched: isTransactionFetched, isLoading: isTransactionLoading} = useWaitForTransaction({
        hash: data?.hash,
    })
    function callApproval(value: string) {
        write({
            args: [ VestingAddress, ethers.parseUnits(String(value), 18) ]
        })
    }
    function callCreate(value: string, time: number) {
        vestingWrite({
            args: [ 1, time, 10000, 0, ethers.parseUnits(String(value), 18), address, GoldyAddress]
        })
    }
    function callWithdraw(value: string) {
        vestingWithdrawWrite({
            args: []
        })
    }
    return (
        <>
            {lock && <LockUnlockModal value={String( goldyBalance ?? 0)} info={"Locking amount should not be more than the balance"} buttonName={"Lock Coin"} approvalAction={callApproval} createAction={callCreate} withdrawAction={callWithdraw} status={isTransactionSuccess} isLoading={isLoading} isVestingLoading={isVestingLoading} isTransactionLoading={isTransactionLoading} title={"Lock Tokens"}/>}
            {unlock && <LockUnlockModal value={String(goldyBalance ?? 0)} info={"Unlocking amount should not be more than the locked balance"} buttonName={"Unlock Coin"} approvalAction={callApproval} createAction={callCreate} withdrawAction={callWithdraw} status={isTransactionSuccess} isLoading={isLoading} isVestingLoading={isVestingLoading} isTransactionLoading={isTransactionLoading} title={"Unlock Tokens"}/>}
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
                            <p className="text-2xl text-white">{formatNumber(formatEtherToFloat(goldyBalance ?? 0) - props.locked)}</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center space-x-4 pr-4">
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Locked</p>
                            <p className="text-2xl text-white">{formatNumber(props.locked)}</p>
                        </div>
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Unlockable</p>
                            <p className="text-2xl text-white">{formatNumber(props.withdrawalAmount)}</p>
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