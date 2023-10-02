'use client';
import styles from './content.module.css';
import React from 'react';

export default function StatsContent () {
    const [isCheckedTab , setIsCheckedTab] = React.useState(true);
    return (<>
        <div className="container flex flex-row space-x-8 mb-4">
        <div className="container bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-md p-7 basis-2/3">
            <div className="flex flex-row items-center">
               <div className="text-[24px] font-semibold basis-1/3"><p>Join The Presale</p></div>
               <div className="flex flex-row justify-end text-[16px] font-bold basis-2/3">
                <p className="text-red-700">LIVE</p>&nbsp;
                <p className="">GOLD SPOT PRICE
                    € 1,804.5343/1 Troy Ounce</p>
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
                                    <input type="number"  defaultValue={1} className="w-[150px] bg-transparent border-b border-black"/>
                                </div>
                                    <div>
                                    <p>Token Cost</p>
                                    <input type="text"  disabled className="w-[150px] bg-transparent border-b border-black focus:border-none focus-visible:border-none"/>
                                    <select name="tokens" id="tokens" className="bg-transparent">
                                        <option value={0}>USDT</option>
                                        <option value={1}>USDC</option>
                                        <option value={2}>EUROC</option>
                                        <option value={3}>ETH</option>
                                    </select>
                                    <p className="text-xs font-semibold">EUR 0.1742</p>
                                </div>
                                </div> :
                                <div className="mt-6 flex flex-row space-x-4">
                                    <div>
                                    <p>Enter Gold Weight</p>
                                    <input type="number"  defaultValue={1} className="w-[150px] bg-transparent border-b border-black"/>
                                </div>
                                    <div>
                                    <p>Token Cost</p>
                                    <input type="text"  disabled className="w-[150px] bg-transparent border-b border-black focus:border-none focus-visible:border-none"/>
                                    <select name="tokens" id="tokens" className="bg-transparent">
                                        <option value={0}>USDT</option>
                                        <option value={1}>USDC</option>
                                        <option value={2}>EUROC</option>
                                        <option value={3}>ETH</option>
                                    </select>
                                    <p className=" text-xs font-semibold">No of Goldy/Ounce: 10000</p>
                                </div>
                                </div>
                            }
                            <div className="text-center">
                                <p className="text-xs font-bold"> Your Balance: 0.683</p>
                                <button className="mt-4 bg-black text-white px-28 py-2 rounded-md">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container basis-1/3 bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-md p-7">jdbsjdsjdb</div>
        </div>
    </>);
}
