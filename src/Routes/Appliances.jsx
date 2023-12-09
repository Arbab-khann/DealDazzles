import React, { useContext } from "react";
import Header from "../header/Header";
import { Storedata } from "../store/image/Store";
import "./style.css";
import NavbarNoImg from "../header/NavbarNoImg";
import { FaStar } from "react-icons/fa";

function Appliances() {
  const [data] = useContext(Storedata);
  return (
    <div>
      <Header />
      <NavbarNoImg />
      {/* television*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Television</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "television")
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
      {/* Up to 70% Off*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Up to 70% Off</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "70%-Off")
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
      {/* Up to 75% Off*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Up to 75% Off</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "75%-Off")
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
      {/* Washing Machines*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Washing Machines</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "Washing-Machines")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="Washing-Machines-img"
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
      {/* Refrigerators*/}
      <div className="component-main">
        <div className="component-main-inner">
          <h2>Refrigerators</h2>
          <div className="component-inner-products">
            {data
              .filter((data) => data.type === "Refrigerators")
              .map((item, index) => {
                return (
                  <div key={index} className="component-inner-products-block">
                    <div>
                      <img
                        className="Refrigerators-img"
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

export default Appliances;
