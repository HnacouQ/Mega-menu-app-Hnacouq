import React from "react";
import PropTypes from "prop-types";

MegaMenu.propTypes = {};

function MegaMenu({ data }) {
  return (
    <div className="TemplateList">
      {data.map((dataa) => (
        <div id={dataa.id} className="vertical__dropdown">
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
