import React from "react";
// import NewsModal from "./card_modal";

function Card(props) {
  return (
    <div className="card border border-1 border-black">
      <img src={props.img} className="card-img-top" alt="news_img" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text text-truncate">{props.description}</p>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#newsModal"
        >
          Детальніше
        </button>
        <div
          className="modal fade"
          id="newsModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 mx-auto" id="exampleModalLabel">
                  {props.title}
                </h1>
              </div>
              <div className="modal-body">
                <img src={props.img} className="card-img-top" alt="news_img" />
                <div className="modal-footer d-block">{props.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
