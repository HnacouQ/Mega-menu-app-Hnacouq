import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SettingCx } from "../../../../context/SettingContext";

NavItemAcc.propTypes = {};

function NavItemAcc({ icon, title }) {
  const { align } = useContext(SettingCx);
  return (
    <li
      className="My-nav-accItem My-nav-search"
      style={{ marginLeft: `${align == "left" ? "auto" : ""}` }}
    >
      <a>
        <i className={`My-Nav-icon ${icon}`}></i>
        <span>{title}</span>
      </a>
    </li>
  );
}

export default NavItemAcc;
