import React, { useContext } from "react";
import PropTypes from "prop-types";

RenderSubmenuMega.propTypes = {};

function RenderSubmenuMega({ dataSub }) {
  // console.log(dataSub.items);

  return (
    <>
      <div className="bg-submenu"></div>
      <ul className="nav-grid">
        {dataSub.items.map((data, index) => (
          <>
            <li
              key={index}
              className={`nav-item nav-grid-item nav-col-${data.width}`}
            >
              <ul className={`nav-${data.type}`}>
                {data.submenu.items.map((data2, index2) => (
                  <li
                    key={index2}
                    className={`nav-item ${
                      data2.is_heading ? "nav-heading" : ""
                    }`}
                  >
                    <a className="nav-target">
                      <span className="nav-text">{data2.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <li key={index} className="createItem">
                <a className="nav-target">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="text-submenu">Add item</span>
                </a>
              </li>
            </li>
          </>
        ))}
        <li className="nav-item nav-grid-item nav-col addblocks">
          <button className="btn btn-default addblock--btn">
            <i className="fas fa-plus"></i>
          </button>
        </li>
      </ul>
    </>
  );
}

export default RenderSubmenuMega;
