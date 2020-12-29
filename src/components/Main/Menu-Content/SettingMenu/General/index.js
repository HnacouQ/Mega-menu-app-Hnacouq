import React, { useContext } from "react";
import PropTypes from "prop-types";
import SLOPT from "./SLOPT";
import CB from "./CB";
import { SettingCx } from "../../../../../context/SettingContext";

General.propTypes = {};

function General(props) {
  const {
    handleShowSearch,
    isSearch,
    handleShowRegister,
    isRegister,
    handleShowUse,
    isUse,
  } = useContext(SettingCx);

  return (
    <div className="setting-body-content">
      <div className="setting-item-general">
        <div className="setting-item-header-general">Align</div>
        <div className="setting-item-body">
          <SLOPT
            data={[{ name: "Left" }, { name: "Right" }, { name: "Center" }]}
          ></SLOPT>
        </div>
        <div className="setting-item-header-general">Trigger - Desktop</div>
        <div className="setting-item-body">
          <SLOPT
            data={[
              { name: "Hover" },
              { name: "Click" },
              { name: "Click toggle" },
            ]}
          ></SLOPT>
        </div>
        <div className="setting-item-header-general">Transition</div>
        <div className="setting-item-body">
          <SLOPT data={[{ name: "Fade" }, { name: "Shift up" }]}></SLOPT>
        </div>
      </div>
      <CB
        handle={handleShowSearch}
        ckeck={isSearch ? "Ckecked" : ""}
        data="Show search box"
      ></CB>
      <CB data="Show submenu indicators"></CB>
      <CB data="Top menu separator"></CB>
      <CB data="Submenu menu border"></CB>
      <CB data="Submenu scroll"></CB>
      <CB
        handle={handleShowUse}
        ckeck={isUse ? "Ckecked" : ""}
        data="Show login"
      ></CB>
      <CB
        handle={handleShowRegister}
        ckeck={isRegister ? "Ckecked" : ""}
        data="Show Register"
      ></CB>
    </div>
  );
}

export default General;
