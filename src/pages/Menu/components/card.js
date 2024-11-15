import React from "react";

function Card(props) {
  return (
    <div class="card border border-1 border-black pt-3">
      <img src={props.img} class="card-img-top" alt="product" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href="/" class="btn btn-primary">
          Додати до кошика
        </a>
      </div>
    </div>
  );
}
export default Card;
