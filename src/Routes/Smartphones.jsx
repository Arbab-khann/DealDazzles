import React, { useContext } from "react";
import Header from "../header/Header";
import { Storedata } from "../store/image/Store";
import "./style.css";
import NavbarNoImg from "../header/NavbarNoImg";
import { FaStar } from "react-icons/fa";

function Smartphones() {
  const [data] = useContext(Storedata);
  return (
    <div>
      <Header />
      <NavbarNoImg />
      <div className="by-price">
        <span id="by-price-text">SHOP BY PRICE</span>
        <hr className="by-price-hr" />
      </div>
      {/* under 10k */}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Under &#8377;10,000</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "under10k")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="component-block-img"
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
      {/* undewr 10-20k */}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Under &#8377;10,000 to &#8377;20,000</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "under10-20k")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="component-block-img"
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
      {/* above 20k */}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Premium Mobiles &#8377;20,000+</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "above20k")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="component-block-img"
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
      <div className="by-price">
        <span id="by-price-text">SHOP BY BRAND</span>
        <hr className="by-brand-hr" />
      </div>
      {/* realme */}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Realme smartphones</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "realme")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="component-block-img"
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
      {/* samsung */}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Samsung smartphones</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "samsung")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="component-block-img"
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
      {/* iphone */}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Apple Smartphones</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "iphone")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="component-block-img"
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

export default Smartphones;
