import {formatNumber} from "@/app/utills/common.util";

export default function Vesting() {
    return (<div className="flex mt-24 mx-16">
        <div className="bg-[#272727] rounded-md">
            <div className="container flex flex-row">
                <div className="container basis-1/2 p-8">
                    <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#be9f59] to-[#433420]">Lock or Unlock Tokens For Maximum <br/><p className="text-[#be9f59]">Profits</p></span>
                    <h1 className="text-white text-xs">Goldy coin fully backed by physical gold. Merges gold&apos;s safety with digital asset convenience, security, and affordability.</h1>
                </div>
                <div className="container flex flex-col basis-1/2 py-4 space-y-4">
                    <div className="flex flex-row justify-center space-x-4 pr-4">
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Total</p>
                            <p className="text-3xl text-white">{formatNumber(37000)}</p>
                        </div>
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Lockable</p>
                            <p className="text-3xl text-white">{formatNumber(37000)}</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center space-x-4 pr-4">
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Locked</p>
                            <p className="text-3xl text-white">{formatNumber(37000)}</p>
                        </div>
                        <div className="text-center rounded-xl w-[18rem] py-1 border-2 border-[#F4DA7A] border-b-[#8A4502]">
                            <p className="text-white">Unlocked</p>
                            <p className="text-3xl text-white">{formatNumber(37000)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}