'use client'
import NavBar from "@/components/Navbar/navbar";
import Vesting from "@/components/Portfolio/vesting";
import StakeState from "@/components/Portfolio/stake-state";
import Footer from "@/components/Footer/footer";
import React from "react";
import {formatEtherToFloat, formatNumber} from "@/utills/common.util";
import {useCustomContractRead} from "@/utills/contract.calls.helper";
import {VestingAddress} from "@/config/address/contract.address";
import {VestingAbi} from "@/config/abi/vesting.abi";
import {useAccount, useContractReads} from "wagmi";

export default function PortfolioPage () {
    const { address, isConnected } = useAccount();
    const { data: vestingCount, isError: isVestingCountError } = useCustomContractRead(VestingAddress, VestingAbi, "_vestingPoolIdTracker", isConnected);
    const [ list, setList] = React.useState<any[]>([]);
    const [locked, setLocked ] = React.useState<number>(0);
    const [withdrawable, setWithdrawAvailable ] = React.useState<number>(0);
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
    console.log("Vesting pools =>", vestingPools);
    React.useEffect(() => {
        const withdrawalAmount = calculateWithdrawalAmount(withdrawAvailable ?? 0)
        setWithdrawAvailable(withdrawalAmount)
    }
    , [withdrawAvailable]);
    React.useEffect(() => {
        const _list = [];
        for (let i = 0; i < Number(vestingCount); i++) {
            _list.push(i);
        }
        setList(_list);
        setLocked(0);
        vestingPools?.map((pool: any) => {
            setLocked((currentValue) => {
                return currentValue + Number(formatNumber(formatEtherToFloat(pool?.result[5])));
            })
        })
    }, [vestingCount, vestingPools])
    function calculateWithdrawalAmount(withdrawAvailable: any): number {
        let amount = 0;
        withdrawAvailable.map((w: any) => {
            amount += Number(formatNumber(formatEtherToFloat(w.result[1])))
        })
        return amount;
    }
    return (<><NavBar/><Vesting locked={locked} withdrawalAmount={withdrawable}/><StakeState locked={locked}/><Footer/></>);
}
