import React, { useContext } from "react";
import Navbar from "../header/Navbar";
import Header from "../header/Header";
import "./route.css";
import Footer from "../footer/Footer";
import Homeslider from "./Homeslider";
import "./home.css";
import { Storedata } from "../store/image/Store";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";

import Pricestar from "./Pricestar";
import { NavLink } from "react-router-dom";

function Home() {
  const [homedata] = useContext(Storedata);

  return (
    <div className="home-main">
      <Header />
      <Navbar />
      <Homeslider />
      {/* best of mobile block */}
      <div className="best-block">
        <div className="best-block-inner">
          <h2>Best Of Mobile</h2>
          <div className="best-block-products">
            {homedata
              .filter((data) => data.bestof === "mobileallbest")
              .map((item, index) => {
                console.log(item.id);
                return (
                  <div key={index} className="best-block-block">
                    <NavLink to={`/details/${item.id}`}>
                      <div className="best-block-block-img">
                        <img id="best-block-img" src={item.image} alt="img" />
                      </div>

                      <div className="best-block-text">
                        <p>{item.name}</p>
                        <div className="best-block-review-text">
                          <Pricestar stars={item.stars} review={item.review} />
                          <span>{item.review} Reviews</span>
                        </div>
                        <div className="best-block-price">
                          <h3>&#8377;{item.price}</h3>
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* best of electronics */}
      <div className="best-block">
        <div className="best-block-inner">
          <h2>Best Of Electronics </h2>
          <div className="best-block-products">
            {homedata
              .filter((data) => data.bestof === "itallbest")
              .map((item, index) => {
                return (
                  <div key={index} className="best-block-block">
                    <NavLink to={`/details/${item.id}`}>
                      <div className="best-block-block-img">
                        <img
                          className="IT-accessorise-img"
                          src={item.image}
                          alt="img"
                        />
                      </div>
                      <div className="best-block-text">
                        <p>{item.name}</p>
                        <div className="best-block-review-text">
                          <Pricestar stars={item.stars} review={item.review} />
                          <span>{item.review} Reviews</span>
                        </div>
                        <div className="best-block-price">
                          <h3>&#8377;{item.price}</h3>
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* best of shoes */}
      <div className="best-block">
        <div className="best-block-inner">
          <h2>Best Of Shoes</h2>
          <div className="best-block-products">
            {homedata
              .filter((data) => data.bestof === "shoesallbest")
              .map((item, index) => {
                return (
                  <div key={index} className="best-block-block">
                    <NavLink to={`/details/${item.id}`}>
                      <div className="best-block-block-img">
                        <img
                          className="component-block-img"
                          src={item.image}
                          alt="img"
                        />
                      </div>
                      <div className="best-block-text">
                        <p>{item.name}</p>
                        <div className="best-block-review-text">
                          <Pricestar stars={item.stars} review={item.review} />
                          <span>{item.review} Reviews</span>
                        </div>
                        <div className="best-block-price">
                          <h3>&#8377;{item.price}</h3>{" "}
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* best of watchs */}
      <div className="best-block">
        <div className="best-block-inner">
          <h2>Best Of watch</h2>
          <div className="best-block-products">
            {homedata
              .filter((data) => data.bestof === "watchallbest")
              .map((item, index) => {
                return (
                  <div key={index} className="best-block-block">
                    <NavLink to={`/details/${item.id}`}>
                      <div className="best-block-block-img">
                        <img
                          className="component-block-img"
                          src={item.image}
                          alt="img"
                        />
                      </div>
                      <div className="best-block-text">
                        <p>{item.name}</p>
                        <div className="best-block-review-text">
                          <Pricestar stars={item.stars} review={item.review} />
                          <span>{item.review} Reviews</span>
                        </div>
                        <div className="best-block-price">
                          <h3>&#8377;{item.price}</h3>{" "}
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* best of appliances */}
      <div className="best-block">
        <div className="best-block-inner">
          <h2>Best Of Appliances</h2>
          <div className="best-block-products">
            {homedata
              .filter((data) => data.bestof === "Appliancesallbest")
              .map((item, index) => {
                return (
                  <div key={index} className="best-block-block">
                    <NavLink to={`/details/${item.id}`}>
                      <div className="best-block-block-img">
                        <img id="best-block-img" src={item.image} alt="img" />
                      </div>
                      <div className="best-block-text">
                        <p>{item.name}</p>
                        <div className="best-block-review-text">
                          <Pricestar stars={item.stars} review={item.review} />
                          <span>{item.review} Reviews</span>
                        </div>
                        <div className="best-block-price">
                          <h3>&#8377;{item.price}</h3>
                          <s>&#8377;{item.cross}</s>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* add block */}
      <div className="ad">
        <img
          src="https://www.supreme.vip/home/applewatch/appleimg/series9/buynow/landing-series9-pc-en.webp"
          alt="ad"
        />
      </div>
      {/* shipping block */}

      <div className="home-shipping-block">
        <div className="ship-block1">
          <FaTruckFast />
          <h2>FREE SHIPPING</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas
            laboriosam tempore perferendis totam, ad accusamus, dicta molestiae
            ratione quidem harum ullam a dolore soluta quia. Inventore quidem
            qui quaerat?
          </p>
        </div>
        <div className="ship-block2">
          <RiRefund2Line />
          <h2>100% REFUND</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas
            laboriosam tempore perferendis totam, ad accusamus, dicta molestiae
            ratione quidem harum ullam a dolore soluta quia. Inventore quidem
            qui quaerat?
          </p>
        </div>
        <div className="ship-block2">
          <FaHeadset />
          <h2>24X7 SUPPORT</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quas
            laboriosam tempore perferendis totam, ad accusamus, dicta molestiae
            ratione quidem harum ullam a dolore soluta quia. Inventore quidem
            qui quaerat?
          </p>
        </div>
      </div>
      {/* featured - container */}
      <div className="featured-container">
        <div>
          <h2>FEATURED PRODUCTS</h2>
        </div>
        <div className="featured-container-products">
          {homedata
            .filter((data) => data.featureproduct === "allbest")
            .map((item, index) => {
              return (
                <div key={index} className="featured-products-block">
                  {/* <NavLink to={`/details/${item.id}`}> */}
                  <div>
                    <img id="featured-block-img" src={item.image} alt="img" />
                  </div>
                  <div className="featured-block-text">
                    <p>{item.name}</p>
                    <div className="yellow-star">
                      <Pricestar stars={item.stars} />
                    </div>
                    <p>
                      <h3>&#8377;{item.price} </h3>
                      <s>&#8377;{item.cross}</s>
                    </p>
                  </div>
                  {/* </NavLink> */}
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
