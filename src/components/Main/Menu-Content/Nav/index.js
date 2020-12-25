import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";
import { SettingCx } from "../../../../context/SettingContext";
import NavItem from "./navItem";
import NavItemAcc from "./NavItemAcc";

Nav.propTypes = {};

function Nav(props) {
  const { contentActive, MenuData, handleShowPopCreate } = useContext(MenuCx);
  const { isSearch, isUse, isRegister } = useContext(SettingCx);

  return (
    <div className={contentActive ? "My-nav my-nav-mobile" : "My-nav"}>
      <ul>
        {MenuData.map((data, index) => {
          return (
            <li className={`nav-item nav-item-${data.level}`} key={index}>
              <a>{data.title}</a>
            </li>
          );
        })}
        <li
          onClick={handleShowPopCreate}
          className="nav-item nav-item-0 nav-create"
        >
          <button className="nav-create-item">
            <i className="fas fa-plus"></i>
          </button>
        </li>
        {isUse ? <NavItemAcc icon="fas fa-user" title="login" /> : ""}
        {isRegister ? <NavItemAcc icon="" title="Register" /> : ""}
        {isSearch ? <NavItem /> : ""}
      </ul>
    </div>
  );
}

export default Nav;
