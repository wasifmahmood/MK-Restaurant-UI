import React from "react";
import Logo from "../../assets/images/logo.png"
import '../bannertop/BannerTop.css'
import { FaBars } from 'react-icons/fa';
import { TopOutletinformation } from '../../components/Outletinformation/Outletinformation';
import { Link } from "react-scroll";

function BannerTop() {
    return (
        <div>
            <div className="banner-top-section p-4" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                {/* <div className="outlet-information" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="outlet-information__outlet" onClick={handleOutletClick}>
                        <div><span>Outlet</span></div>
                        <div style={{ color: '#CA2129', fontSize: 14 }}>
                            Marks Kitchen - Gulberg
                        </div>
                    </div>
                    <div className="outlet-information__order" onClick={handleOutletClick}>
                        <div><span>Order for</span></div>
                        <div className="d-flex" style={{ color: '#CA2129', alignItems: 'center' }}>
                            <div style={{ marginRight: "10px", }}><CiDeliveryTruck size={'25px'} /></div>
                            <div style={{ color: '#CA2129', fontSize: 14 }}> Delivery</div>
                        </div>
                    </div>
                    <div className="outlet-information__serving-time">
                        <div><span>Serving time</span></div>
                        <div><span style={{ color: '#CA2129', fontSize: 14 }}>{dateTime} 12:00PM</span></div>
                    </div>
                </div> */}
                <div className="outlet-information-desktop">
                    <TopOutletinformation />
                </div>
                <div>
                    <div className="login-menu-container" style={{ display: 'flex', alignItems: 'center', padding: "1rem" }}>
                        <div><span className="login"><Link to='/'>

                            Login</Link></span></div>
                        <div className="menu-burger"><FaBars /></div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default BannerTop;