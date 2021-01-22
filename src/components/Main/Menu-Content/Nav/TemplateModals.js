import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MenuCx } from "../../../../context/MenuContext";
import Dropdown from "../TemplateMenu/Dropdown";
import SpecialMenu from "../TemplateMenu/SpecialMenu";
import Tabs from "../TemplateMenu/Tabs";
import MegaMenu from "../TemplateMenu/MegaMenu";

TemplateModals.propTypes = {};

function TemplateModals({ datas, handleActive }) {
  const { isShowTemplate, handleShowTemplate } = useContext(MenuCx);
  const closeBtn = (
    <button onClick={handleShowTemplate} className="close">
      &times;
    </button>
  );
  const DropdownData = [
    {
      id: "vertical_dropdown",
      img:
        "https://menu.globosoftware.net/images/templates/vertical_dropdown.png",
      title: "Vertical Dropdown",
      submenu: {
        type: "dropdown",
        orientation: "vertical",
        alignment: "left",
        justifyContent: "left",
        items: [
          {
            title: "Dropdown item 1",
            level: 1,
            submenu: {
              type: "dropdown",
              orientation: "vertical",
              alignment: "left",
              justifyContent: "left",
              items: [],
            },
          },
          {
            title: "Dropdown item 2",
            submenu: {
              type: "dropdown",
              orientation: "vertical",
              alignment: "left",
              items: [
                {
                  title: "Submenu item 1",
                  level: 2,
                  submenu: {
                    type: "dropdown",
                    orientation: "vertical",
                    alignment: "left",
                    items: [],
                  },
                },
                {
                  title: "Submenu item 2",
                  level: 2,
                  submenu: {
                    type: "dropdown",
                    orientation: "vertical",
                    alignment: "left",
                    items: [],
                  },
                },
                {
                  title: "Submenu item 3",
                  level: 2,
                  submenu: {
                    type: "dropdown",
                    orientation: "vertical",
                    alignment: "left",
                    items: [],
                  },
                },
              ],
            },
            level: 1,
          },
          {
            title: "Dropdown item 3",
            level: 1,
            submenu: {
              type: "dropdown",
              orientation: "vertical",
              alignment: "left",
              justifyContent: "left",
              items: [],
            },
          },
        ],
      },
    },
    {
      id: "horizontal_dropdown",
      img:
        "https://menu.globosoftware.net/images/templates/horizontal_dropdown.png",
      title: "Horizontal Dropdown",
      submenu: {
        type: "dropdown",
        orientation: "horizontal",
        justifyContent: "center",
        alignment: "full",
        items: [
          {
            title: "Dropdown item 1",
          },
          {
            title: "Dropdown item 2",
            submenu: {
              type: "dropdown",
              orientation: "horizontal",
              justifyContent: "center",
              alignment: "full",
              items: [
                {
                  title: "Submenu item 1",
                },
                {
                  title: "Submenu item 2",
                },
                {
                  title: "Submenu item 3",
                },
              ],
            },
          },
          {
            title: "Dropdown item 3",
          },
        ],
      },
    },
  ];

  const TabsData = [
    {
      id: "simple_tabs_2",
      img: "https://menu.globosoftware.net/images/templates/simple_tabs_2.png",
      title: "Simple left tabs",
    },
    {
      id: "nested_tabs_2",
      img: "https://menu.globosoftware.net/images/templates/nested_tabs_2.png",
      title: "Nested left 2-level tabs",
    },
    {
      id: "nested_tabs_5",
      img: "https://menu.globosoftware.net/images/templates/nested_tabs_5.png",
      title: "Nested left 3-level tabs",
    },
    {
      id: "simple_tabs_1",
      img: "https://menu.globosoftware.net/images/templates/simple_tabs_1.png",
      title: "Simple top tab",
    },
    {
      id: "nested_tabs_1",
      img: "https://menu.globosoftware.net/images/templates/nested_tabs_1.png",
      title: "Nested top 2-level tabs",
    },
    {
      id: "nested_tabs_4",
      img: "https://menu.globosoftware.net/images/templates/nested_tabs_4.png",
      title: "Nested top 3-level tabs",
    },
    {
      id: "simple_tabs_3",
      img: "https://menu.globosoftware.net/images/templates/simple_tabs_3.png",
      title: "Simple right tabs",
    },
    {
      id: "nested_tabs_3",
      img: "https://menu.globosoftware.net/images/templates/nested_tabs_3.png",
      title: "Nested right 2-level tabs",
    },
    {
      id: "nested_tabs_6",
      img: "https://menu.globosoftware.net/images/templates/nested_tabs_6.png",
      title: "Nested right 3-level tabs",
    },
  ];

  const MegaMenuData = [
    {
      id: "blank_megamenu",
      img: "https://menu.globosoftware.net/images/templates/blank_megamenu.png",
      title: "Blank",
    },
    {
      id: "megamenu-1",
      img: "https://menu.globosoftware.net/images/templates/megamenu-1.png",
      title: "4 Link list",
      submenu: {
        type: "mega",
        alignment: "full",
        items: [
          {
            type: "links",
            width: 3,
            submenu: {
              items: [
                {
                  title: "Heading",
                  is_heading: true,
                },
                {
                  title: "Menu item 1",
                },
                {
                  title: "Menu item 2",
                },
              ],
            },
          },
          {
            type: "links",
            width: 3,
            submenu: {
              items: [
                {
                  title: "Heading",
                  is_heading: true,
                },
                {
                  title: "Menu item 1",
                },
                {
                  title: "Menu item 2",
                },
              ],
            },
          },
          {
            type: "links",
            width: 3,
            submenu: {
              items: [
                {
                  title: "Heading",
                  is_heading: true,
                },
                {
                  title: "Menu item 1",
                },
                {
                  title: "Menu item 2",
                },
              ],
            },
          },
          {
            type: "links",
            width: 3,
            submenu: {
              items: [
                {
                  title: "Heading",
                  is_heading: true,
                },
                {
                  title: "Menu item 1",
                },
                {
                  title: "Menu item 2",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: "megamenu-4",
      img: "https://menu.globosoftware.net/images/templates/megamenu-4.png",
      title: " 3 Link lists + 1 Image",
    },
    {
      id: "megamenu-5",
      img: "https://menu.globosoftware.net/images/templates/megamenu-5.png",
      title: "2 Link lists + 2 Images",
    },
    {
      id: "megamenu-6",
      img: "https://menu.globosoftware.net/images/templates/megamenu-6.png",
      title: "1 Link list + 3 Images",
    },
    {
      id: "megamenu-7",
      img: "https://menu.globosoftware.net/images/templates/megamenu-7.png",
      title: "4 Images",
    },
    {
      id: "megamenu-9",
      img: "https://menu.globosoftware.net/images/templates/megamenu-9.png",
      title: "4 Products",
    },
    {
      id: "megamenu-11",
      img: "https://menu.globosoftware.net/images/templates/megamenu-11.png",
      title: "4 Product lists",
    },
    {
      id: "megamenu-12",
      img: "https://menu.globosoftware.net/images/templates/megamenu-12.png",
      title: "1 Link list + 3 Product lists",
    },
    {
      id: "megamenu-13",
      img: "https://menu.globosoftware.net/images/templates/megamenu-13.png",
      title: "Product Carousel",
    },
    {
      id: "megamenu-14",
      img: "https://menu.globosoftware.net/images/templates/megamenu-14.png",
      title: "Link list + Product Carousel",
    },
    {
      id: "megamenu-15",
      img: "https://menu.globosoftware.net/images/templates/megamenu-15.png",
      title: "Image + Product Carousel",
    },
    {
      id: "megamenu-16",
      img: "https://menu.globosoftware.net/images/templates/megamenu-16.png",
      title: "Map + Contact + Address",
    },
  ];

  const SpecialMenuData = [
    {
      id: "special-1",
      img: "https://menu.globosoftware.net/images/templates/special-1.png",
      title: "Aliexpress",
    },
  ];

  return (
    <>
      <Modal isOpen={isShowTemplate}>
        <ModalHeader close={closeBtn}>Select Template</ModalHeader>
        <ModalBody>
          <div className="Template__menu">
            <ul className="Template__menu--ul">
              {datas.map((data, index) => (
                <li
                  key={index}
                  className={
                    data.active
                      ? "Template__menu--li active"
                      : "Template__menu--li"
                  }
                >
                  <button
                    onClick={() => handleActive(index)}
                    className="btn-default Template__menu--button"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="Template__menu--body">
            {datas.map((data, index) => (
              <div key={index}>
                {data.name === "Dropdown" && data.active == true ? (
                  <Dropdown data={DropdownData} />
                ) : data.name === "Special menu" && data.active == true ? (
                  <SpecialMenu data={SpecialMenuData} />
                ) : data.name === "Tabs" && data.active == true ? (
                  <Tabs data={TabsData} />
                ) : data.name === "Mega menu" && data.active == true ? (
                  <MegaMenu data={MegaMenuData} />
                ) : null}
              </div>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default TemplateModals;
