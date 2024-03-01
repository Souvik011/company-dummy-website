import {NavLink} from 'react-router-dom';

const LastPage = () => {
    return (<div style={{color:"black",display:"grid",position:"fixed"}}>
        <section>
        <div>Get to know us better!</div>
        <div>It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.</div>
        <div>Drop us a Message</div>
        </section>
        <div>
            <div>
                <span>Geesk<span>Invention</span></span>
                <span>447 Broadway, 2nd Floor Suite #772, New York 10013, United States
+1-347-535-0004</span>
            </div>
            <div>
            <div>
            <div><NavLink className='link' to='/'>HOME</NavLink></div>
            <div><NavLink className='link' to='/'>WORKS</NavLink></div>
            <div><NavLink className='link' to='/'>TECHNOLOGIES</NavLink></div>
            <div><NavLink className='link' to='/'>SERVICES</NavLink></div>
            <div> <NavLink className='link' to='/'>COMPANY</NavLink></div>
            <div><NavLink className='link' to='/'>CONTACTS</NavLink></div>
            </div>
            <div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
            </div>
            <div>
                stay tuned for our Updates
            </div>
            </div>
        </div>
        <div>
        © Copyright 2023 – Mobile App Design and Development Company. All Rights Reserved
        </div>
        
    </div>)
};

export default LastPage;