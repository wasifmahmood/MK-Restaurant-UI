import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import '../bannertop/BannerTop.css';
import { FaBars } from 'react-icons/fa';
import { TopOutletinformation } from '../../components/Outletinformation/Outletinformation';
import Login from "../Login/Login";

function BannerTop() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }
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
                        <div><span className="login" 
                        onClick={handleClick}
                        >
                            Login</span></div>
                        <div className="menu-burger" ><FaBars /></div>
                    </div>
                </div>
            </div>
            <div>
                <Login
                    open={open}
                    onClose={() => setOpen(false)}
                />
            </div>
        </div>
    );
}

export default BannerTop;