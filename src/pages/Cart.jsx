import React from "react";
import { useSelector } from "react-redux";
import { remove } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} alt="Image_Products" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
