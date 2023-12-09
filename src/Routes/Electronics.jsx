import React, { useContext } from "react";
import Header from "../header/Header";
import { Storedata } from "../store/image/Store";
import "./style.css";
import NavbarNoImg from "../header/NavbarNoImg";
import { FaStar } from "react-icons/fa";
function Electronics() {
  const [data] = useContext(Storedata);
  return (
    <div>
      <Header />
      <NavbarNoImg />
      {/* mobile accessorise*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Mobile Accessorise</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "mobile-accessorise")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="IT-accessorise-img"
                        src={item.image}
                        alt="img"
                      />
                    </div>
                    <div className="compo-inner-block-text">
                      <p>{item.name}</p>
                      <div className="compo-inner-block-review-text">
                        <h3>
                          {item.stars}
                          <FaStar size={"0.6rem"} />
                        </h3>
                        <span>({item.review} Reviews)</span>
                      </div>
                      <div className="compo-inner-price">
                        <h3>&#8377;{item.price}</h3> <s>&#8377;{item.cross}</s>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* IT-accessorise*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>IT Accessorise</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "it-accessorise")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="IT-accessorise-img"
                        src={item.image}
                        alt="img"
                      />
                    </div>
                    <div className="compo-inner-block-text">
                      <p>{item.name}</p>
                      <div className="compo-inner-block-review-text">
                        <h3>
                          {item.stars}
                          <FaStar size={"0.6rem"} />
                        </h3>
                        <span>({item.review} Reviews)</span>
                      </div>
                      <div className="compo-inner-price">
                        <h3>&#8377;{item.price}</h3> <s>&#8377;{item.cross}</s>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* laptop*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Laptop</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "laptop")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="IT-accessorise-img"
                        src={item.image}
                        alt="img"
                      />
                    </div>
                    <div className="compo-inner-block-text">
                      <p>{item.name}</p>
                      <div className="compo-inner-block-review-text">
                        <h3>
                          {item.stars}
                          <FaStar size={"0.6rem"} />
                        </h3>
                        <span>({item.review} Reviews)</span>
                      </div>
                      <div className="compo-inner-price">
                        <h3>&#8377;{item.price}</h3> <s>&#8377;{item.cross}</s>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Electronics;
