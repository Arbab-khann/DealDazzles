import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Smartphones from "./Smartphones";
import Electronics from "./Electronics";
import Shoes from "./Shoes";
import Cloths from "./Cloths";
import Appliances from "./Appliances";
import Watch from "./Watch";
import Toy from "./Toy";
import "./route.css";
import Store from "../store/image/Store";
import Dynamiccompo from "./Dynamiccompo";
import Cart from "../header/Cart";

function Routescompo() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="nav-links">
          <NavLink
            className="nav-items"
            to={"/"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
          >
            <img className="nav-img" src={home} alt="img" />
            <p>Home</p>
          </NavLink>
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
            to={"/sports"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
          >
            <img className="nav-img" src={sports} alt="img" />
            <p>Sports</p>
          </NavLink>
          <NavLink
            className="nav-items"
            to={"/sports"}
            style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
          >
            <img className="nav-img" src={toy} alt="img" />
            <p>Toys & Doll</p>
          </NavLink>
        </div> */}
        <Store>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smartphones" element={<Smartphones />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/cloths" element={<Cloths />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="toy" element={<Toy />} />
            <Route path="/details/:id" element={<Dynamiccompo />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Store>
      </BrowserRouter>
    </div>
  );
}

export default Routescompo;
