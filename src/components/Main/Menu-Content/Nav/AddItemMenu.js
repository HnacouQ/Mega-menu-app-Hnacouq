import React from "react";
import PropTypes from "prop-types";

AddItemMenu.propTypes = {};

function AddItemMenu(props) {
  return (
    <div className="AddItemMenu-Wraper">
      <div className="AddItemMenu-Wraper__item">
        <label>Icon & Title</label>
        <div className="AddItemMenu-Wraper__item--main">
          <button className="btn-default addItem__btn">
            <span>Icon</span>
          </button>
          <input className="addItem__input"></input>
        </div>
      </div>
      <div className="AddItemMenu-Wraper__item">
        <label>Link</label>
        <div className="AddItemMenu-Wraper__item--main">
          <input className="addItem__input"></input>
          <button className="addItem__btn btn-default">
            <input type="checkbox"></input>
          </button>
        </div>
      </div>
      <div className="AddItemMenu-Wraper__item">
        <label>Image</label>
        <div className="AddItemMenu-Wraper__item--main">
          <div className="image__wraper">
            <button className="btn-default">Select Image</button>
          </div>
        </div>
      </div>
      <div className="AddItemMenu-Wraper__item">
        <label>Description</label>
        <input type="text" className="Des__input"></input>
      </div>
    </div>
  );
}

export default AddItemMenu;
