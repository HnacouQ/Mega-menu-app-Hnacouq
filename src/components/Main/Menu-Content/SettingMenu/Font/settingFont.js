import React, { useContext } from "react";
import PropTypes from "prop-types";
import FontCustom from "./FontCustom";
import FontSelect from "./FontSelect";
import { MenuCx } from "../../../../../context/MenuContext";
import { SettingCx } from "../../../../../context/SettingContext";

SettingFont.propTypes = {};

function SettingFont(props) {
  const { isCkeckedFont, handleChangeCkecked, handleAlert } = useContext(
    SettingCx
  );
  const {
    fontActive,
    fontSize,
    handleChangeFontSize,
    handleIncreFontSize,
    handleDesFontSize,
  } = useContext(SettingCx);
  const ActiveFont = fontActive.replace(" ", "+");
  const linkFont = `https://fonts.googleapis.com/css2?family=${ActiveFont}`;

  return (
    <div className="setting-body-content">
      <link rel="stylesheet" href={linkFont}></link>
      <div className="setting-item">
        <div className="setting-item-header">
          <h3 onClick={handleAlert}>Main Menu</h3>
        </div>
        <div className="setting-item-body">
          <div className="font-body">
            <div className="font-custom">
              <span className="font-ckeckbox">
                <input
                  onChange={handleChangeCkecked}
                  type="checkbox"
                  id="idFontCb"
                />
              </span>
              <label className="font-label">Use Custom Font</label>
            </div>
            <div className="Font-Familly-Setting">
              <div className="Font-Fl-title">
                <p>Font</p>
              </div>
              <div className="Font-Fl-content">
                {isCkeckedFont ? (
                  <FontCustom></FontCustom>
                ) : (
                  <FontSelect></FontSelect>
                )}
              </div>
            </div>
            <div className="font-size">
              <div className="font-title">
                <h4>Size</h4>
              </div>
              <div className="font-field">
                <div className="btn-font">
                  <button onClick={handleDesFontSize} className="btn-de">
                    -
                  </button>
                </div>
                <input
                  className="font-content-field"
                  value={fontSize ? fontSize : ""}
                  onChange={(e) => {
                    handleChangeFontSize(e.target.value);
                  }}
                />
                <p className="font-px-field">px</p>
                <div className="btn-font">
                  <button onClick={handleIncreFontSize} className="btn-in">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingFont;
