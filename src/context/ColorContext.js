import React, { Component } from "react";
import { MenuCx } from "./MenuContext";

export const ColorCx = React.createContext();

class ColorContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: false,
    };
  }

  render() {
    return (
      <ColorCx.Provider
        value={{ activeColor: this.state.activeColor, name: "Quốc Anh" }}
      >
        {this.props.children}
      </ColorCx.Provider>
    );
  }
}

export default ColorContext;
