import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const menuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Services',
        path: '/services',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
    },
    
    {
        title: 'Products',
        path: '/products',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
    },

    {
        title: 'Projects',
        path: '/projects',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
    },
    {
        title: 'Contact',
        path: '/contact',
    },
];

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px 28px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
    &:hover {
        background: #123316;
        color: #fff;
        cursor: pointer;
    }
    &:last-of-type {
        margin-bottom: 32px;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 0px;
    color: #fff;
    font-weight: 400;
`;

const DropdownLink = styled(Link)`
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    &:hover,
    &:active {
        background: #123316;
        cursor: pointer;
        color: #fff;
    }
`;

const SidebarNav = styled.nav`
    background: linear-gradient(135deg, #3cab41 0%, #123316 100%);
    width: 300px;
    height: 100vh;
    position: fixed;
    overflow-y: auto;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 100001;
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Overlay = styled.div`
    display: ${({ sidebar }) => (sidebar ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    z-index: 100000;
`;

const CloseIconWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 10px 20px 0 0;
`;

const HamburgerButton = styled.div`
    background: #fff;
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    cursor: pointer;
`;

const SubMenu = ({ item, closeSidebar }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = (e) => {
        e.preventDefault();
        setSubnav(!subnav);
    };
    const handleLinkClick = () => {
        if (!item.children) {
            closeSidebar();
        }
    };
    return (
        <>
            <SidebarLink
                to={item.path ? process.env.PUBLIC_URL + `${item.path}` : '#'}
                onClick={item.children ? showSubnav : handleLinkClick}
            >
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.children && (subnav ? item.iconOpened : item.iconClosed)}
                </div>
            </SidebarLink>
            {item.children && subnav &&
                item.children.map((child, idx) => (
                    <DropdownLink
                        to={process.env.PUBLIC_URL + `${child.path}`}
                        key={idx}
                        onClick={closeSidebar}
                    >
                        {child.title}
                    </DropdownLink>
                ))
            }
        </>
    );
};

const MobileMenu = ({ className = "" }) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    let publicUrl = process.env.PUBLIC_URL+'/'
    const closeSidebar = () => setSidebar(false);
    return (
        <div className={className}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '10px 20px 0 20px' }}>
                <HamburgerButton onClick={showSidebar}>
                    <AiOutlineBars style={{ color: '#123316', fontSize: '2rem' }} />
                </HamburgerButton>
            </div>
            <Overlay sidebar={sidebar} onClick={closeSidebar} />
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <div className="mobile-nav__content">
                        <div className="logo-box">
                            <Link to={process.env.PUBLIC_URL + `/`} aria-label="logo image"><img src={publicUrl+"assets/images/resources/logo.png"} width="135" alt="" /></Link>
                        </div>
                        <CloseIconWrap>
                            <AiIcons.AiOutlineClose
                                style={{
                                    color: 'white',
                                    fontSize: '2rem',
                                    cursor: 'pointer',
                                }}
                                onClick={closeSidebar}
                            />
                        </CloseIconWrap>
                        {menuData.map((item, index) => (
                            <SubMenu item={item} key={index} closeSidebar={closeSidebar} />
                        ))}
                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:info.charot@gmail.com">info.charot@gmail.com</a>
                            </li>
                            <li>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <a href="tel:+251908686868">
                                +251908686868</a>
                            </li>
                        </ul> 
                        {/* Mobile Social Media Links during mobile view for better user experience */}
                        <div className="mobile-nav__top">
                            <div className="mobile-nav__social">
                                
                                <a href="https://t.me/charotecodoors" target="_blank" rel="noopener noreferrer">

                                    <span className="fab fa-telegram-plane"></span>
                                </a>

                                <a href="https://wa.me/251908686868" target="_blank" rel="noopener noreferrer">
                                    <span className="fab fa-whatsapp"></span>
                                </a>

                                <a href="https://www.tiktok.com/@charot.eco.doors?_t=ZM-8uhQZluVwrH&_r=1" target="_blank" rel="noopener noreferrer">
                                    <span className="fab fa-tiktok"></span>
                                </a>

                                <a href="https://web.facebook.com/people/Charot-Eco-Doors/pfbid02HKC258FgsG2t2mNm3fqNi78Ttzb3sdkqW7kL4Hkf8qZTciRmZTV9fLTiTwAjonBQl/?rdid=EYOU075vyYWKlYWe&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F15guT785js%2F%3F_rdc%3D1%26_rdr" target="_blank" rel="noopener noreferrer">
                                    <span className="fab fa-facebook"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </SidebarWrap>
            </SidebarNav>
        </div>
    );
};

export default MobileMenu;