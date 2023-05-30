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
    <section className="w-full h-screen flex items-center justify-center">
    <h1>Thank you for your message!</h1>
  </section>
  );
};

export default CheckoutBox;
