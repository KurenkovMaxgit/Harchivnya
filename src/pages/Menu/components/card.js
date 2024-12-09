import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cartSlice";

function Card(props) {
  const dispatch = useDispatch();

  return (
    <div className="card border border-1 border-black pt-3">
      <img src={props.img} className="card-img-top" alt="product" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addItem({ itemId: props.id, quantity: 1 }));
          }}
        >
          Додати до кошика
        </button>
      </div>
    </div>
  );
}
export default Card;
