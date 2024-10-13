import React from "react";
import Badge from "@mui/material/Badge";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const navigate = useNavigate();

  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

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

        <Badge
          onClick={() => {
            dispatch(setDrawer());
          }}
          badgeContent={products.length}
          color="primary"
        >
          <FaCartShopping className="icon" />
        </Badge>
      </div>
    </div>
  );
}

export default Header;
