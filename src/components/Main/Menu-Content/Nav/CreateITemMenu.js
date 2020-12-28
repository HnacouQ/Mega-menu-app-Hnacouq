import React, { useContext } from "react";
import PropTypes from "prop-types";
import OptionListCreateItem from "./OptionListCreateItem";
import { MenuCx } from "../../../../context/MenuContext";
import AddItemMenu from "./AddItemMenu";

CreateITemMenu.propTypes = {};

function CreateITemMenu({ handle }) {
  const {
    isCreateActive,
    handleActiveCreateItem,
    newMenuData,
    handleCreateItem,
    handleShowPopCreate,
    newDataAdd,
    handleAddNewItem,
  } = useContext(MenuCx);
  return (
    <div className="Popup-Create-Item">
      <div className="Popup-Create-Item__Content">
        <div className="Popup-Create-Item__header">
          <h4>Create menu items</h4>
          <button onClick={handleShowPopCreate}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="Popup-Create-Item__body">
          <div className="Popup-Create-Item__option">
            <div className="Popup-Create-Item__option--both">
              <button
                onClick={() => {
                  handleActiveCreateItem("Select");
                }}
                className={`Popup-Create-Item__option--select btn-default ${
                  isCreateActive ? "pop-active" : ""
                }`}
              >
                <span>Select Item</span>
                <span className="count">
                  {newMenuData.length > 0 ? `(${newMenuData.length})` : ""}
                </span>
              </button>
              <button
                onClick={() => {
                  handleActiveCreateItem("add");
                }}
                className={`Popup-Create-Item__option--select btn-default ${
                  isCreateActive ? "" : "pop-active"
                }`}
              >
                <span>Add Item</span>
                <span className="count">
                  {newMenuData.length > 0 ? `(${newMenuData.length})` : ""}
                </span>
              </button>
            </div>
          </div>
          <div
            className="Popup-Create-Item__Search"
            style={{ display: `${isCreateActive ? "revert" : "none"}` }}
          >
            <div className="Popup-Create-Item__Search--input">
              <input type="text"></input>
            </div>
            <div className="Popup-Create-Item__Search--icon">
              <i className="fas fa-search-dollar"></i>
            </div>
          </div>
          {isCreateActive ? (
            <div className="Popup-Create-Item__list">
              <OptionListCreateItem
                title=""
                data={[
                  { id: 1, name: "Home", href: "/home" },
                  { id: 2, name: "All Colection", href: "/colections" },
                  { id: 3, name: "All products", href: "/Products" },
                  { id: 4, name: "Search", href: "/search" },
                ]}
              />
              <OptionListCreateItem
                title="COLLECTIONS"
                data={[
                  { id: 5, name: "Best selling products", href: "/sale" },
                  { id: 6, name: "Frontpage", href: "/Frontpage" },
                  { id: 7, name: "New products", href: "/new-Products" },
                ]}
              />
              <OptionListCreateItem
                title="PAGES"
                data={[
                  { id: 8, name: "About us", href: "/about-us" },
                  { id: 9, name: "Frontpage", href: "/Frontpage" },
                  { id: 10, name: "Store locator", href: "/store-locator" },
                ]}
              />
            </div>
          ) : (
            <div className="Popup-Create-Item__list">
              {newDataAdd.map((data, index) => (
                <AddItemMenu key={index} data={index}></AddItemMenu>
              ))}

              <button
                onClick={handleAddNewItem}
                className="btn-default btn-add-component-list"
              >
                <i className="fas fa-plus"></i>
                New item
              </button>
            </div>
          )}
        </div>
        <div className="Popup-Create-Item__footer">
          <button
            onClick={handleShowPopCreate}
            className="Popup-Create-Item__footer--cancel btn-default"
          >
            cancel
          </button>
          <button
            onClick={handleCreateItem}
            className="Popup-Create-Item__footer--Add btn-default"
          >
            Add
          </button>
        </div>
      </div>
      <div
        onClick={handleShowPopCreate}
        className="Popup-Create-Item__overlay"
      ></div>
    </div>
  );
}
export default CreateITemMenu;
