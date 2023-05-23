import React, { useState } from "react";
import Logo from "../../assets/images/logo.png"
import '../bannertop/BannerTop.css'
import { FaBars } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";
import { TopbannerDetailsModal } from "../../components/Topmodal/Topmodal";


function BannerTop() {

    const [open, setOpen] = useState(false);
    const handleOutletClick = () => {
        setOpen(true);
    }
    return (
        <div className="banner-top-section p-4" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="outlet-information" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="outlet-information__outlet" onClick={handleOutletClick}>
                    <div><span>Outlet</span></div>
                    <div
                        style={{ color: '#CA2129' }}
                        // onClick={handleOutletClick}
                        >
                        Marks Kitchen - Gulberg
                    </div>
                </div>
                <div className="outlet-information__order">
                    <div><span>Order for</span></div>
                    <div className="d-flex" style={{ color: '#CA2129', alignItems: 'center' }}>
                        <div style={{ marginRight: "10px" }}><CiDeliveryTruck /></div>
                        <div > Delivery</div>
                    </div>
                </div>
                <div className="outlet-information__serving-time">
                    <div><span>Serving time</span></div>
                    <div><span style={{ color: '#CA2129' }}>12:00PM-12:00M</span></div>
                </div>
            </div>
            <div>
                <div className="login-menu-container" style={{ display: 'flex', alignItems: 'center', padding: "1rem" }}>
                    <div><span className="login">Login</span></div>
                    <div className="menu-burger"><FaBars /></div>
                </div>
            </div>
            <TopbannerDetailsModal
                open={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
}

export default BannerTop;