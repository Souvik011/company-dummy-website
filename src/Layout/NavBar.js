import React,{useState} from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (<React.Fragment>
        <div className='mainnav'>
        <div className='header'><span className='first'>Geeks</span><span className='second'>Invention</span></div>
        <ul className={showMediaIcons ? "mobile-lists" : 'lists'}>
            <div><NavLink className='link' to='/'>HOME</NavLink></div>
            <div><NavLink className='link' to='/'>WORKS</NavLink></div>
            <div><NavLink className='link' to='/'>TECHNOLOGIES</NavLink></div>
            <div><NavLink className='link' to='/'>SERVICES</NavLink></div>
            <div> <NavLink className='link' to='/'>COMPANY</NavLink></div>
            <div><NavLink className='link' to='/'>CONTACTS</NavLink></div>
        </ul>
        <div className="hamburger-menu">
            <button onClick={() => setShowMediaIcons(!showMediaIcons)} >
              <GiHamburgerMenu />
              </button>
        </div>
        </div>
        
    </React.Fragment>);
};

export default NavBar;