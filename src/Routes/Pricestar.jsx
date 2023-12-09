import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function Pricestar({ stars, review }) {
  const printstar = Array.from({ length: 5 }, (i, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar color="orange" />
        ) : stars >= number ? (
          <FaStarHalfAlt color="orange" />
        ) : (
          <FaRegStar color="orange" />
        )}
      </span>
    );
  });
  return (
    <div>
      <div className="yellow-star">{printstar}</div>
      {/* <p>{review} review</p> */}
    </div>
  );
}

export default Pricestar;
