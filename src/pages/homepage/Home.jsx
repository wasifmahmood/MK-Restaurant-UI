import React, { useState } from "react";
import "./Home.css";
import AddressSection from "../../components/addresssection/AddressSection";
import HeroSlider from "../../components/heroslider/HeroSlider";
import BannerTop from "../../components/bannertop/BannerTop";
import { CategoryButton, MainMenu, SrearhInput, } from "../../components/mainmenu/MainMenu";
import ProductCard from "../../components/productcard/ProductCard";
import { Category, products } from "../../components/productdata/DummyData";
import { COLORS } from "../../constants/colors";
import { CartSection } from "../../components/cart/Cart";
import { ProductDetailsModal } from "../../components/modals";
import { TopOutletinformation } from '../../components/Outletinformation/Outletinformation';
import Drawer from "../../components/drawer/Drawer";


const Home = () => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [productdetail, setproductdetail] = useState("");
  const [open, setOpen] = useState(false);



  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleClear = () => {
    setSearchText("");
    toggleSearchBar();
  };

  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null); // state to hold active category ID

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId); // update active category state
  };


  return (
    <React.Fragment>
      <div className="banner-top">
        <BannerTop />
      </div>

      <div className="hero-slider">
        <HeroSlider />
      </div>
      <div className="outlet-information-mobile">
        <TopOutletinformation />
      </div>
      <div>
        <AddressSection
          title="Marks Kitchen - Gulberg"
          address="AL-Hafeez View, Block D1, Gulberg 3, Lahore. Pakistan"
          phone="0323 2233997"
          hours="12:00 PM - 12:00 AM"
          minOrder="Min Order: Rs 500"
        />
      </div>
      <div>

        <div className="main-menu p4">
          <MainMenu onSearchBtnClick={toggleSearchBar}>
            {!searchBarVisible ? (
              <>
                {Category.map((item, index) => {
                  return (
                    <CategoryButton
                      key={index}
                      name={item.name}
                      img={item.image}
                      id={item.id}
                      onClick={() => handleCategoryClick(item.id)}
                      active={activeCategory === item.id}
                    // onClick={handleCategoryClick(item.id)} active={activeCategory === item.id}
                    />
                  );
                })}
              </>
            ) : (
              <SrearhInput
                type={"text"}
                value={searchText}
                onChange={handleSearch}
                onCrossClick={handleClear}
              />
            )}
          </MainMenu>

        </div>

        <div className="product-page">
          <div className="item-section scrollable-div">
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                border: "none",
                background: COLORS.Screenbg,
              }}
            >
              <div className="product-category-section">
                {Category.map((obj, index) => {
                  return (
                    <>
                      <div className="category-heading" >
                        <h4 key={index} style={{ flex: 1 }}>
                          {obj.name}
                        </h4>
                      </div>
                      <div className="product-card-section" style={{ display: "flex" }}>
                        {products
                          .filter((product) => product.categoryId === obj.id)

                          .map((product) => (
                            <ProductCard

                              key={product.id}
                              image={product.image}
                              title={product.title}
                              prices={product.Price}
                              onClick={() => {
                                setproductdetail(product);
                                setOpen(true);
                              }}
                            />
                            // <li key={product.id}>{product.title}</li>
                          ))}


                      </div>

                    </>
                  );
                })}

              </div>
            </div>
          </div>

          <div className="cart-section">
            <CartSection />
          </div>
        </div>
      </div>
      <div className="draw ">
        <Drawer />
      </div>
      <ProductDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        productimg={productdetail.image}
        productname={productdetail.title}
        productprice={productdetail.Price}
        productdescription={productdetail.description}
      />


    </React.Fragment>
  );
};

export default Home;
