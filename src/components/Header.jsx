import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-m">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="header-logo"
      >
        E-COMMERSE
      </h1>
      <div className="header-r-c">
        <input placeholder="Search" className="text-input" type="text" />
        <FaCartShopping className="icon" />
      </div>
    </div>
  );
}

export default Header;
