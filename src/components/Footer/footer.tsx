import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faEnvelope, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    return (<>
        <footer className="flex flex-row bg-gradient-to-r from-[#EED578] to-[#896431] p-12 mt-32">
            <div className="container basis-2/5 px-2">
                <h1 className="font-bold text-2xl">Goldy</h1>
                <p className="font-light text-sm">Goldy is an Asset Reference Token backed by physical gold brought to you by DOWMAP GmbH, leading technology innovations services company, committed to providing secure and innovative products with a track record of excellence spanning years.</p>
            </div>
            <div className="container basis-1/5 px-2">
                <h1 className="font-bold text-2xl text-[#333333]">Company</h1>
                <p className="font-semibold py-3 text-sm">
                    <FontAwesomeIcon icon={faChevronRight} />
                    &nbsp;
                    About Us
                </p>
                <p className="font-semibold py-3 text-sm">
                    <FontAwesomeIcon icon={faChevronRight} />
                    &nbsp;
                   White Paper
                </p>
            </div>
            <div className="container basis-1/5 px-2">
                <h1 className="font-bold text-2xl text-[#333333]">Resources</h1>
                <p className="font-semibold py-3 text-sm">
                    <FontAwesomeIcon icon={faChevronRight} />
                    &nbsp;
                    FAQs
                </p>
                <p className="font-semibold py-3 text-sm">
                    <FontAwesomeIcon icon={faChevronRight} />
                    &nbsp;
                    Terms & Conditions
                </p>
                <p className="font-semibold py-3 text-sm">
                    <FontAwesomeIcon icon={faChevronRight} />
                    &nbsp;
                    Privacy Policy
                </p>
            </div>
            <div className="container basis-1/5 px-2">
                <div className="py-3">
                    <FontAwesomeIcon icon={faPhoneVolume} className="text-[#333333] text-sm"/>&nbsp;<span className="text-xs text-[#333333]">Call US On: <p className="font-bold">+89 257-232-2323</p></span>
                </div>
                <div className="py-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#333333] text-sm" />&nbsp;<span className="text-xs text-[#333333]">Drop us a Mail: <p className="font-bold">info@glodydev.com</p></span>
                </div>
            </div>
        </footer>
    </>);
}