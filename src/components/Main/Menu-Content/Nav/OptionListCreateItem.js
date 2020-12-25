import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";

OptionListCreateItem.propTypes = {};

function OptionListCreateItem({ title, data }) {
  const { handleCreateItemMenuCkeckbox } = useContext(MenuCx);

  return (
    <div className="Wraper__list-option">
      <ul className="List-option">
        {title !== "" ? <p className="List-option__Title">{title}</p> : ""}

        <li>
          <ul className="List-option__parent">
            {data.map((datas) => {
              return (
                <li key={datas.id} className="List-option__child">
                  <label
                    htmlFor={`"List-option__child-${datas.id}`}
                    className="List-option__child--label"
                  >
                    <input
                      onClick={() => {
                        handleCreateItemMenuCkeckbox(
                          datas.id,
                          datas.name,
                          datas.href
                        );
                      }}
                      id={`"List-option__child-${datas.id}`}
                      type="checkbox"
                    ></input>
                    {datas.name}
                  </label>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default OptionListCreateItem;
