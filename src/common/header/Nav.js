import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="main-menu__list">
            <li>
                <Link to={process.env.PUBLIC_URL + `/`}>Home <span className=""></span></Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + `/about`}>About <span className=""></span></Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + `/services`}>Services <span className=""></span></Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + `/projects`}>Projects <span className=""></span></Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + `/Products`}>Our Products<span className=""></span></Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + `/contact`}>Contact <span className=""></span></Link>
            </li>
        </ul>
    )
}

export default Nav;
