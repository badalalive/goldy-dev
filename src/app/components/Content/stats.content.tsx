'use client';
import styles from './content.module.css';
function changeLabelBackground(event: any) {
    const label = event.target.parentElement;

    if (event.target.checked) {
        label.classList.add('tokenTabChecked');
    } else {
        label.classList.remove('tokenTabChecked');
    }
}


export default function StatsContent () {
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
                    <div className="container flex flex-row space-x-1 pt-1">
                        <label className={styles.tokenTab} id="labelForRadio">
                            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" checked className="w-5 h-5 cursor-pointer appearance-none checked:bg-white bg-black rounded-full" onChange={(event) => changeLabelBackground(event)}/>
                            <span className="ml-1">Goldy</span>
                        </label>
                        <label className={styles.tokenTab} id="labelForRadio">
                            <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-5 h-5 cursor-pointer appearance-none checked:bg-white bg-black rounded-full" onChange={(event) => changeLabelBackground(event)}/>
                            <span className="ml-1">GOLD</span>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="container flex flex-col mt-1">
                        <p className="text-xs">Amount calculated based on current token price</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container basis-1/3 bg-gradient-to-r from-[#be9f59] to-[#433420] rounded-md p-7">jdbsjdsjdb</div>
    </div>
    </>);
}
