import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Topmodal.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaRegAddressBook } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";



const modalWrapStyle = {
    bgcolor: "background.paper",
    boxShadow: 30,
    maxWidth: "50vw",
    maxHeight: "80vh",
    borderRadius: 2,
    overflow: "hidden",
    borderstyle: "none",
};

export const TopbannerDetailsModal = ({
    open,
    onClose,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box className="modal-content" sx={{ ...modalWrapStyle }}>
                <div className="modal-box">
                    <div className="modal-contant d-flex">
                        <div className="modal-title">
                            Order Preferences
                        </div>
                        <div onClick={onClose}>
                            Skip
                        </div>
                    </div>
                    <div className="order-option d-flex">
                        <div className="delivery d-flex" style={{ alignItems: "center" }}>
                            <div style={{ marginRight: "10px" }}><CiDeliveryTruck /></div>
                            <div >Delivery</div>
                        </div>
                        <div className="pickup d-flex " style={{ alignItems: "center" }}>
                            <div style={{ marginRight: "10px" }}><HiShoppingBag /></div>
                            <div>PICK UP</div>
                        </div>
                    </div>
                    <div className="location d-flex">
                        <div className="ps-2 fw-bold">Selected Location</div>
                        <div >Edit</div>
                    </div>
                    <div className="log d-flex">
                        <Link to='login'>Login</Link >
                        <div>now to retrieve your saved locations</div>
                    </div>
                    <div className="Select-Outlet d-flex">
                        <div className="ps-2 fw-bold">Selected Outlet</div>
                        <div>Change</div>
                    </div>
                    <div className="address ">
                        <div className="d-flex" style={{ columnGap: 10 }}>
                            <div><FaRegAddressBook /></div>
                            <div>Marks Kitchen - Gulberg</div>
                            <div><FcCheckmark /></div>
                            AL-Hafeez View, Block D1, Gulberg 3, Lahore. Pakistan
                        </div>
                    </div>
                </div>
            </Box>


        </Modal>
    );
};