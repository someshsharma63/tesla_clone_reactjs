import React, { useState } from "react";
import Logo from "../Images/logo.svg";
function Header() {
  const [sidemenu, setSidemenu] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menus_center">
          <ul>
            <li>
              <a href="">Model S</a>
            </li>
            <li>
              <a href="">Model 3</a>
            </li>
            <li>
              <a href="">Model X</a>
            </li>
            <li>
              <a href="">Model Y</a>
            </li>
            <li>
              <a href="">Solar Roof</a>
            </li>
            <li>
              <a href="">Solar panel</a>
            </li>
          </ul>
        </div>
        <div className="menus_center">
          <ul>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                setSidemenu(true);
              }}
            >
              <a href="">Menu</a>
            </li>
          </ul>
        </div>

        <ul className="sidemenu" style={{ right: sidemenu ? "0" : "-250px" }}>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
          <li>kdng</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
