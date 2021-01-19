import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";
import RenderSubmenuItem from "./RenderSubmenuItem";
import RenderSubmenuMega from "./RenderSubmenuMega";
import _ from "lodash";

RecursionMenu.propTypes = {};

function RecursionMenu(props) {
  const {
    MenuData,
    showModalDelete,
    handleDuplicate,
    handleShowPopEdit2,
    handleShowTemplate,
    isShowIconHasSubmenu,
    handleShowPath,
  } = useContext(MenuCx);

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

  // console.log(MenuData);
  // console.log(MenuData[3].submenu.items[2].submenu.items[0].submenu.items);
  // console.log(MenuData[3].submenu);
  // console.log(_.set(MenuData, "[3].submenu.items", 5));
  // console.log(MenuData[3].items);

  return (
    <>
      {MenuData.map((data, index) => {
        return (
          <li
            key={index}
            className={`nav-item nav-item-${data.level} ${
              data.submenu ? "nav-has-submenu" : "nav-no-submenu"
            } ${
              data.submenu ? `nav-submenu-align-${data.submenu.alignment}` : ""
            } ${data.submenu ? `nav-submenu-${data.submenu.type}` : ""}`}
            key={index}
          >
            <a className="nav-target">
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
              <span className="nav-text">{data.title}</span>
              {isShowIconHasSubmenu && data.submenu ? (
                <span className="nav-retractor">
                  <i className="fa fa-angle-down"></i>
                </span>
              ) : (
                ""
              )}
            </a>
            {data.submenu && data.submenu.type == "dropdown" ? (
              <ul
                className={`has-submenu nav-orientation-${data.submenu.orientation}`}
              >
                <RenderSubmenuItem
                  stt={0}
                  path={`[${index}].submenu`}
                  dataSub={data.submenu}
                />
                <li className="createItem">
                  <a
                    onClick={() =>
                      handleShowPath(
                        `[${index}].submenu.items`,
                        `dropdown_${data.submenu.orientation}`,

                        data.submenu.orientation == "vertical"
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
            ) : data.submenu && data.submenu.type == "mega" ? (
              <div className={`has-submenu nav-${data.submenu.type}`}>
                <RenderSubmenuMega dataSub={data.submenu} />
              </div>
            ) : (
              <ul className="no-submenu">
                <a
                  onClick={() => handleShowTemplate(index)}
                  className="addSubmenu"
                >
                  <span>
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
