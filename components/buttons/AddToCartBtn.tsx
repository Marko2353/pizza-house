"use client";
import { Product } from "../../interfaces";
import React from "react";
import {
  decrement,
  increment,
  productQtySelector,
} from "../../store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../Elements/Button";
import QtyBtn from "./QtyBtn";

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtySelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex justify-center">
        <Button onClick={() => dispatch(increment(props.product))}>
          Add To Cart
        </Button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
      text={""}
    />
  );
};

export default AddToCartBtn;
