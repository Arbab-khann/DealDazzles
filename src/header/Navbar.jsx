import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import mobile from "../store/image/mobile.webp";
import shoes from "../store/image/shoes.jpg";
import watch from "../store/image/watch.jpg";
import cloths from "../store/image/cloths.webp";
import electronics from "../store/image/electronics.webp";
import appliances from "../store/image/Appliances.webp";
import toy from "../store/image/toy.webp";

function Navbar() {
  return (
    <div>
      <div className="nav-links">
        {/* <NavLink
          className="nav-items"
          to={"/"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={"home"} alt="img" />
          <p>Home</p>
        </NavLink> */}
        <NavLink
          className="nav-items"
          to={"/smartphones"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={mobile} alt="img" />
          <p>Mobiles</p>
        </NavLink>
        <NavLink
          className="nav-items"
          to={"/electronics"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={electronics} alt="img" />
          <p>Electronics</p>
        </NavLink>
        <NavLink
          className="nav-items"
          to={"/shoes"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={shoes} alt="img" />
          <p>Shoes</p>
        </NavLink>
        <NavLink
          className="nav-items"
          to={"/watch"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={watch} alt="img" />
          <p>Watch</p>
        </NavLink>
        <NavLink
          className="nav-items"
          to={"/cloths"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={cloths} alt="img" />
          <p>Cloths</p>
        </NavLink>
        <NavLink
          className="nav-items"
          to={"/appliances"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={appliances} alt="img" />
          <p>Appliances</p>
        </NavLink>
        <NavLink
          className="nav-items"
          to={"/toy"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          <img className="nav-img" src={toy} alt="img" />
          <p>Toys & Doll</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
