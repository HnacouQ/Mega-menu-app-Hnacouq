import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../../context/MenuContext";
import { SettingCx } from "../../../../../context/SettingContext";

FontSelect.propTypes = {};

function FontSelect(props) {
  const { handleActiveModalFont } = useContext(MenuCx);
  const { fontActive } = useContext(SettingCx);
  return (
    <div className="Font-Select">
      <div className="Font-Select-content">
        <p style={{ fontFamily: `${fontActive}, sans-serif` }}>{fontActive}</p>
      </div>
      <button onClick={handleActiveModalFont}>Change</button>
    </div>
  );
}

export default FontSelect;
