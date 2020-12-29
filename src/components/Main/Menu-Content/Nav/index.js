import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";
import { SettingCx } from "../../../../context/SettingContext";
import NavItem from "./navItem";
import NavItemAcc from "./NavItemAcc";
import ModalDelete from "./ModalDelete";

Nav.propTypes = {};

function Nav(props) {
  const {
    contentActive,
    MenuData,
    handleShowPopCreate,
    showModalDelete,
    handleDuplicate,
  } = useContext(MenuCx);
  const { isSearch, isUse, isRegister } = useContext(SettingCx);

  return (
    <div className={contentActive ? "My-nav my-nav-mobile" : "My-nav"}>
      <ul>
        {MenuData.map((data, index) => {
          return (
            <li className={`nav-item nav-item-${data.level}`} key={index}>
              <div className="editor">
                <i
                  onClick={() => handleDuplicate(data)}
                  title="Duplicate Item"
                  className="fas fa-copy"
                ></i>
                <i title="Edit Item" className="fas fa-pen"></i>
                <i
                  onClick={() => showModalDelete(data)}
                  title="Delete Item"
                  className="far fa-trash-alt"
                ></i>
              </div>
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
      <ModalDelete></ModalDelete>
    </div>
  );
}

export default Nav;
