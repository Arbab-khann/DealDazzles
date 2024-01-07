import React, { useContext } from "react";
import { Storedata } from "../store/image/Store";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import "./style.css";
import NavbarNoImg from "../header/NavbarNoImg";
import { FaStar } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import LeftSideImage from "./DynamicFolder/LeftSideImage";

function Dynamiccompo() {
  const [dynamicData] = useContext(Storedata);
  const id = useParams().id;
  console.log(id);
  return (
    <div className="dynamic-main-block">
      <Header />
      <NavbarNoImg />

      {dynamicData
        .filter((data) => data.id === id)
        .map((item, index) => {
          return (
            <div className="dynamic-container">
              <div className="dynamic-left-main-block">
                <LeftSideImage value={item.image} />
              </div>
              <div className="dynamic-right-block">
                <p className="right-block-name">{item.name}</p>
                <div className="dynamic-right-block-review">
                  <h3>
                    {item.stars}
                    <FaStar size={"0.6rem"} />
                  </h3>
                  <span style={{ color: "gray" }}>
                    ({item.review} Reviews & Rating)
                  </span>
                </div>
                <div className="dynamic-right-block-price">
                  <h2>&#8377;{item.price}</h2>
                  <s style={{ color: "gray" }}>&#8377;{item.cross}</s>
                  <span>{item.off}% off</span>
                </div>
                <div className="dynamic-right-block-offers">
                  <h4>Available offers</h4>
                  <div className="offer-block-1">
                    <p>
                      <BiSolidPurchaseTag color="green" size="1.5rem" /> Bank
                      Offer5% Cashback on Flipkart Axis Bank Card
                      <span>T&C</span>
                    </p>
                  </div>
                  <div className="offer-block-2">
                    <p>
                      <BiSolidPurchaseTag color="green" size="1.5rem" /> Special
                      PriceGet extra ₹2000 off (price inclusive of
                      cashback/coupon)
                      <span>T&C</span>
                    </p>
                  </div>
                  <div className="offer-block-3">
                    <p>
                      <BiSolidPurchaseTag color="green" size="1.5rem" /> Buy
                      this product and Get Extra ₹75 Off on Select Room Heaters{" "}
                      <span>T&C</span>
                    </p>
                  </div>
                  <div className="offer-block-4">
                    <p>
                      <BsCalendarCheck color="green" size="1.2rem" /> EMI
                      starting from ₹352/month<span>View Plans</span>
                    </p>
                  </div>
                </div>
                <div className="product-dec">
                  <span style={{ color: "gray", fontWeight: "bold" }}>
                    Description
                  </span>
                  <p>{item.dec}</p>
                </div>
                <div className="dynamic-right-block-other">
                  <div
                    className="sellerinfo"
                    style={{ color: "gray", fontWeight: "bold" }}
                  >
                    Seller info
                  </div>
                  <div className="sellerinfo-right">
                    <p style={{ color: "blue" }}>PETILANTE Online</p>
                    <ul type="disk">
                      <li>7 Days Service Center Replacement/Repair</li>
                      <li>GST invoice available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Dynamiccompo;
