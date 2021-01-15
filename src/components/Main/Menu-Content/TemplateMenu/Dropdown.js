import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";

Dropdown.propTypes = {};

function Dropdown({ data }) {
  const { handleCreateSubmenu } = useContext(MenuCx);
  // console.log(data);
  return (
    <div className="TemplateList">
      {data.map((dataa, index) => (
        <div
          onClick={() => handleCreateSubmenu(dataa)}
          key={index}
          id={dataa.id}
          className="vertical__dropdown"
        >
          <div className="template-inner">
            <img src={dataa.img} alt={dataa.title} />
            <span>{dataa.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
