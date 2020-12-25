import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../context/MenuContext";

SiderBar.propTypes = {};

function SiderBar(props) {
  const { handleActiveMenu } = useContext(MenuCx);
  return (
    <div className="side-bar">
      {props.dataSider.map((data, index) => (
        <ul key={index}>
          <li>
            <button onClick={() => handleActiveMenu(data.name)} id={data.name}>
              <span>
                <i className={data.icon}></i>
              </span>
              <span>{data.name}</span>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SiderBar;
