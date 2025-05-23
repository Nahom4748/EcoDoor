import React from 'react';
import {Link} from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
// import SearchButton from './SearchButton';
import LogoThree from './LogoThree';


export default class HeaderThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <header className="main-header main-header-three">

                    <div className="main-header-three__inner">
                        <nav className="main-menu main-menu-one">
                            <div className="main-menu__wrapper clearfix">
                                <div className="container-fluid">
                                    <div className="main-menu__wrapper-inner">

                                        <div className="main-header-three__left">
                                            <div className="main-menu-box">
                                                <MobileMenu className="MobileMenu" />
                                                <Nav className="Nav" />
                                            </div>
                                        </div>

                                        <div className="main-header-three__middle">
                                            <LogoThree />
                                        </div>

                                        <div className="main-header-three__right">
                                            <div className="main-header-three__right-contact">
                                                <div className="icon-box">
                                                    <span className="icon-phone"></span>
                                                </div>

                                                <div className="content-box">
                                                    <p>Call In Anytime</p>
                                                    <a href="tel:+251908686868">+251-90-868-6868</a>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </header>
            </>
        )
    }
}