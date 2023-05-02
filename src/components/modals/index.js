import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsPlusCircle, BsDashCircle, BsXCircle } from "react-icons/bs";
import "./modal.css";
import { AddOns } from './../../components/productdata/DummyData';
import { ModalCard } from './../modalcard/modalcard';


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
      <Box
        className="modal-content"
        sx={{ ...modalWrapStyle }}
      // sx={{
      //   //   backgroundColor: "white",
      //   borderRadius: "10px",
      //   boxShadow: 24,
      //   maxWidth: "90vw",
      //   maxHeight: "90vh",
      //   overflow: "auto",
      //   //   p: 2,
      // }}
      >
        <div className="modalwrap">
          <div className="modal-left">
            <img src={productimg} alt={productname} className="modal-img" />
          </div>
          <div className="modal-right"  >
             <div className='item-detail'>
              <div className="top-heading">
                <div className="btn">
                  <button 
                    type="button" className="modalClose btn-close " aria-label="Close" onClick={onClose}>
                  </button>
                </div>
                <div className="name"><h4>{productname}</h4></div>
                <div className="price"><h5>Rs: {productprice} /-</h5></div>
                <div className="text"><p>{productdescription}</p></div>
              </div>
              <div className='item-options'>
                <div className='item-option-container'>
                  <div className='item-option'>
                    <div className='Addon'>
                 
                      <div className='option-name' >
                        <div className='option-name-title text-bold' >
                          <span>Add On's</span>
                        </div>
                      </div>

                      <div className='option-required '>
                        <div className='card-data' >
                          {AddOns.map((category) => {
                            return (
                              <div key={category.category}>
                                <h3>{category.category}</h3>

                                <div className='card-container ' >
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
                    </div>
                    <div className='add-detail '>
                      <div className='itemoption'>
                        <span>Special Instruction</span>
                      </div>
                      <div className='add-instruction'>
                        <textarea className='form-control' style={{ fontSize: 12, padding: 15 }} placeholder='Add Specical instructions'>
                        </textarea>
                      </div>
                    </div >
                  </div>
                </div>
              </div>
            </div> 
            <div className='footer'  >
              <div className="addorder">
                <div className="increment-decrement">
                  <BsDashCircle
                    size={"2em"}
                    // color="#fbbe36"
                    onClick={onDecrementClick}
                  />
                  <div className="count"><span style={{ alignSelf: "center" }}>{count}</span></div>
                  <BsPlusCircle
                    size={"2em"}
                    // color="#fbbe36"
                    onClick={onIncrementClick}
                  />
                  <button className="add-item" onClick={onAddToCartClick} >
                    {"Add to Cart   "} {productprice}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
