import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";



function NavbarNoImg() {
  return (
    <div>
      <div className="NavbarNoImg-links">
        <NavLink
          className="NavbarNoImg-items"
          to={"/smartphones"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          {/* <img className="nav-img" src={mobile} alt="img" /> */}
          <p>Mobiles</p>
        </NavLink>
        <NavLink
          className="NavbarNoImg-items"
          to={"/electronics"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          {/* <img className="nav-img" src={electronics} alt="img" /> */}
          <p>Electronics</p>
        </NavLink>
        <NavLink
          className="NavbarNoImg-items"
          to={"/shoes"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          {/* <img className="nav-img" src={shoes} alt="img" /> */}
          <p>Shoes</p>
        </NavLink>
        <NavLink
          className="NavbarNoImg-items"
          to={"/watch"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          {/* <img className="nav-img" src={watch} alt="img" /> */}
          <p>Watch</p>
        </NavLink>
        <NavLink
          className="NavbarNoImg-items"
          to={"/cloths"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          {/* <img className="nav-img" src={cloths} alt="img" /> */}
          <p>Cloths</p>
        </NavLink>
        <NavLink
          className="NavbarNoImg-items"
          to={"/appliances"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          {/* <img className="nav-img" src={appliances} alt="img" /> */}
          <p>Appliances</p>
        </NavLink>
        <NavLink
          className="NavbarNoImg-items"
          to={"/toy"}
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          {/* <img className="nav-img" src={toy} alt="img" /> */}
          <p>Toys & Doll</p>
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarNoImg;
