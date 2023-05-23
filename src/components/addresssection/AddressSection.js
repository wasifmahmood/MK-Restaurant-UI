import React from "react";
import "../addresssection/AddressSection.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCreditCard } from "react-icons/fa";

const AddressSection = ({ title, address, phone, hours, minOrder }) => {
    return (
        <section className="address-section bg-c-light p-4">
            <div style={{ display: "flex", alignItems: "left", padding: "1rem" }}>
                <h1 className="main-heading">{title}</h1>
            </div>
            <div style={{ display: "flex", alignItems: "start", flexWrap: "wrap" }}>
                <div style={{ flex: 1, textAlign: "start", display: "flex", alignItems: "start", minWidth: "250px" }}>
                    <FaMapMarkerAlt size={20} />
                    <span className="ps-2">{address}</span>
                </div>
                <div style={{ flex: 1, textAlign: "center", minWidth: "250px" }}>
                    <FaPhoneAlt size={18} />
                    <span className="ps-2">{phone}</span>
                </div>
                <div style={{ flex: 1, textAlign: "center", minWidth: "250px" }}>
                    <FaClock size={18} />
                    <span className="ps-2">{hours}</span>
                </div>
                <div style={{ flex: 1, textAlign: "center", minWidth: "250px" }}>
                    <FaCreditCard size={18} />
                    <span className="ps-2">{minOrder}</span>
                </div>
            </div>
        </section>
    );
};

export default AddressSection;
