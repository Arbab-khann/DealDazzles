import React, { useContext } from "react";
import Header from "../header/Header";
import { Storedata } from "../store/image/Store";
import "./style.css";
import NavbarNoImg from "../header/NavbarNoImg";
import { FaStar } from "react-icons/fa";

function Toy() {
  const [data] = useContext(Storedata);
  return (
    <div>
      <div>
        <Header />
        <NavbarNoImg />
        {/*toy*/}
        <div className="component-main">
          <div className="component-main-inner">
            <h2>Toy</h2>
            <div className="component-inner-products">
              {data
                .filter((data) => data.type === "toy")
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
        {/*Beauty*/}
        <div className="component-main">
          <div className="component-main-inner">
            <h2>Baby Care</h2>
            <div className="component-inner-products">
              {data
                .filter((data) => data.type === "Beauty")
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
        {/*Health Care*/}
        <div className="component-main">
          <div className="component-main-inner">
            <h2>Health Care</h2>
            <div className="component-inner-products">
              {data
                .filter((data) => data.type === "Health-Care")
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
      </div>
    </div>
  );
}

export default Toy;
