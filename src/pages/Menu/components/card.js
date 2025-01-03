import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cartSlice";

function Card(props) {
  const dispatch = useDispatch();

  return (
    <div className="card border border-1 border-black">
      <img src={props.img} className="card-img-top" alt="product" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="row">
          <h5 className="col my-auto">{props.price}₴</h5>
          <button
            className="btn btn-primary col-6"
            onClick={() => {
              dispatch(addItem({ itemId: props.id, quantity: 1 }));
            }}
          >
            У кошик
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
