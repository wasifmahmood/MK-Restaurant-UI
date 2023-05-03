import React from "react";
import "./modalcard.css";

export const ModalCard = ({ modalimg, modalname, modalprice, onClick }) => {
  return (
    <div className="modal-card d-flex" onClick={onClick}>
      {/* <div className='modalcard-image'>
                <img src={modalimg} alt={modalname} className='modal-card-img' />
            </div> */}
      <img src={modalimg} alt={modalname} className="modal-card-img" />

      <div className="modalcard-content">
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
            {/* <label class="form-check-label" for="flexCheckDefault">
                            Add ON
                        </label> */}
          </div>
        </div>
      </div>
    </div>
  );
};
