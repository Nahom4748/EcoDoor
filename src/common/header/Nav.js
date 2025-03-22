import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="main-menu__list">
            <li className="dropdown current">
                <Link to={process.env.PUBLIC_URL + `/`}>Home <span className="line"></span></Link>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/`}>Home One</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Home Two</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Home Three</Link></li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Header Styles</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/`}>Header One</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Header Two</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Header Three</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li><Link to={process.env.PUBLIC_URL + `/about`}>About <span className="line"></span></Link></li>

            <li className="dropdown">
                <Link to={process.env.PUBLIC_URL + `#`}>Services <span className="line"></span></Link>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/services`}>Services</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/arbor-management`}>Arbor Management</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/garden-management`}>Garden Management</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/nursery`}>Nursery & Tree Farm</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/trimming`}>Trimming & Pruning</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/weeds-control`}>Pests & Weeds Control</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/flowers-garden`}>Fruits & Flowers Garden</Link></li>
                </ul>
            </li>

            <li className="dropdown">
                <Link to={process.env.PUBLIC_URL + `#`}>Pages <span className="line"></span></Link>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/team`}>Team</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/team-details`}>Team Details</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/portfolio-1`}>Portfolio 01</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/portfolio-2`}>Portfolio 02</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/faq`}>Faq</Link></li>
                </ul>
            </li>

            <li className="dropdown">
                <Link to={process.env.PUBLIC_URL + `#`}>Blog <span className="line"></span></Link>
                <ul>
                    <li><Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/blog-grid`}>Blog Grid</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + `/blog-details`}>Blog Details</Link></li>
                </ul>
            </li>
            <li><Link to={process.env.PUBLIC_URL + `/contact`}>Contact <span className="line"></span></Link></li>
        </ul>
    )
}

export default Nav;


