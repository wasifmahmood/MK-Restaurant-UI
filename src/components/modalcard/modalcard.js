import React from "react";
import "./modalcard.css";

export const ModalCard = ({ modalimg, modalname, modalprice, onClick }) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  //   if (!isChecked) {
  //     setTotalPrice(totalPrice + modalprice);
  //   } else {
  //     setTotalPrice(totalPrice - modalprice);
  //   }
  // };
  return (

    <div className="modal-card d-flex" onClick={onClick}>
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
              // checked={isChecked}
              // onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>
       {/* <div className="total-price">
        Total Price: <span>{totalPrice}</span>
      </div> */}
    </div>
  );
};
