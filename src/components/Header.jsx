import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <div className="header-m">
      <h1 className="header-logo">E-COMMERSE</h1>
      <div className="header-r-c">
        <input placeholder="Search" className="text-input" type="text" />
        <FaCartShopping className="icon" />
      </div>
    </div>
  );
}

export default Header;
