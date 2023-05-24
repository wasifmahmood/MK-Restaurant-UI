import React, { useEffect, useState } from "react";
import './Outletinformation.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { TopbannerDetailsModal } from "../../components/Topmodal/Topmodal";


export const TopOutletinformation = () => {
    const [open, setOpen] = useState(false);
    const handleOutletClick = () => {
        setOpen(true);
    }
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        // Update the date and time every second
        const intervalId = setInterval(() => {
            const date = new Date();
            const formattedDateTime = formatDateTime(date);
            setDateTime(formattedDateTime);
        }, 1000);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatDateTime = (date) => {
        const options = {
            day: 'numeric',
            month: 'long',

        };
        return date.toLocaleString('en-US', options);
    };
    return (
        <div>
            <div className="outlet-information" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="outlet-information__outlet" onClick={handleOutletClick}>
                    <div><span>Outlet</span></div>
                    <div style={{ color: '#CA2129', fontSize: 14 }}>
                        Marks Kitchen - Gulberg
                    </div>
                </div>
                <div className="outlet-information__order" onClick={handleOutletClick}>
                    <div><span>Order for</span></div>
                    <div className="d-flex" style={{ color: '#CA2129', alignItems: 'center' }}>
                        <div className="truck" style={{ marginRight: "10px", }}><CiDeliveryTruck size={'25px'} /></div>
                        <div style={{ color: '#CA2129', fontSize: 14 }}> Delivery</div>
                    </div>
                </div>
                <div className="outlet-information__serving-time" onClick={handleOutletClick}>
                    <div><span>Serving time</span></div>
                    <div className="show" ><span style={{ color: '#CA2129', fontSize: 14 }}>{dateTime} 12:00PM</span></div>
                    <div className="ignor"><span style={{ color: '#CA2129', fontSize: 14 }}>ASAP</span></div>
                </div>
            </div>
            <div>
                <TopbannerDetailsModal
                    open={open}
                    onClose={() => setOpen(false)}
                />
            </div>
        </div>
    );
}

