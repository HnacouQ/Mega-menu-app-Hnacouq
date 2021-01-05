import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";

EditItemMenu.propTypes = {};

function EditItemMenu(props) {
  const {
    isShowPopEdit,
    handleShowPopEdit,
    currentItemEdit,
    handleEditMenu,
    handleChangeTitle,
    handleChangeLink,
  } = useContext(MenuCx);

  return (
    <>
      <div className="Popup-Create-Item">
        <div className="Popup-Create-Item__Content">
          <div className="Popup-Create-Item__header">
            <h4>Edit</h4>
            <button onClick={handleShowPopEdit}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="Popup-Create-Item__body-edit">
            <h4>General</h4>
            <div className="AddItemMenu-Wraper__item">
              <label>Icon & Title</label>
              <div className="AddItemMenu-Wraper__item--main">
                <button className="btn-default addItem__btn">
                  {currentItemEdit.icon == null ? (
                    <span>Icon</span>
                  ) : (
                    <i className={`fa fa-${currentItemEdit.icon}`}></i>
                  )}
                </button>
                <input
                  className="addItem__input"
                  onChange={(e) => handleChangeTitle(e.target.value)}
                  value={currentItemEdit.title}
                ></input>
              </div>
            </div>
            <div className="AddItemMenu-Wraper__item">
              <label>Link</label>
              <div className="AddItemMenu-Wraper__item--main">
                <input
                  onChange={(e) => handleChangeLink(e.target.value)}
                  className="addItem__input"
                  value={currentItemEdit.url}
                ></input>
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
          <div className="Popup-Create-Item__footer">
            <button onClick={handleShowPopEdit} className="btn btn-default">
              Cancel
            </button>
            <button onClick={handleEditMenu} className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={handleShowPopEdit}
        className="Popup-Create-Item__overlay"
      ></div>
    </>
  );
}

export default EditItemMenu;
