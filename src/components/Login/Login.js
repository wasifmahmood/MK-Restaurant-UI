import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import signup from '../../assets/images/signup.svg';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TbFlag2Filled } from 'react-icons/tb';

const modalWrapStyle = {
    bgcolor: "background.paper",
    boxShadow: 30,
    maxWidth: '95vh',
    maxHeight: '90vh',
    borderRadius: 4,
    overflow: "hidden",
    borderStyle: "none",
};

const Login = ({ open, onClose }) => {
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
            <Box sx={{ ...modalWrapStyle }}>
                {/* Modal content */}
                <div className="login-box p-4 bg-danger">
                    <div className="  d-flex justify-content-between border-bottom pb-2">
                        <h5>Sign Up Or Login</h5>
                        <div onClick={onClose} >
                            <AiOutlineClose size={'30px'} />
                        </div>
                    </div>
                    <div className="p-2 d-flex justify-content-between " >
                        <div style={{ flex: 1 }} >
                            <img src={signup} alt="" />
                        </div>
                        <div className="p-4" style={{ flex: 3 }} >
                            <h4>Hey! You're new here!</h4>
                            <p >Use our quick-login to sign up and complete your order in one minute.</p>
                        </div>
                    </div>
                    <div className=" d-flex  justify-content-center ">
                        <div className="p-2 ">
                            <button type="button"className="btn btn-light " >
                                {/* <img src={flag} style={{ width: "50px", height: "34px" }} /> */}
                                <TbFlag2Filled/>
                            </button>
                        </div>
                        <div className="pt-2 ">
                            {/* <input
                                className="rounded"
                                type="number"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder="Enter your phone number"
                                id="quantity"
                                name="quantity"
                                maxLength="11"
                                style={{ width: "300px", height: "40px" }}
                                
                            /> */}
                            <label>
                                <input 
                                className="rounded"
                                name="number" 
                                type="phone-number" 
                                // step="any" 
                                placeholder="Enter your phone number"
                                required 
                                maxLength="11"
                                style={{ width: "300px", height: "40px",padding:'10px' }}
                                />
                            </label>
                        </div>
                        <div className="get-btn p-2" >
                            <button type="button" className="btn btn-dark ">Get code</button>
                        </div>

                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default Login;
