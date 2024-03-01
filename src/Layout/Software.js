import './Software.css';
import {AiOutlineArrowRight} from 'react-icons/ai';


const Software = () => {
    return (<div className="software">
        <div className="software-header">
            <span style={{fontSize:"7vh",textAlign:"center"}}>Software for modern platforms</span>
            <span style={{fontSize:"3vh",color:"rgb(168, 163, 155)",marginTop:"3vh"}}>We develop applications for mobile, web, wearables, and TV.</span>
        </div>
        <div className="software-info">
            <div className="software-img">
                <img src={'https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg'} alt='Web' />
                <p style={{textAlign:"center",fontSize:"1.3rem"}}>Web</p>
            </div>
            <div className="software-img">
                <img src={'https://geeksinvention.com/assets/software-platforms/ios-00fc94480a85413ba6276b2392cbaa0a.svg'} alt='ios' />
                <p style={{textAlign:"center",fontSize:"1.3rem"}}>iOS</p>
            </div>
            <div className="software-img">
                <img src={'https://geeksinvention.com/assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg'} alt='Android' />
                <p style={{textAlign:"center",fontSize:"1.3rem"}}>Android</p>
            </div>
            <div className="software-img">
            <img src={'https://geeksinvention.com/assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg'} alt='Hybrid' />
                <p style={{textAlign:"center",fontSize:"1.3rem"}}>Hybrid</p>
            </div>
            <div className="software-img">
            <img src={'https://geeksinvention.com/assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg'} alt='Wearables' />
                <p style={{textAlign:"center",fontSize:"1.3rem"}}>Wearables</p>
            </div>
            <div className="software-img">
            <img src={'https://geeksinvention.com/assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg'} alt='Tv' />
                <p style={{textAlign:"center",fontSize:"1.3rem"}}>Tv</p>
            </div>
        </div>
        <div className="software-details">
            <span>See our tech stack <AiOutlineArrowRight /> </span>
        </div>
    </div>);
};

export default Software;