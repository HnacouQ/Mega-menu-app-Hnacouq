import React, { useContext } from "react";
import PropTypes from "prop-types";
import RecursionMenu from "./RecursionMenu";
import { MenuCx } from "../../../../context/MenuContext";

RenderSubmenuItem.propTypes = {};

function RenderSubmenuItem({ dataSub, path, stt }) {
  const newDtSub = [...dataSub.items];
  const orientation = dataSub.orientation;
  // console.log(dataSub);
  const { handleShowPath } = useContext(MenuCx);

  return (
    <>
      {newDtSub
        ? newDtSub.map((data, index) => {
            return (
              <li
                className={`nav-item nav-item-level-${stt + 1} ${
                  data.submenu ? "nav-has-submenu" : "nav-no-submenu"
                } ${
                  dataSub.alignment
                    ? `nav-submenu-align-${dataSub.alignment}`
                    : ""
                } ${dataSub.type ? `nav-submenu-${dataSub.type}` : ""}`}
                key={index}
              >
                <a className="nav-target">
                  <span className="nav-text">{data.title}</span>
                </a>
                {data.submenu && data.submenu.items.length !== 0 ? (
                  <ul
                    className={`has-submenu ${
                      data.submenu.orientation
                        ? `nav-orientation-${data.submenu.orientation}`
                        : ""
                    } ${data.submenu.type ? `nav-${data.submenu.type}` : ""}`}
                  >
                    <RenderSubmenuItem
                      stt={stt + 1}
                      path={`${path}.items[${index}].submenu`}
                      dataSub={data.submenu}
                    />
                    <li className="createItem">
                      <a
                        onClick={() =>
                          handleShowPath(
                            path + `.items[${index}].submenu.items`
                          )
                        }
                        className="nav-target"
                      >
                        <span>
                          <i className="fas fa-plus"></i>
                        </span>
                        <span className="text-submenu">Add item</span>
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className={`has-submenu nav-orientation-${orientation}`}>
                    <li className="createItem">
                      <a className="nav-target">
                        <span>
                          <i className="fas fa-plus"></i>
                        </span>
                        <span className="text-submenu">Add Dropdown</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            );
          })
        : ""}
    </>
  );
}

export default RenderSubmenuItem;
