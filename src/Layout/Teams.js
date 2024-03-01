import './Teams.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
const Teams = () => {
    return (<div className="teams">
        <div className="team-header">
            <span style={{textAlign:"center",fontSize:"2rem",marginTop:"6vh"}}>Only dedicated teams</span>
            <span style={{textAlign:"center",fontSize:"1rem",marginTop:"3vh"}}>Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</span>
        </div>
        <div className="team-info">
            <div className="team-info-names"></div>
            <div className="team-info-names"></div>
            <div className="team-info-names"></div>
            <div className="team-info-names"></div>
            <div className="team-info-names"></div>
            <div className="team-info-names"></div>
        </div>
        <div className="team-infos">See our services <AiOutlineArrowRight/></div>
    </div>);
};

export default Teams;