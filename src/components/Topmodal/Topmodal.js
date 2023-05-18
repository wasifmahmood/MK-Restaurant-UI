import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Topmodal.css";


const modalWrapStyle = {
    bgcolor: "background.paper",
    boxShadow: 30,
    maxWidth: "80vw",
    maxHeight: "80vh",
    borderRadius: 4,
    overflow: "hidden",
    borderstyle: "none",
};

export const TopbannerDetailsModal = ({
    topopen,
    toponClose,
}) => {
    return (
        <Modal
            topopen={topopen}
            toponClose={toponClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box className="modal-content" sx={{ ...modalWrapStyle }}>
                <div>
                    <h1>
                        Cybex Solution
                    </h1>
                </div>
            </Box>


        </Modal>
    );
};