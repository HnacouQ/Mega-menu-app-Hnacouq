import React from "react";
import PropTypes from "prop-types";
import RecursionMenu from "./RecursionMenu";

RenderSubmenuItem.propTypes = {};

function RenderSubmenuItem({ dataSub, path }) {
  const newDtSub = [...dataSub.items];
  return (
    <>
      {newDtSub
        ? newDtSub.map((data, index) => {
            return (
              <ul key={index}>
                {data.title}
                {data.submenu ? (
                  <RenderSubmenuItem
                    path={`${path}.items[${index}].submenu`}
                    dataSub={data.submenu}
                  />
                ) : null}
              </ul>
            );
          })
        : ""}
    </>
  );
}

export default RenderSubmenuItem;
