'use client';
import styles from './content.module.css';
import React from 'react';
import { ethers } from 'ethers';
import { useAccount, useBalance, useContractWrite, useWaitForTransaction } from 'wagmi';
import {
    EthTokenAddress, EurocTokenAddress, GoldyAddress,
    GoldyPriceOracleAddress,
    IcoAddress,
    UsdcTokenAddress,
    UsdtTokenAddress
} from '@/config/address/contract.address';
import { GoldyPriceOracleAbi } from '@/config/abi/goldy.price.oracle.abi';
import { useCustomContractRead, useCustomContractReadWithArg } from '@/utills/contract.calls.helper';
import { Erc20TokenAbi } from '@/config/abi/erc20.token.abi';
import { IcoAbi } from '@/config/abi/ico.abi';
import {formatEtherToFloat, getCurrency} from '@/utills/common.util';
import Spinner from '@/components/Loader/spinner.loader';

export default function StatsContent () {
    const { address, isConnected } = useAccount()
    const [isCheckedTab , setIsCheckedTab] = React.useState(true);
    const [tokenAddress , setTokenAddress] = React.useState(UsdtTokenAddress);
    const [tokenValue , setTokenValue] = React.useState(1);
    const [tokenWeight , setTokenWeight] = React.useState(1);
    const [currencyValue , setCurrencyValue] = React.useState(1);
    const [currencyPrice , setCurrencyPrice] = React.useState("");
    const [currencyBalance , setCurrencyBalance] = React.useState("");
    const [currencyWeightedPrice , setCurrencyWeightedPrice] = React.useState("");
    const { data: balanceData, isError: isBalanceError } = useBalance({
        address: address,
    })
    const { data: usdtBalance, isError: isUsdtBalanceError } = useCustomContractReadWithArg(UsdtTokenAddress, Erc20TokenAbi, "balanceOf", [address], isConnected);
    const { data: usdcBalance, isError: isUsdcBalanceError } = useCustomContractReadWithArg(UsdcTokenAddress, Erc20TokenAbi, "balanceOf", [address],isConnected);
    const { data: eurocBalance, isError: isEurocBalanceError } = useCustomContractReadWithArg(EurocTokenAddress, Erc20TokenAbi, "balanceOf", [address],isConnected);
    const { data: euroTroyPriceData, isError: isTroyEuroPriceError } = useCustomContractRead(GoldyPriceOracleAddress, GoldyPriceOracleAbi, "getGoldTroyOunceEuroPrice", isConnected);
    const { data: euroPriceData, isError: isEuroPriceError } = useCustomContractRead(GoldyPriceOracleAddress, GoldyPriceOracleAbi, "getGoldyEuroPrice", isConnected);
    const { data: usdtPriceData, isError: isUsdtPriceError } = useCustomContractRead(GoldyPriceOracleAddress, GoldyPriceOracleAbi, "getGoldyUSDTPrice", isConnected);
    const { data: usdcPriceData, isError: isUsdcPriceError } = useCustomContractRead(GoldyPriceOracleAddress, GoldyPriceOracleAbi, "getGoldyUSDCPrice", isConnected);
    const { data: ethPriceData, isError: isEthPriceError } = useCustomContractRead(GoldyPriceOracleAddress, GoldyPriceOracleAbi, "getGoldyETHPrice", isConnected);
       const { data, isLoading, isSuccess, error,  write } = useContractWrite({
        address: tokenAddress,
        abi: Erc20TokenAbi,
        functionName: 'approve',
    })
    const {isSuccess: isTransactionSuccess, isFetched: isTransactionFetched, isLoading: isTransactionLoading} = useWaitForTransaction({
        hash: data?.hash,
    })
    const { data: icoData, isLoading: isIcoLoading, isSuccess: isIcoSuccess, error: icoError,  write:icoWrite } = useContractWrite({
        address: IcoAddress,
        abi: IcoAbi,
        functionName: 'buyToken',
    })
    const { data: icoPayableData, isLoading: isIcoPayableLoading, isSuccess: isIcoPayableSuccess, error: icoPayableError,  write:icoPayableWrite } = useContractWrite({
        address: IcoAddress,
        abi: IcoAbi,
        functionName: 'buyTokenPayable',
    })
    React.useEffect(() => {
        if(isSuccess && !isLoading && data && isTransactionSuccess && isTransactionFetched) {
            console.log("Success =>", isSuccess);
            icoWrite({
                args: [ethers.parseUnits(String(currencyPrice), 18), currencyValue],
            })
        }
    }, [isSuccess, isLoading, data, isTransactionSuccess, isTransactionFetched]);
    React.useEffect(() => {
        if (currencyValue === 0) {
            setCurrencyPrice((formatEtherToFloat(usdcPriceData ?? 0) * tokenValue).toFixed(10));
            setCurrencyWeightedPrice((formatEtherToFloat(usdcPriceData ?? 0) * tokenWeight * 10000).toFixed(10));
            setCurrencyBalance((formatEtherToFloat(usdcBalance ?? 0) * tokenValue).toFixed(10));
        }
        else if (currencyValue === 1) {
            setCurrencyPrice((formatEtherToFloat(usdtPriceData ?? 0) * tokenValue).toFixed(10));
            setCurrencyWeightedPrice((formatEtherToFloat(usdtPriceData ?? 0) * tokenWeight * 10000).toFixed(10));
            setCurrencyBalance((formatEtherToFloat(usdtBalance ?? 0) * tokenValue).toFixed(10));
        }
        else if (currencyValue === 2) {
            setCurrencyPrice((formatEtherToFloat(ethPriceData ?? 0) * tokenValue).toFixed(10));
            setCurrencyWeightedPrice((formatEtherToFloat(ethPriceData ?? 0) * tokenWeight * 10000).toFixed(10));
            setCurrencyBalance(Number(balanceData?.formatted ?? 0).toFixed(6));
        }
        else if (currencyValue === 3) {
            setCurrencyPrice((formatEtherToFloat(euroPriceData ?? 0) * tokenValue).toFixed(10));
            setCurrencyWeightedPrice((formatEtherToFloat(euroPriceData ?? 0) * tokenWeight * 10000).toFixed(10));
            setCurrencyBalance((formatEtherToFloat(eurocBalance ?? 0) * tokenValue).toFixed(10));
        }
        }, [currencyValue, tokenValue, tokenWeight, currencyBalance]);
    return (<>
        <div className="container flex flex-row space-x-8 mb-4">
            <div className={`container bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-md p-7 basis-2/3`}>
                {!isConnected ? <span>Wallet not Connected</span> : <>
                    <div className="flex flex-row items-center">
                    <div className="text-[24px] font-semibold basis-1/3"><p>Join The Presale</p></div>
                    <div className="flex flex-row justify-end text-[16px] font-bold basis-2/3">
                        <p className="text-red-700">LIVE</p>&nbsp;
                        <p className="">GOLD SPOT PRICE
                            € {Number(ethers.formatUnits(String(euroTroyPriceData ?? 0))).toFixed(4)}/1 Troy Ounce</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-end text-xs"> <p>{new Date().toLocaleDateString('en-US', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })}</p></div>
                    <div className="flex flex-col mt-1">
                    <div>
                        <p className="font-semibold text-lg">Choose Tokens</p>
                        <div className="container flex flex-row space-x-3 pt-1">
                            <label className={ isCheckedTab ? styles.tokenCheckTab : styles.tokenTab} id="labelForRadio">
                            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" checked={isCheckedTab} className="w-5 h-5 cursor-pointer appearance-none checked:bg-white bg-black rounded-full" onChange={() => setIsCheckedTab(!isCheckedTab)}/>
                            <span className={`ml-1 ${isCheckedTab ? 'text-white' : 'text-black'}`} >Goldy</span>
                        </label>
                            <label className={ !isCheckedTab ? styles.tokenCheckTab : styles.tokenTab} id="labelForRadio">
                            <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" checked={!isCheckedTab} className="w-5 h-5 cursor-pointer appearance-none checked:bg-white bg-black rounded-full" onChange={() => setIsCheckedTab(!isCheckedTab)}/>
                            <span className={`ml-1 ${!isCheckedTab ? 'text-white' : 'text-black'}`}>GOLD</span>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="container flex flex-col mt-2">
                        <p className="text-xs">Amount calculated based on current token price</p>
                        <div className="container flex flex-row space-x-4">
                            { isCheckedTab ?
                                <div className="mt-6 flex flex-row space-x-4">
                                    <div>
                                    <p>No Of Tokens</p>
                                    <input type="number"  defaultValue={tokenValue} className="w-[150px] bg-transparent border-b border-black" onChange={(e) => setTokenValue(Number(e.target.value))}/>
                                </div>
                                    <div>
                                        <p>Token Cost</p>
                                        <input type="text" value={currencyPrice} disabled className="w-[150px] bg-transparent border-b border-black focus:border-none focus-visible:border-none"/>
                                        <select name="tokens" id="tokens" className="bg-transparent" onChange={(e) => {
                                            setCurrencyValue(Number(e.target.value));
                                            if (Number(e.target.value) === 0) {
                                                setTokenAddress(UsdcTokenAddress);
                                            }
                                            else if (Number(e.target.value) === 1) {
                                                setTokenAddress(UsdtTokenAddress);
                                            }
                                            else if (Number(e.target.value) === 2) {
                                                setTokenAddress(EthTokenAddress);
                                            }
                                            else if (Number(e.target.value) === 3) {
                                                setTokenAddress(EurocTokenAddress);
                                            }
                                        }}>
                                            <option value={1}>USDT</option>
                                            <option value={0}>USDC</option>
                                            <option value={2}>ETH</option>
                                            <option value={3}>EUROC</option>
                                        </select>
                                        <p className="text-xs font-semibold">EUR {Number(ethers.formatUnits(String(euroPriceData ?? 0))).toFixed(4)}</p>
                                    </div>
                                </div> :
                                <div className="mt-6 flex flex-row space-x-4">
                                    <div>
                                    <p>Enter Gold Weight</p>
                                    <input type="number"  defaultValue={tokenWeight} className="w-[150px] bg-transparent border-b border-black" onChange={(e) => setTokenWeight(Number(e.target.value))}/>
                                </div>
                                    <div>
                                        <p>Token Cost</p>
                                        <input type="text" value={currencyWeightedPrice} disabled className="w-[150px] bg-transparent border-b border-black focus:border-none focus-visible:border-none"/>
                                        <select name="tokens" id="tokens" className="bg-transparent" onChange={(e) => {
                                            setCurrencyValue(Number(e.target.value));
                                            if (Number(e.target.value) === 0) {
                                                setTokenAddress(UsdcTokenAddress);
                                            }
                                            else if (Number(e.target.value) === 1) {
                                                setTokenAddress(UsdtTokenAddress);
                                            }
                                            else if (Number(e.target.value) === 2) {
                                                setTokenAddress(EthTokenAddress);
                                            }
                                            else if (Number(e.target.value) === 3) {
                                                setTokenAddress(EurocTokenAddress);
                                            }
                                        }}>
                                            <option value={1}>USDT</option>
                                            <option value={0}>USDC</option>
                                            <option value={3}>EUROC</option>
                                            <option value={2}>ETH</option>
                                        </select>
                                        <p className=" text-xs font-semibold">No of Goldy/Ounce: 10000</p>
                                    </div>
                                </div>
                            }
                            <div className="text-center">
                                <p className="text-xs font-bold"> Your Balance: {currencyBalance} {getCurrency(currencyValue)}</p>
                                <button className="mt-4 bg-black text-white px-28 py-2 rounded-md" disabled={!write || !icoWrite || !icoPayableWrite || isIcoLoading || isLoading || isIcoPayableLoading}
                                        onClick={() => {
                                            if ( currencyValue !== 2) {
                                                write({
                                                    args: [ IcoAddress, ethers.parseUnits(String(currencyPrice), 18) ]
                                                })
                                            } else {
                                                icoPayableWrite({
                                                    value: ethers.parseUnits(String(currencyPrice), 18)
                                                })
                                            }
                                        }
                                        }>{isLoading || isIcoLoading || isIcoPayableLoading || isTransactionLoading ? <Spinner/> : 'Buy'}</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    </>
                }
            </div>
            <div className={`container basis-1/3 bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-md p-7`}>jdbsjdsjdb</div>
        </div>
    </>);
}
