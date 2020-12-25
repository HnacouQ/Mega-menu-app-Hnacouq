import React, { useContext } from "react";
import { ChromePicker } from "react-color";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../../context/MenuContext";

SettingColor.propTypes = {};

function SettingColor(props) {
  const {
    activeColor,
    currentColor,
    handleActiveColor,
    handleChangeColor,
  } = useContext(MenuCx);
  return (
    <div className="setting-body-content">
      <div className="setting-item">
        <div className="setting-item-header">
          <h3>Main Menu</h3>
        </div>
        <div className="setting-item-body">
          {props.data.map((data) => {
            return (
              <div
                style={{ position: "relative" }}
                className="color-wrapper"
                key={data.name}
              >
                <div className="color-inner">
                  <div
                    style={{ backgroundColor: data.color }}
                    className="color-preview"
                    onClick={() => handleActiveColor(data.color)}
                  ></div>
                  <div>
                    <label>Main menu {data.name}</label>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    marginTop: "5px",
                    zIndex: "9999",
                  }}
                >
                  {currentColor === data.color && activeColor && (
                    <ChromePicker
                      color={data.color}
                      onChange={(updateColor) =>
                        handleChangeColor(updateColor.hex)
                      }
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SettingColor;
