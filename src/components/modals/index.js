import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsPlusCircle, BsDashCircle, BsXCircle } from "react-icons/bs";
import { AddOns } from "./../../components/productdata/DummyData";
import { ModalCard } from "./../modalcard/modalcard";

import "./modal.css";

const modalWrapStyle = {
  bgcolor: "background.paper",
  boxShadow: 30,
  // width: 800,
  // height: 400,
  maxWidth: "80vw",
  maxHeight: "80vh",
  borderRadius: 4,
  overflow: "hidden",
  borderstyle: "none",
};

export const ProductDetailsModal = ({
  open,
  onClose,
  productname,
  productprice,
  productimg,
  productdescription,
  onDecrementClick,
  onIncrementClick,
  onAddToCartClick,
}) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => (prevCount += 1));
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  };

  const decrement = () => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="modal-content" sx={{ ...modalWrapStyle }}>
        <div className="modalwrap">
          <div className="modal-left">
            <img src={productimg} alt={productname} className="modal-img" />
          </div>

          <div className="modal-right">
            <button
              // style={{ background: "#fff" }}
              type="button"
              className="modalClose btn-close "
              aria-label="Close"
              onClick={onClose}
            ></button>
            <div className="top-heading">
              <h4>{productname}</h4>
              <h5>Rs: {productprice} /-</h5>
              <p>{productdescription}</p>
            </div>
            <div className="item-options">
              <h6>Add on</h6>

              <div className="option-required ">
                <div className="card-data">
                  {AddOns.map((category) => {
                    return (
                      <div key={category.category}>
                        <h3>{category.category}</h3>
                        <div className="card-container ">
                          {category.AddOn.map((item) => (
                            <ModalCard
                              modalimg={item.img}
                              modalname={item.name}
                              modalprice={item.price}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="InstructionWrap">
                <h6>Special Instruction</h6>

                <textarea class="form-control " rows="2"></textarea>
              </div>
              {/* <div className="buttenSetToBottom"> */}
              <div className="increment-decrement">
                <BsDashCircle
                  size={"1.5em"}
                  // color="#fbbe36"
                  onClick={onDecrementClick}
                />

                <div className="count">
                  <span style={{ alignSelf: "center" }}>{count}</span>
                </div>

                <BsPlusCircle
                  size={"1.5em"}
                  // color="#fbbe36"
                  onClick={onIncrementClick}
                />
                <div className="add-item" onClick={onAddToCartClick}>
                  {"Add to Cart   "} {productprice}
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
