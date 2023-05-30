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
           <section className="w-full h-screen flex items-center justify-center">
        <h1>Thank you for your message!</h1>
      </section>
    </div>
  );
};

export default CheckoutBox;
