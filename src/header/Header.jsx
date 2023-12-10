import React from "react";

import "./headaer.css";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

function Header() {
  const navi = useNavigate();
  const tohome = navi("/");
  return (
    <div>
      <div className="header-items">
        <Link onClick={() => tohome}>
          <h2>
            <span>Deal</span>Dazzles
          </h2>
        </Link>

        <input
          className="search"
          type="text"
          placeholder="Search for products"
        />

        <div style={{ cursor: "pointer" }} onClick={() => navi("/login")}>
          <span className="login-top">
            <FaRegCircleUser size={"2.5rem"} color="gray" />
            sign in
          </span>
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => navi("/cart")}>
          <IoCartOutline size={"2.5rem"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
