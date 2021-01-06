import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";
import RenderSubmenuItem from "./RenderSubmenuItem";

RecursionMenu.propTypes = {};

function RecursionMenu(props) {
  const {
    MenuData,
    showModalDelete,
    handleDuplicate,
    handleShowPopEdit2,
    handleShowTemplate,
  } = useContext(MenuCx);

  return (
    <>
      {MenuData.map((data, index) => {
        return (
          <li className={`nav-item nav-item-${data.level}`} key={index}>
            <div className="editor">
              <i
                onClick={() => handleDuplicate(data, index)}
                title="Duplicate Item"
                className="fas fa-copy"
              ></i>
              <i
                onClick={() => handleShowPopEdit2(data, index)}
                title="Edit Item"
                className="fas fa-pen"
              ></i>
              <i
                onClick={() => showModalDelete(index)}
                title="Delete Item"
                className="far fa-trash-alt"
              ></i>
            </div>
            <a>{data.title}</a>
            {data.submenu ? (
              <ul className="has-submenu">
                <RenderSubmenuItem
                  path={`[${index}].submenu`}
                  dataSub={data.submenu}
                />
              </ul>
            ) : (
              <ul className="no-submenu">
                <a onClick={handleShowTemplate} className="addSubmenu">
                  <span>
                    {" "}
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="text-submenu">Add Submenu</span>
                </a>
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

export default RecursionMenu;
