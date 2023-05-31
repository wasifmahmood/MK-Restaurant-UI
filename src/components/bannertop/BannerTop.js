import React from "react";
import Logo from "../../assets/images/logo.png"
import '../bannertop/BannerTop.css'
import { FaBars } from 'react-icons/fa';
import { TopOutletinformation } from '../../components/Outletinformation/Outletinformation';
import Drawer from '../drawer/Drawer'

function BannerTop() {
    return (
        <div>
            <div className="banner-top-section p-4" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="outlet-information-desktop">
                    <TopOutletinformation />
                </div>
                <div>
                    <div className="login-menu-container" style={{ display: 'flex', alignItems: 'center', padding: "1rem" }}>
                        {/* <div><span className="login"><Link to='/'>Login</Link></span></div> */}
                        <div className="menu-burger" onClick={<Drawer />}><FaBars /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerTop;