export default function StatsContent () {
    return (<>
        <div className="container flex flex-row space-x-8 mb-4">
        <div className="container bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-md p-6 basis-2/3">
            <div className="flex flex-row">
               <div className="text-[18px] font-bold basis-1/3"><p>Join The Presale</p></div>
               <div className="flex flex-row justify-end text-[16px] font-bold basis-2/3">
                <p className="text-red-700">LIVE</p>&nbsp;
                <p className="">GOLD SPOT PRICE
                    € 1,804.5343/1 Troy Ounce</p>
            </div>
           </div>
            <div className="flex flex-col mt-1">
                <div>
                    <p className="font-bold">Choose Tokens</p>
                    <div className="container flex flex-row space-x-1">
                        <div className="container flex items-center justify-center border border-gray-200 rounded">
                            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-5 h-5 appearance-none checked:bg-white bg-black rounded-full"/>
                            <label className="w-full ml-2">Goldy</label>
                        </div>
                        <div className="container flex items-center border border-gray-200 rounded dark:border-gray-700">
                            <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-5 h-5 appearance-none checked:bg-white bg-black rounded-full"/>
                            <label className="w-full ml-2">GOLD</label>
                        </div>
                    </div>

                </div>
                <div></div>
            </div>
        </div>
        <div className="container basis-1/3 bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-md p-6">jdbsjdsjdb</div>
    </div>
    </>);
}
