import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Topmodal.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiShoppingBag, HiClock } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaRegAddressBook } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";


const modalWrapStyle = {
    bgcolor: "background.paper",
    boxShadow: 30,
    // maxWidth: "45vw",
    // maxHeight: "90vh",
    borderRadius: 4,
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
            <Box className="modal-content p-4 bg-danger"
                sx={{ ...modalWrapStyle,mt:4,mb:4 }} >
                <div className="modal-box " >
                    <div className="modal-contant d-flex justify-content-between " >
                        <h5 class="modal-title " style={{ fontSize: '20px', fontFamily: 'Larsseit, sans-serif' }}>
                            Order Preferences
                        </h5>
                        <div onClick={onClose}>
                            Skip
                        </div>
                    </div>
                    <div className="order-option d-flex pt-4 pr-5 pl-4 pb-2 " style={{ columnGap: 10 }}>
                        <div className="delivery d-flex bg-danger rounded-pill px-3 "
                            style={{ color: 'white', alignItems: "center" }}>
                            <div style={{ marginRight: "5px" }}>
                                <CiDeliveryTruck
                                    size={'25px'}
                                />
                            </div>
                            <div style={{ fontSize: 12 }}>DELIVERY</div>
                        </div>
                        <div className="pickup d-flex bg-danger rounded-pill px-3 "
                            style={{ color: 'white', alignItems: "center" }}>
                            <div style={{ marginRight: "5px" }}>
                                <HiShoppingBag
                                    size={'20px'}
                                />
                            </div>
                            <div style={{ fontSize: 12 }}>PICK UP</div>
                        </div>
                    </div>
                    <div className="location d-flex justify-content-between pt-4 pr-5 pl-4">
                        <div className="fw-bold">Selected Location</div>
                        <div >Edit</div>
                    </div>
                    <div className="log d-flex pt-4 ">
                        <Link to='login'>Login</Link >
                        <div>now to retrieve your saved locations</div>
                    </div>
                    <div className="Select-Outlet d-flex justify-content-between pt-5 pr-5 pl-4">
                        <div className="fw-bold">Selected Outlet</div>
                        <div>Change</div>
                    </div>
                    <div className="address d-flex justify-content-between p-3  border rounded m-1 mt-4" >
                        <div className="address-complete " >
                            <div className="" style={{ columnGap: 10 }}><FaRegAddressBook style={{ marginRight: 10 }} />Marks Kitchen - Gulberg</div>
                            <div className="ps-4">AL-Hafeez View, Block D1, Gulberg 3, Lahore. Pakistan</div>
                        </div>
                        <div className="checkmark "><FcCheckmark /></div>
                    </div>
                    <div className="detail pt-3 pl-4 px-4">
                        When would you like it delivered?
                    </div>
                    {/* <div className={`pickup-detail ${pickupActive ? 'active' : ''}`} onClick={() => setPickupActive(!pickupActive)}>
                     */}
                    {/* <div className="pickup-detail   p-4 position-relative z-index-200">
                        <div><HiClock style={{ marginRight: 8 }} />Pickup Immediatly</div>
                        <div className="ps-4">Out of working hours</div>
                    </div> */}
                    <div className="footer row  pt-4 px-5 " style={{ alignItems: 'center' }}>
                        <button type="button" className="btn btn-danger">Done</button>
                    </div>

                </div>
            </Box>


        </Modal>
    );
};