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
    <div class="row rounded-3 border border-2 mb-3 ">
      <div class = "col-2 p-0">
        <img src="images\Cart Logo.svg" alt = "prod.photo" width="54" height="54"/>
      </div>
      <div class="col my-auto">{props.title}</div>
      <div class="col-auto my-auto p-0">
        <div class="input-group my-auto">
          <button
            onClick={decrease}
            class="btn btn-outline-secondary border border-0"
            type="button"
          >
            <img src="/images/minus.svg" alt="minus" />
          </button>
          <input
            type="number"
            class="form-control input-box border border-0"
            min="1"
            max="10"
            value={quantity}
            onInput={onInputChange}
            aria-label=""
            aria-describedby="basic-addon1"
          />
          <button
            onClick={increase}
            class="btn btn-outline-secondary border border-0"
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
