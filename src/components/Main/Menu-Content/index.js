import React, { useContext } from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Setting from "./SettingMenu/Setting";
import { MenuCx } from "../../../context/MenuContext";
import Style from "./Style";

Content.propTypes = {};
// const color = { color: "red" };

function Content(props) {
  const { menuActive } = useContext(MenuCx);

  return (
    <div className="content">
      <div className="edit-content">
        <Style></Style>
        <Setting
          data={[
            { id: "General" },
            { id: "Color" },
            { id: "Font" },
            { id: "Language" },
          ]}
        ></Setting>
        <div
          className={menuActive ? "edit-main active-on" : "edit-main"}
          id="test"
        >
          <Nav handle={props.handle}></Nav>
        </div>
      </div>
    </div>
  );
}

export default Content;
