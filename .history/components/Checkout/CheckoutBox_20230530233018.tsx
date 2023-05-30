"use client";
import React from "react";
import {
  decrement,
  increment,
  productQtySelector,
  totalPriceSelector,
} from "../../store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import CallToAction from "../buttons/CallToAction";
import QtyBtn from "../buttons/QtyBtn";

const CheckoutBox = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const totalPrice = useAppSelector(totalPriceSelector);

  return (
    <div className="bg-dark w-1/3 h-fit rounded-xl p-5 flex flex-col justify-between box-shadow gap-5">
      <h2>Shopping cart</h2>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div key={item.product.id} className="flex justify-between">
            <span className="text-light">{item.product.name}</span>
            <span className="text-light">$ {item.product.price}</span>
            <QtyBtn
              onDecrease={() => dispatch(decrement(item.product))}
              onIncrease={() => dispatch(increment(item.product))}
              qty={item.qty}
              text={"text-light"}
            />
          </div>
        ))}
      </div>
      <p className="text-light">Total cost: $ {totalPrice}</p>
      <button className="">Check out</button>
      <CallToAction name={"Check out"} link={""} />
    </div>
  );
};

export default CheckoutBox;
