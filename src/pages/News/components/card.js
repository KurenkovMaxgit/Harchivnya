import React from "react";

function Card(props) {
  return (
    <div className="card border border-1 border-black pt-3">
      <img src={props.img} className="card-img-top" alt="product" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button href="/" className="btn btn-primary ">
          Детальніше
        </button>
      </div>
    </div>
  );
}
export default Card;
