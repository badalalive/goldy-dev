import Content from "@/app/components/Content/content";
import NavBar from "@/app/components/Navbar/navbar";
import StatsContent from '@/app/components/Content/stats.content';
import Vesting from "@/app/components/Portfolio/vesting";
import StakeState from "@/app/components/Portfolio/stake-state";

export default function Portfolio () {
    return (<><NavBar/><Vesting/><StakeState/></>);
}
