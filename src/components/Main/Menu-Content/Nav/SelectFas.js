import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Fas } from "./NavData";
import _ from "lodash";
import { MenuCx } from "../../../../context/MenuContext";

SelectFas.propTypes = {};

function SelectFas(props) {
  console.log(props.Arrkey);
  const { handleChangefas } = useContext(MenuCx);
  return (
    <div className="AddItem__Fws">
      <div className="AddItem__Fws--Srch">
        <i className="fas fa-search"></i>
        <input className="form-control" placeholder="Search"></input>
      </div>
      <div className="AddItem__Fws--List">
        {Fas.icons.map((data, index) => {
          return (
            <div key={index} className="icon-wrap">
              <button
                onClick={() => handleChangefas(data.id, props.Arrkey)}
                className="btn btn-default"
              >
                <i className={`fa fa-${data.id}`}></i>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectFas;
