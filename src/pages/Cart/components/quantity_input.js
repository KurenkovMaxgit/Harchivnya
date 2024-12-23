import React from "react";
import "./quantity_input.css";

function QuantityInput(props) {
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
    <div className="input-group quantity-input">
      <button
        onClick={decrease}
        className="btn btn-outline-secondary"
        type="button"
      >
        <img src="/images/minus.svg" alt="minus" />
      </button>
      <input
        type="number"
        className="form-control input-box border-secondary"
        min="1"
        value={quantity}
        onInput={onInputChange}
        aria-label=""
        aria-describedby="basic-addon1"
      />
      <button
        onClick={increase}
        className="btn btn-outline-secondary"
        type="button"
      >
        <img src="/images/plus.svg" alt="plus" />
      </button>
    </div>
  );
}

export default QuantityInput;
