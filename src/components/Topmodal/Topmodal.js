import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Topmodal.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiShoppingBag, HiClock } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaRegAddressBook } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { GrAdd } from "react-icons/gr";
// import { NewAddress } from '../Newaddress';

const modalWrapStyle = {
  bgcolor: "background.paper",
  boxShadow: 30,
  // maxWidth: "45vw",
  // maxHeight: "90vh",
  borderRadius: 4,
  overflow: "hidden",
  borderstyle: "none",
};

export const TopbannerDetailsModal = ({ open, onClose }) => {
  const [flag, setflag] = useState(true);
  const [addAddressEdit, setaddAddressEdit] = useState(false);
  const [addNewAddress, setaddNewAddress] = useState(false);
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
      <Box
        className="modal-content p-4 "
        sx={{ ...modalWrapStyle, mt: 4, mb: 4 }}
      >
        <div className="modal-box ">
          <div className="modal-contant d-flex justify-content-between ">
            <h5
              class="modal-title "
              style={{ fontSize: "20px", fontFamily: "Larsseit, sans-serif" }}
            >
              Order Preferences
            </h5>
            <div onClick={onClose}>Skip</div>
          </div>
          <div
            className="order-option d-flex pt-4 pr-5 pl-4 pb-2 "
            style={{ columnGap: 10 }}
          >
            <div
              className="delivery d-flex bg-danger rounded-pill px-3 "
              style={{ color: "white", alignItems: "center" }}
            >
              <div style={{ marginRight: "5px" }}>
                <CiDeliveryTruck size={"25px"} />
              </div>
              <div style={{ fontSize: 12 }} onClick={() => setflag(true)}>
                DELIVERY
              </div>
            </div>
            <div
              className="pickup d-flex bg-danger rounded-pill px-3 "
              style={{ color: "white", alignItems: "center" }}
            >
              <div style={{ marginRight: "5px" }}>
                <HiShoppingBag size={"20px"} />
              </div>
              <div style={{ fontSize: 12 }} onClick={() => setflag(false)}>
                PICK UP
              </div>
            </div>
          </div>
          {flag ? (
            <div className="location d-flex justify-content-between pt-4 pr-5 pl-4">
              <div className="fw-bold" onClick={() => {}}>
                {!addAddressEdit ? "Selected Location" : "Saved Location"}
              </div>
              <div
                onClick={() => {
                  setaddAddressEdit(true);
                  !addAddressEdit
                    ? setaddAddressEdit(true)
                    : setaddAddressEdit(false);
                }}
              >
                {!addAddressEdit ? "Edit" : "Back"}
              </div>
            </div>
          ) : null}
          {!addAddressEdit ? (
            <>
              {flag ? (
                <>
                  <div className="log d-flex pt-4 ">
                    <Link to="login">Login</Link>
                    <div>now to retrieve your saved locations</div>
                  </div>
                </>
              ) : null}
              <div className="Select-Outlet d-flex justify-content-between pt-4 pr-5 pl-4">
                <div className="fw-bold">Selected Outlet</div>
                <div>Change</div>
              </div>
              <div className="address d-flex justify-content-between p-3  border rounded m-1 mt-4 bg-danger">
                <div className="address-complete ">
                  <div style={{ columnGap: 10 }}>
                    <FaRegAddressBook style={{ marginRight: 10 }} />
                    Marks Kitchen - Gulberg
                  </div>
                  <div className="ps-4">
                    AL-Hafeez View, Block D1, Gulberg 3, Lahore. Pakistan
                  </div>
                </div>
                <div className="checkmark ">
                  <FcCheckmark />
                </div>
              </div>
              <div className="detail pt-3  px-2">
                When would you like it delivered?
              </div>
              {flag ? (
                <>
                  <div className="pickup-detail d-flex justify-content-between bg-danger  position-relative z-index-200  justify-content-between p-3  border rounded m-1 mt-4">
                    <div>
                      <HiClock style={{ marginRight: 8 }} />
                      Delivery Immediatly
                      <div className="ps-4">Out of working hours</div>
                    </div>

                    <div className="checkmark ">
                      <FcCheckmark />
                    </div>
                  </div>
                </>
              ) : (
                <div className="pickup-detail  d-flex justify-content-between p-4 position-relative z-index-200  bg-danger border rounded mt-4">
                  <div>
                    <HiClock style={{ marginRight: 8 }} />
                    Pickup Immediatly
                    <div className="ps-4">Out of working hours</div>
                  </div>

                  <div className="checkmark ">
                    <FcCheckmark />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="add-location pt-2">
              <button
                className="btn btn-danger"
                onClick={() => {
                  setaddNewAddress(true);
                }}
              >
                <GrAdd size={"30px"} /> Add New Location
              </button>
            </div>
          )}
          {addNewAddress ? (
            <>
            <div className="justify-content-between pt-4">
              <label>
                Select City: <input name="City" />
              </label>
              <label  className="pt-4">
                Select Area: <input name="Area" />
              </label>
              <div className="pt-4 text-center">
                <button className="btn btn-success ">Save</button>
                </div>
              </div>
            </>
          ) : null}
          <div
            className="footer row  pt-4 px-5 "
            style={{ alignItems: "center" }}
          >
            <button type="button" className="btn btn-danger">
              Done
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
