import {formatNumber} from "@/app/utills/common.util";

export default function StakeState() {
    return (<>
        <div className="flex mt-10 mx-16">
            <div className="container flex flex-row space-x-4 text-white">
                <div className="container flex flex-row basis-1/2 rounded-md p-4 border-2 border-[#FFD678] bg-[#494333]">
                    <div className="container basis-2/3">
                        <p className="text-[#FFE082] text-xl">Stakes</p>
                        <p className="font-bold text-xl my-2">Your Balance: {formatNumber(3700)} Goldy</p>
                        <p>Locked tokens: {formatNumber(0)}</p>
                        <p className="my-2">Value of <span className="text-[#FFE082]">Goldy</span></p>
                        <p>USDT = ${formatNumber(6254326)}</p>
                        <p>Physical Gold = {formatNumber(102)} Ounce</p>
                        <button className="bg-[#FFE082] px-6 py-2 text-black mt-3 rounded-md font-bold">Buy Coins</button>
                    </div>
                    <div className="container flex justify-end mb-8 basis-1/3">
                        <img src='/spiral.svg' className="w-60" alt='logo'/>
                    </div>
                </div>
                <div className="container basis-1/2 rounded-md p-4 border-2 border-[#FFD678] bg-[#494333]">
                    <p className="text-[#FFE082] text-xl">Statistic</p>
                    <div className="flex flex-row justify-between space-x-2.5">
                        <div className="bg-orange-950">
                            <p>Total Stakes</p>
                        </div>
                        <div className=" bg-green-600">
                            <p>Total Staked Value</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}