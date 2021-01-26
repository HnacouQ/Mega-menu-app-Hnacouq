import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../context/MenuContext";
import Switch from "react-switch";

HeaderMN.propTypes = {};

function HeaderMN(props) {
  const {
    handleActiveContent,
    contentActive,
    handleChangeToggleMode,
    ToggleMode,
  } = useContext(MenuCx);

  return (
    <div className="top-bar">
      <div className="top-column">
        <a href="true">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaTaXZIb_a5R4qdcCrB0z_MgbCHZCpoQkkBw&usqp=CAU"
            alt=""
          />
        </a>
        <ul className="main-menu">
          <li>
            <a href="true">Export</a>
          </li>
          <li>
            <a href="true">Import</a>
          </li>
          <li>
            <a href="true">Help</a>
          </li>
          <li>
            <a href="true">Pricing</a>
          </li>
          <li>
            <a href="true">Expert theme help</a>
          </li>
        </ul>
      </div>
      <div className="top-column">
        <ul className="top-center">
          <li
            className="header-center"
            onClick={() => handleActiveContent("mobile")}
          >
            <a className={contentActive ? "header-mobile" : ""}>
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </a>
          </li>
          <li
            className="header-center"
            onClick={() => handleActiveContent("desktop")}
          >
            <a className={contentActive ? "" : "header-desktop"}>
              <i className="fa fa-desktop" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="top-column">
        <ul className="right-top">
          <li>
            <button
              onClick={handleChangeToggleMode}
              className={`btn-default preview ${ToggleMode ? "active-SW" : ""}`}
            >
              <div className="switch__wrapper">
                <div
                  onClick={handleChangeToggleMode}
                  className="switch__wrapper--btn switch__wrapper--on"
                >
                  <span>Preview Mode</span>
                </div>
                <div
                  onClick={handleChangeToggleMode}
                  className="switch__wrapper--btn switch__wrapper--off"
                >
                  <span>Editor Mode</span>
                </div>
                <div class="switch__wrapper--toggle"></div>
              </div>
            </button>
          </li>
          <li className="unpublish__wrapper">
            <button href="true" className="unpublish btn-default">
              Unpublish
            </button>
          </li>
          <li className="publish__wrapper">
            <button href="true" className="publish btn-default">
              Publish
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMN;
