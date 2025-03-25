import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="main-menu__list">
            <li className=" current">
                <Link to={process.env.PUBLIC_URL + `/`}>Home <span className="line"></span></Link>
        
            </li>

            <li><Link to={process.env.PUBLIC_URL + `/about`}>About <span className="line"></span></Link></li>

            <li className="">
                <Link to={process.env.PUBLIC_URL + `#`}>Services <span className="line"></span></Link>
             
            </li>

            <li className="">
                <Link to={process.env.PUBLIC_URL + `#`}>Pages <span className="line"></span></Link>
               
            </li>

            <li className="">
                <Link to={process.env.PUBLIC_URL + `#`}>Blog <span className="line"></span></Link>
                
            </li>
            <li><Link to={process.env.PUBLIC_URL + `/contact`}>Contact <span className="line"></span></Link></li>
        </ul>
    )
}

export default Nav;


