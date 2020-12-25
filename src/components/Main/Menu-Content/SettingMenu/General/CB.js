import React from "react";
import PropTypes from "prop-types";

CB.propTypes = {};

function CB({ data, handle, ckeck }) {
  return (
    <>
      <label className="CB-main">
        <input onChange={handle} type="checkbox" id="id-CB" checked={ckeck} />
        <label className="CB-label">{data} </label>
      </label>
    </>
  );
}

export default CB;
