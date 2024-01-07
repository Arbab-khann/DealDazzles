import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LeftSideImage({ value }) {
  console.log(value);
  const data = Object.values(value);
  console.log(typeof data, data);

  const [mainImg, setMainImg] = useState(data[0]);
  return (
    <div className="dynamic-left-block">
      {/* side image  */}
      <div className="dynamic-left-block-1">
        {data.map((item, index) => {
          return (
            <div className="dynamic-left-block-1-img">
              <img
                id="items-side-img"
                src={item}
                alt="pic"
                onClick={() => setMainImg(item)}
                style={{ cursor: "pointer" }}
              />
            </div>
          );
        })}
      </div>

      {/* main image block */}
      <div className="dynamic-left-block-2">
        <div className="left-block-img">
          <img src={mainImg} alt="pic" />
        </div>
        <div className="left-block-btn">
          <NavLink className="left-block-btn-navlnk" to={"/cart"}>
            <button id="add-cart">Add to cart</button>
          </NavLink>

          <NavLink className="left-block-btn-navlnk" to={"/cart"}>
            <button id="buy-now">Buy Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LeftSideImage;
