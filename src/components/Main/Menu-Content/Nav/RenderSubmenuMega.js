import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";

RenderSubmenuMega.propTypes = {};

function RenderSubmenuMega({ dataSub, path }) {
  // console.log(dataSub.items);
  const {
    handleShowPath,
    ShowModalDeleteSubmenu,
    ShowModalDelMegaSubmenu,
    ShowModalDelMega,
    handleDuplicateMegaLink,
    handleDuplicateDeleteItemSubmenuMega,
    ShowPopCreateMegaLinks,
    handleShowPopEditMegaITem,
  } = useContext(MenuCx);
  console.log(path);

  return (
    <>
      <div className="bg-submenu"></div>
      <ul className="nav-grid">
        {dataSub.items.map((data, index) => (
          <>
            <li
              key={index}
              className={`nav-item nav-grid-item nav-col-${data.width}`}
            >
              <ul className={`nav-${data.type}`}>
                <div className="editor">
                  <i
                    onClick={() => handleDuplicateMegaLink(path, index)}
                    title="Duplicate Item"
                    className="fas fa-copy"
                  ></i>
                  <i
                    onClick={() => handleShowPopEditMegaITem(path, index)}
                    title="Edit Item"
                    className="fas fa-pen"
                  ></i>
                  <i
                    onClick={() =>
                      ShowModalDelMega(path, index, "delete-mega-link")
                    }
                    title="Delete Item"
                    className="far fa-trash-alt"
                  ></i>
                </div>
                {data.submenu.items.map((data2, index2) => (
                  <li
                    key={index2}
                    className={`nav-item ${
                      data2.is_heading ? "nav-heading" : ""
                    }`}
                  >
                    <a className="nav-target">
                      <div className="editor">
                        <i
                          onClick={() =>
                            handleDuplicateDeleteItemSubmenuMega(
                              path,
                              index,
                              index2
                            )
                          }
                          title="Duplicate Item"
                          className="fas fa-copy"
                        ></i>
                        <i title="Edit Item" className="fas fa-pen"></i>
                        <i
                          onClick={() =>
                            ShowModalDelMegaSubmenu(
                              path,
                              index,
                              index2,
                              "mega-link-item"
                            )
                          }
                          title="Delete Item"
                          className="far fa-trash-alt"
                        ></i>
                      </div>
                      <span className="nav-text">{data2.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <li key={index} className="createItem">
                <a
                  onClick={() =>
                    ShowPopCreateMegaLinks(path, index, "mega-links")
                  }
                  className="nav-target"
                >
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="text-submenu">Add item</span>
                </a>
              </li>
            </li>
          </>
        ))}
        <li className="nav-item nav-grid-item nav-col addblocks">
          <button className="btn btn-default addblock--btn">
            <i className="fas fa-plus"></i>
          </button>
        </li>
      </ul>
    </>
  );
}

export default RenderSubmenuMega;
