import React from "react";
import { FormControl } from "react-bootstrap";
import { FaSearch, FaTimes } from "react-icons/fa";
import "../mainmenu/MainMenu.css";
import { Link, } from "react-scroll";
import { products } from '../../components/productdata/DummyData'


const MainMenu = ({ onSearchBtnClick, children }) => {
  return (
    <div className="menu">
      <div
        className="search-container shadow bg-white rounded"
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 11,
          marginRight: 10,
          height: "20%",
        }}
      >
        <FaSearch className="search-icon" onClick={onSearchBtnClick} />
      </div>
      <nav
        id="categories"
        className="scroll category-list border-bottom   shadow bg-white rounded"
        style={{ backgroundColor: "white", padding: 10, borderRadius: 11 }}
      >
        {children}
      </nav>
      {/* <div class="sc-iqcoie kWZydo status-block-mobile"></div> */}
    </div>
  );
};

const SrearhInput = ({ type, value, onChange, onCrossClick }) => {
  return (
    <div className="search-bar-container">
      <FormControl
        type={type}
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <button className="clear-button" onClick={onCrossClick}>
        <FaTimes />
      </button>
      {/* <FaSearch  className="search-icon" /> */}
    </div>
  );
};
const CategoryButton = ({ name, onClick, active, to, id, img, activeClass }) => {
  return (
    <Link activeClass="active" to={to} spy={true} smooth={true}>
      <div className="nav-card align-items-center "
        style={{
          background: 'linear-gradient(to right,black,black,transparent)'
        }}
      >
        <div className="nav-name ml-3" id={id}>
          {name}
        </div>
        <div>
          <img className="nav-img" src={img} alt={name} />
        </div>
      </div>
    </Link>
  );
};

export { MainMenu, SrearhInput, CategoryButton };
