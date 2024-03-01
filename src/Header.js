import MainComponent from "./Layout/MainComponent";
import Fintech from "./Layout/Fintech";
import IndustrialIot from "./Layout/IndustrialIot";
import SmartEducation from "./Layout/SmartEducation";
import Details from "./Layout/Details";
import Software from "./Layout/Software";
import Teams from "./Layout/Teams";
import RecentClient from "./Layout/RecentClients";
import LastPage from "./Layout/LastPage";
const Header = () => {
    return (<>
    <MainComponent/>
    <Fintech />
    <IndustrialIot />
    <SmartEducation />
    <Details />
    <RecentClient />
    <Software />
    <Teams />
    <LastPage />
    </>);
};

export default Header;