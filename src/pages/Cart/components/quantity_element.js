import React from "react";
import "./quantity_element.css";
import { removeItem } from "../../../features/cartSlice";
import { useDispatch } from "react-redux";

function Element(props) {
  const dispatch = useDispatch();
  function deleteItem(itemId) {
    dispatch(removeItem({ itemId: itemId }));
  }
  const { quantity, onChange } = props;

  function increase() {
    onChange(quantity + 1);
  }

  function decrease() {
    onChange(quantity - 1);
  }

  function onInputChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="row rounded-3 border border-1 border-black mb-3 ">
        <img
        className="col-2 p-0"
          src="images\Cart Logo.svg"
          alt="prod.photo"
          width="56"
          height="56"
        />
      <div className="col my-auto p-0">{props.title}</div>
      {/* <div className="col-3 my-auto p-0"> */}
        <div className="row my-auto col-4 p-0 d-table-col">
          <button
            onClick={decrease}
            className="btn btn-outline-secondary border border-0 col"
            type="button"
          >
            <img src="/images/minus.svg" alt="minus" />
          </button>
          <input
            type="number"
            className="form-control input-box border border-0 col"
            min="1"
            value={quantity}
            onInput={onInputChange}
            aria-label=""
            aria-describedby="basic-addon1"
          />
          <button
            onClick={increase}
            className="btn btn-outline-secondary border border-0 col"
            type="button"
          >
            <img src="/images/plus.svg" alt="plus" />
          </button>
        {/* </div> */}
      </div>
      {/* <div className="col-1"> */}
        <button
          className="btn col-2 mt-1 pt-2 "
          onClick={() => deleteItem(props.id)}
        >
          <img className="px-auto" src="/images/cross_delete_remove_icon.svg" alt="cross" />
        </button>
      {/* </div> */}
    </div>
  );
}

export default Element;
