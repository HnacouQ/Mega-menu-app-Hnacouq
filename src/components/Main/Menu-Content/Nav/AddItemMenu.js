import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";

AddItemMenu.propTypes = {};

function AddItemMenu(props) {
  const { handleGetValueInput } = useContext(MenuCx);
  return (
    <div className="AddItemMenu-Wraper">
      <div className="AddItemMenu-Wraper__item">
        <label>Icon & Title</label>
        <div className="AddItemMenu-Wraper__item--main">
          <button className="btn-default addItem__btn">
            <span>Icon</span>
          </button>
          <input
            onChange={(e) => handleGetValueInput(e.target.value, props.data)}
            className="addItem__input"
          ></input>
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
