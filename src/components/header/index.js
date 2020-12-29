import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../context/MenuContext";

HeaderMN.propTypes = {};

function HeaderMN(props) {
  const { handleActiveContent, contentActive } = useContext(MenuCx);

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
            <a href="true" className="preview">
              Preview
            </a>
          </li>
          <li>
            <a href="true" className="unpublish">
              Unpublish
            </a>
          </li>
          <li>
            <a href="true" className="publish">
              Publish
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMN;
