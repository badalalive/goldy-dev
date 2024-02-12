import NavBar from "@/app/components/Navbar/navbar";
import Vesting from "@/app/components/Portfolio/vesting";
import StakeState from "@/app/components/Portfolio/stake-state";
import Footer from "@/app/components/Footer/footer";

export default function PortfolioPage () {
    return (<><NavBar/><Vesting/><StakeState/><Footer/></>);
}
