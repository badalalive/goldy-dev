import {formatEtherToFloat, formatNumber} from "@/utills/common.util";
import Link from "next/link";
import React from "react";
import Spinner from "@/components/Loader/spinner.loader";

interface LockUnlockModalProps {
    title: string,
    value: string,
    info: string,
    buttonName: string,
    approvalAction: (value: string) => void,
    createAction: (value: string, time: number) => void,
    withdrawAction: (value: string) => void,
    status: boolean,
    isLoading: boolean,
    isVestingLoading: boolean,
    isTransactionLoading: boolean
}
export default function LockUnlockModal (props: LockUnlockModalProps) {
    const [amount, setAmount] = React.useState<string>("0");
    console.log("status =>", props.status);
    console.log("isLoading =>", props.isLoading);
    console.log("isTransactionLoading =>", props.isTransactionLoading);
    console.log("isVestingLoading =>", props.isVestingLoading);
    React.useEffect(() => {
        if(props.status && !props.isLoading) {
            console.log("Success =>", props.status, Math.floor((new Date().getTime() + 10 * 60 * 1000) / 1000));
            props.createAction(amount, Math.floor((new Date().getTime() + 10 * 60 * 1000) / 1000));
        }
    },[props.status, props.isLoading, props.isTransactionLoading]);
    return (
        <div className="fixed inset-0 backdrop-blur-xl flex justify-center items-center">
            <div className="w-1/2 text-white border-4 border-[#FFD678] py-6 rounded-md  bg-[#272727]">
                <div className=" pl-12 pr-36">
                    <h1 className="text-xl font-bold">{props.title}</h1>
                    <br/>
                    <p className="font-semibold">Total Coins: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be9f59] to-[#433420]">{formatNumber(formatEtherToFloat(props.value ?? 0))}</span></p>
                    <p className="text-[#999999]">Tokens can only be unlocked after a period of 1 year, calculated from the purchasing date.</p>
                    <br/>
                    <p className="font-semibold">Enter Amount</p>
                    <input type="text" value={amount} placeholder={String(0)} className="w-full bg-transparent border-b border-grey focus:border-none focus-visible:border-none" onChange={(e) => setAmount(e.target.value)}/>
                    <br/>
                    <br/>
                </div>
                <div>
                    <p className="text-xs text-center">{props.info}</p>
                    <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-[#FED678] to-[#9B6128] px-12 py-2 text-black mt-3 rounded font-bold" disabled={props.isLoading} onClick={() => {
                            props.approvalAction(amount)
                        }}>{props.isLoading || props.isTransactionLoading || props.isVestingLoading ? <Spinner/> : props.buttonName}</button>
                    </div>
                    <Link href="/portfolio">
                        <p className="text-center pt-4">Cancel</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}