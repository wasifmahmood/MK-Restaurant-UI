import React from "react";
import "./modalcard.css";

export const ModalCard = ({ modalimg, modalname, modalprice, onClick }) => {
  return (
    // <div></div>
    <div className="modal-card d-flex" onClick={onClick}>
      {/* <div className='modalcard-image'>
                <img src={modalimg} alt={modalname} className='modal-card-img' />
            </div> */}
      <img src={modalimg} alt={modalname} className="modal-card-img" />

      <div className="modal-card-content">
        <div className="modal-card-name ">
          <span>{modalname}</span>
        </div>
        <div className="modal-card-price">
          <span>{modalprice}</span>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
