import React, { useContext } from "react";
import Header from "../header/Header";
import { Storedata } from "../store/image/Store";
import "./style.css";
import NavbarNoImg from "../header/NavbarNoImg";
import { FaStar } from "react-icons/fa";

function Shoes() {
  const [data] = useContext(Storedata);
  return (
    <div>
      <div>
        <Header />
        <NavbarNoImg />
        {/*sneakers*/}
        <div className="component-main">
          <div className="component-main-inner">
            <h2>Sneaekrs</h2>
            <div className="component-inner-products">
              {data
                .filter((data) => data.type === "sneakers")
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
                          <h3>&#8377;{item.price}</h3>{" "}
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/*Sports*/}
        <div className="component-main">
          <div className="component-main-inner">
            <h2>Sports</h2>
            <div className="component-inner-products">
              {data
                .filter((data) => data.type === "Sports")
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
                          <h3>&#8377;{item.price}</h3>{" "}
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/*High Ankle*/}
        <div className="component-main">
          <div className="component-main-inner">
            <h2>High Ankle</h2>
            <div className="component-inner-products">
              {data
                .filter((data) => data.type === "High-Ankle")
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
                        <div>
                          <span>{item.review} Reviews</span>
                        </div>
                        <div className="compo-inner-price">
                          <h3>&#8377;{item.price}</h3>{" "}
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoes;
