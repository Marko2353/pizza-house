import React from "react";
import { Button } from "../Elements/Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
  text: string;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button variant="danger" className="w-12 h-10" onClick={props.onDecrease}>
        {props.qty === 1 ? <FontAwesomeIcon icon={faTrash} /> : "-"}
      </Button>
      <p className={`${props.text}`}>{props.qty}</p>
      <Button
        className="w-12 h-10"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
