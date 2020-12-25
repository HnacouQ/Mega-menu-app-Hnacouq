import React, { useContext } from "react";
import PropTypes from "prop-types";
import SettingColor from "./settingColor";
import { MenuCx } from "../../../../../context/MenuContext";

Color.propTypes = {};

function Color(props) {
  const { BackgroundColor } = useContext(MenuCx);
  return (
    <>
      <SettingColor
        data={[
          { name: "background", color: BackgroundColor.Main },
          { name: "background hover", color: BackgroundColor.Hover },
          { name: "text", color: BackgroundColor.Text },
          { name: "text hover", color: BackgroundColor.textHover },
        ]}
      ></SettingColor>
    </>
  );
}

export default Color;
