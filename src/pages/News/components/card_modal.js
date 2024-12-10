import React from "react";

function NewsModal(props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
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
            {props.imageURL}
          </div>
          <div className="modal-body">
            {props.description}
          </div>
          <div className="modal-footer">
            <a
              type="button"
              className="btn btn-primary col-3 mx-auto"
              href="/cart"
            >
              Замовити
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsModal;