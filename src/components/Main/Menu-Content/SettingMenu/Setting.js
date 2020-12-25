import React, { useContext } from "react";
import PropTypes from "prop-types";
import Popup from "./Popup";
import General from "./General";
import Font from "./Font";
import Color from "./Color";
import Language from "./Language";
import { MenuCx } from "../../../../context/MenuContext";

Setting.propTypes = {};

function Setting(props) {
  const { menuActive, currentSetting } = useContext(MenuCx);

  return (
    <>
      {props.data.map((data) => (
        <Popup key={data.id} className="Setting-menu">
          <div
            className={
              currentSetting == data.id && menuActive
                ? "Setting-menu active-on"
                : "Setting-menu active-off"
            }
          >
            <div className="setting-content">
              <div className="setting-header">
                <h3>{currentSetting} Settings</h3>
              </div>
              <div className="setting-body">
                {data.id === "General" ? (
                  <General />
                ) : data.id === "Font" ? (
                  <Font />
                ) : data.id === "Color" ? (
                  <Color />
                ) : data.id === "Language" ? (
                  <Language />
                ) : null}
              </div>
            </div>
          </div>
        </Popup>
      ))}
    </>
  );
}

export default Setting;
