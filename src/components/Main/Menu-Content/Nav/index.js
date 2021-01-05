import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";
import { SettingCx } from "../../../../context/SettingContext";
import NavItem from "./navItem";
import NavItemAcc from "./NavItemAcc";
import ModalDelete from "./ModalDelete";
import RecursionMenu from "./RecursionMenu";

Nav.propTypes = {};

function Nav(props) {
  const { contentActive, handleShowPopCreate } = useContext(MenuCx);
  const { isSearch, isUse, isRegister } = useContext(SettingCx);

  return (
    <div className={contentActive ? "My-nav my-nav-mobile" : "My-nav"}>
      <ul>
        <RecursionMenu></RecursionMenu>
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
      <ModalDelete></ModalDelete>
    </div>
  );
}

export default Nav;
