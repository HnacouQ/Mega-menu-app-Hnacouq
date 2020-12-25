import React from "react";
import PropTypes from "prop-types";

FontCustom.propTypes = {};

function FontCustom(props) {
  return (
    <div className="Font-Custom">
      <div className="Font-Custom-input">
        <input className="Font-input" defaultValue="Font Default" />
      </div>
      <div className="Font-option">
        <select>
          <option value="100">Thin</option>
          <option value="100italic">Thin Italic</option>
          <option value="200">Extra Light</option>
          <option value="200italic">Extra Light Italic</option>
        </select>
      </div>
    </div>
  );
}

export default FontCustom;
