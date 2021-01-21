import React, { useContext } from "react";
import PropTypes from "prop-types";
import RecursionMenu from "./RecursionMenu";
import { MenuCx } from "../../../../context/MenuContext";
import _ from "lodash";

RenderSubmenuItem.propTypes = {};

function RenderSubmenuItem({ dataSub, path, stt }) {
  const newDtSub = [...dataSub.items];
  const orientation = dataSub.orientation;
  const arrHorizontal = [
    {
      title: "",
      submenu: {
        type: "dropdown",
        orientation: "horizontal",
        justifyContent: "center",
        alignment: "full",
        items: [],
      },
      icon: null,
    },
  ];
  const arrVertical = [
    {
      title: "",
      level: 1,
      submenu: {
        type: "dropdown",
        orientation: "vertical",
        alignment: "left",
        justifyContent: "left",
        items: [],
      },
      icon: null,
    },
  ];

  // console.log(dataSub);
  const {
    handleShowPath,
    handleCreateDropdown,
    MenuData,
    handleDeleteItemSubmenu,
    ShowModalDeleteSubmenu,
    handleShowPopEditSubmeuItem,
    handleDuplicateItemSubmenuDropdown,
  } = useContext(MenuCx);

  const menu = [...MenuData];

  // const newSubmenu = _.get(menu, path);
  return (
    <>
      {newDtSub
        ? newDtSub.map((data, index) => {
            // console.log(data);
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
                  <div className="editor">
                    <i
                      onClick={() =>
                        handleDuplicateItemSubmenuDropdown(path, index)
                      }
                      title="Duplicate Item"
                      className="fas fa-copy"
                    ></i>
                    <i
                      onClick={() =>
                        handleShowPopEditSubmeuItem(
                          path,
                          index,
                          "edit_drop_submenu"
                        )
                      }
                      title="Edit Item"
                      className="fas fa-pen"
                    ></i>
                    <i
                      onClick={() =>
                        ShowModalDeleteSubmenu(path, index, "del_drop_submenu")
                      }
                      title="Delete Item"
                      className="far fa-trash-alt"
                    ></i>
                  </div>
                  <span className="nav-text">{data.title}</span>
                  {orientation == "vertical" && data.submenu.items.length ? (
                    <span className="nav-retractor">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  ) : orientation == "horizontal" &&
                    data.submenu &&
                    data.submenu.items.length ? (
                    <span className="nav-retractor">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  ) : (
                    ""
                  )}
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
                            path + `.items[${index}].submenu.items`,
                            `dropdown_${orientation}`,

                            orientation == "vertical"
                              ? arrVertical
                              : arrHorizontal
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
                      <a
                        onClick={() =>
                          handleCreateDropdown(
                            path + `.items[${index}].submenu.items`,
                            `dropdown_${orientation}`,
                            orientation == "vertical"
                              ? arrVertical
                              : arrHorizontal
                          )
                        }
                        className="nav-target"
                      >
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
