import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header>
        <Link to="" className="logo">
          logo
        </Link>

        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar">
          <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
        </label>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/property">Properties</Link>
            </li>
            <li>
              <Link to="">Plots +</Link>
              <ul>
                <li>
                  <Link to="">Residential</Link>
                </li>
                <li>
                  <Link to="">Commercial</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Apartments +</Link>
              <ul>
                <li>
                  <Link to="/luxury">Luxury</Link>
                </li>
                <li>
                  <Link to="/affordable">Affordable</Link>
                </li>
                <li>
                  <Link to="/premium">Premium</Link>
                </li>
                {/* <li>
                  <Link to="/affordable">Affordable</Link>
                </li> */}
                <li>
                  <Link to="">Type +</Link>
                  <ul>
                    <li>
                      <Link to="">3BHK</Link>
                    </li>
                    <li>
                      <Link to="">4BHK</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">Villa</Link>
            </li>
            <li>
              <Link to="">Featured</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
