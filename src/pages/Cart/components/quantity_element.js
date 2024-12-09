import React from "react";
import "./quantity_element.css";

function Element(props) {
  const { quantity, onChange } = props;

  function increase() {
    onChange(quantity + 1);
  }

  function decrease() {
    onChange(quantity - 1);
  }

  function onInputChange(event) {
    console.log(event);
    onChange(event.target.value);
  }

  return (
    <div className="row rounded-3 border border-1 border-black mb-3 ">
      <div className = "col-2 p-0">
        <img src="images\Cart Logo.svg" alt = "prod.photo" width="56" height="56"/>
      </div>
      <div className="col my-auto">{props.title}</div>
      <div className="col-auto my-auto p-0">
        <div className="input-group my-auto">
          <button
            onClick={decrease}
            className="btn btn-outline-secondary border border-0"
            type="button"
          >
            <img src="/images/minus.svg" alt="minus" />
          </button>
          <input
            type="number"
            className="form-control input-box border border-0"
            min="1"
            value={quantity}
            onInput={onInputChange}
            aria-label=""
            aria-describedby="basic-addon1"
          />
          <button
            onClick={increase}
            className="btn btn-outline-secondary border border-0"
            type="button"
          >
            <img src="/images/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Element;
