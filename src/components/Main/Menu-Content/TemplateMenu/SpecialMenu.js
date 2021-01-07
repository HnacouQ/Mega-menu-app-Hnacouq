import React from "react";
import PropTypes from "prop-types";

SpecialMenu.propTypes = {};

function SpecialMenu({ data }) {
  return (
    <div className="TemplateList">
      {data.map((dataa, index) => (
        <div key={index} id={dataa.id} className="vertical__dropdown">
          <div className="template-inner">
            <img src={dataa.img} alt={dataa.title} />
            <span>{dataa.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpecialMenu;
