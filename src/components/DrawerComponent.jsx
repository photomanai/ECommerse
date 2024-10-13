import React, { useEffect } from "react";
import store from "../redux/store";
import BasketProduct from "./BasketProduct";
import { calcBasket, setDrawer } from "../redux/slices/basketSlice";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";

function DrawerComponent() {
  const { products, drawer, amount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcBasket());
  }, []);

  return (
    <div>
      <Drawer
        anchor="right"
        onClose={() => {
          dispatch(setDrawer());
        }}
        open={drawer}
      >
        <h1 className="drawecomponent-h">Cast</h1>
        <div className="basketproductlist-c">
          {products.length != 0 ? (
            products.map((product) => (
              <BasketProduct key={product.id} product={product} />
            ))
          ) : (
            <h1 className="basketproductlist-empty-c">There is empty</h1>
          )}
        </div>
        <div className="basketproductlist-f-c">
          <div className="basketproductlist-amount-c">
            Total Amount:
            <h2>{amount.toFixed(2)}</h2>
          </div>
          <button className="button">Buy</button>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
