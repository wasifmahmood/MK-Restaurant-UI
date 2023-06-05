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
        // style={{ color: '#CA2129', fontSize: 14, border: 'none', backgroundColor: 'white' }}
        <div>
            <div className="outlet-information" style={{ display: 'flex', alignItems: 'center', fontSize: 13 }}onClick={handleOutletClick}>
                <div className="outlet-information__outlet" >
                    <div >
                        <button style={{ border: 'none', backgroundColor: 'white' }}>
                            Outlet
                        </button>
                    </div>
                    <div className="address">
                        <button style={{ color: '#CA2129', border: 'none', backgroundColor: 'white' }}>
                            Marks Kitchen - Gulberg
                        </button>
                    </div>

                </div>
                <div className="outlet-information__order" >
                    <div>
                        <button style={{ border: 'none', backgroundColor: 'white' }}>Order for</button>
                    </div>
                    <div className="d-flex" style={{ color: '#CA2129', alignItems: 'center' }}>
                        <div className="truck" style={{ marginRight: "10px", }}>
                            <CiDeliveryTruck size={'20px'} />
                        </div>
                        <div style={{ fontSize: 13 }}>
                            <button style={{ color: '#CA2129', border: 'none', backgroundColor: 'white' }}>
                                Delivery
                            </button>
                        </div>

                    </div>
                </div>
                <div className="outlet-information__serving-time" >
                    <div>
                        <button style={{ border: 'none', backgroundColor: 'white', alignItems: 'center' }}>
                            Serving time
                        </button>
                    </div>
                    <div className="show" >
                        <button style={{ color: '#CA2129', fontSize: 12, border: 'none', backgroundColor: 'white' }}>
                            {dateTime} 12:30PM
                        </button>
                    </div>
                    <div className="ignor">
                        <button style={{ color: '#CA2129', fontSize: 12, border: 'none', backgroundColor: 'white' }}>
                            ASAP
                        </button>
                    </div>
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

