import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";

MegaMenu.propTypes = {};

function MegaMenu({ data }) {
  const { handleCreateSubmenu } = useContext(MenuCx);
  return (
    <div className="TemplateList">
      {data.map((dataa) => (
        <div
          onClick={() => handleCreateSubmenu(dataa)}
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

export default MegaMenu;
