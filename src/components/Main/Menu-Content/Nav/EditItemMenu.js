import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";
import Slider from "react-rangeslider";
EditItemMenu.propTypes = {};

function EditItemMenu(props) {
  const {
    isShowPopEdit,
    handleShowPopEdit,
    currentItemEdit,
    handleEditMenu,
    handleChangeTitle,
    handleChangeLink,
    currentMegaItemEdit,
    handleChangeWidthMega,
    handleChangeValueTitleMega,
    handleChangeLinkMega,
    handleChangeDesMega,
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
          {currentMegaItemEdit.width && currentMegaItemEdit.submenu ? (
            <div className="Popup-Create-Item__body-edit">
              <h4>General</h4>
              <div className="rangerSlider__Wrapper">
                <div className="rangerSlider__Wrapper--width">Width</div>
                <div className="slider">
                  <Slider
                    onChange={handleChangeWidthMega}
                    min={0}
                    max={12}
                    value={currentMegaItemEdit.width}
                  />
                </div>
                <div className="rangerSlider__Wrapper--value">
                  {`${currentMegaItemEdit.width}/12`}
                </div>
              </div>

              {currentMegaItemEdit.submenu.items.map((data, index) => (
                <div key={index} className="Edit-Menu__wrapper">
                  <div className="Title-Edit__wrapper">
                    {data.is_heading ? (
                      <h3>Heading</h3>
                    ) : (
                      <h3>{`Menu Item ${index}`}</h3>
                    )}

                    <button className="Title-Edit__wrapper--btn btn-default">
                      Remove
                    </button>
                  </div>
                  <div className="Isheading__Wrapper">
                    <input
                      type="checkbox"
                      checked={data.is_heading ? "checked" : ""}
                    ></input>
                    <span>Is Heading</span>
                  </div>

                  <div className="AddItemMenu-Wraper__item">
                    <label>Icon & Title</label>
                    <div className="AddItemMenu-Wraper__item--main">
                      <button className="btn-default addItem__btn">
                        {data.icon == null ? (
                          <span>Icon</span>
                        ) : (
                          <i className={`fa fa-${data.icon}`}></i>
                        )}
                      </button>
                      <input
                        onChange={(e) =>
                          handleChangeValueTitleMega(e.target.value, index)
                        }
                        className="addItem__input"
                        value={data.title !== undefined ? data.title : ""}
                      ></input>
                    </div>
                  </div>
                  <div className="AddItemMenu-Wraper__item">
                    <label>Link</label>
                    <div className="AddItemMenu-Wraper__item--main">
                      <input
                        onChange={(e) =>
                          handleChangeLinkMega(e.target.value, index)
                        }
                        className="addItem__input"
                        value={data.url ? data.url : ""}
                      ></input>
                      <button className="addItem__btn btn-default btn-link">
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
                    <input
                      onChange={(e) => {
                        handleChangeDesMega(e.target.value, index);
                      }}
                      type="text"
                      className="Des__input"
                    ></input>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="Popup-Create-Item__body-edit">
              <h4>General</h4>
              <div className="AddItemMenu-Wraper__item">
                <label>Icon & Title</label>
                <div className="AddItemMenu-Wraper__item--main">
                  <button className="btn-default addItem__btn">
                    {currentItemEdit.icon == null ? (
                      <span>Icon</span>
                    ) : (
                      <span>
                        {" "}
                        <i className={`fa fa-${currentItemEdit.icon}`}></i>
                      </span>
                    )}
                  </button>
                  <input
                    className="addItem__input"
                    onChange={(e) => handleChangeTitle(e.target.value)}
                    value={
                      currentItemEdit.title !== undefined
                        ? currentItemEdit.title
                        : ""
                    }
                  ></input>
                </div>
              </div>
              <div className="AddItemMenu-Wraper__item">
                <label>Link</label>
                <div className="AddItemMenu-Wraper__item--main">
                  <input
                    onChange={(e) => handleChangeLink(e.target.value)}
                    className="addItem__input"
                    value={currentItemEdit.url ? currentItemEdit.url : ""}
                  ></input>
                  <button className="addItem__btn btn-default btn-link">
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
          )}
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
