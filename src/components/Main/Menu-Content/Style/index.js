import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { MenuCx } from "../../../../context/MenuContext";
import { SettingCx } from "../../../../context/SettingContext";

Style.propTypes = {};

function Style(props) {
  const { BackgroundColor } = useContext(MenuCx);
  const {
    fontActive,
    fontSize,
    align,
    isCkeckedFont,
    fontDefault,
  } = useContext(SettingCx);

  const myStyle = `
  .My-nav ul {
    display: flex;
    align-items: center;
    background-color: ${BackgroundColor.Main};
    justify-content: ${align};
    padding-right: 40px;
  }
  
  .My-nav ul li a {
    color: ${BackgroundColor.Text};
    text-decoration: none;
    font-size: ${fontSize}px;
    font-family: ${isCkeckedFont ? fontDefault : fontActive}, sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 15px;
    
  }

  .My-nav-search .svg-inline--fa{
    width: ${fontSize}px;
  }

  
  .My-nav ul li:hover {
    background-color: ${BackgroundColor.Hover};
    color:${BackgroundColor.textHover}
  }

  .My-nav ul li {
    list-style: none;
    padding: 20px;
    cursor: pointer;
    
   
  }

  .My-nav ul li:hover > a{
    
    color:${BackgroundColor.textHover}
  }

  .My-nav ul li:hover > button{
    
    color:${BackgroundColor.textHover}
  }
  
  `;
  return (
    <>
      <style>{myStyle}</style>
    </>
  );
}

export default Style;
