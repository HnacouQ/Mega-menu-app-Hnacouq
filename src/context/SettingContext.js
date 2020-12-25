import React, { Component, useContext } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { MenuCx } from "./MenuContext";

export const SettingCx = React.createContext();

class SettingContext extends Component {
  static contextType = MenuCx;

  constructor(props) {
    super(props);
    this.state = {
      isCkeckedFont: false,
      isSearch: false,
      isUse: false,
      isRegister: false,
      fontDefault: "roboto",
      fontCurrent: "Abril Fatface",
      fontActive: "Abril Fatface",
      fontSize: 16,
      align: "left",
    };

    this.handleChangeCkecked = this.handleChangeCkecked.bind(this);
    this.handleChangeCkecked = this.handleChangeCkecked.bind(this);
    this.handleChangeFontCurrent = this.handleChangeFontCurrent.bind(this);
    this.handleChangeFontActive = this.handleChangeFontActive.bind(this);
    this.handleIncreFontSize = this.handleIncreFontSize.bind(this);
    this.handleDesFontSize = this.handleDesFontSize.bind(this);
    this.handleChangeFontSize = this.handleChangeFontSize.bind(this);
    this.handleChangeAlign = this.handleChangeAlign.bind(this);
    this.handleShowSearch = this.handleShowSearch.bind(this);
    this.handleShowUse = this.handleShowUse.bind(this);
    this.handleShowRegister = this.handleShowRegister.bind(this);
  }

  //FontSetting
  handleChangeCkecked() {
    this.setState({
      isCkeckedFont: !this.state.isCkeckedFont,
    });
  }

  handleChangeFontCurrent(fontCurrent) {
    this.setState({
      fontCurrent: fontCurrent,
    });
  }

  handleChangeFontActive(fontAc) {
    const { handleActiveModalFont } = this.context;
    this.setState({
      fontActive: fontAc,
    });

    handleActiveModalFont();
  }

  //ChangeFontSize
  handleIncreFontSize() {
    this.setState({
      fontSize: this.state.fontSize + 1,
    });
  }

  handleDesFontSize() {
    this.setState({
      fontSize: this.state.fontSize - 1,
    });
  }

  handleChangeFontSize(value) {
    this.setState({
      fontSize: value,
    });
  }

  componentDidUpdate() {
    // setTimeout(() => {
    //   store.addNotification({
    //     title: "",
    //     message: "Changes Save!",
    //     type: "default",
    //     container: "bottom-center",
    //     insert: "top",
    //     animationIn: ["animate__animated", "animate__fadeIn"],
    //     animationOut: ["animate__animated", "animate__fadeOut"],
    //     dismiss: {
    //       duration: 3000,
    //       onScreen: true,
    //     },
    //   });
    // }, 2000);
  }

  //FontSetting

  //General Setting

  handleChangeAlign(position) {
    const align = ["left", "center", "flex-end"];
    if (align.includes(position)) {
      this.setState({
        align: position,
      });
    }
  }

  handleShowSearch() {
    this.setState({
      isSearch: !this.state.isSearch,
    });
  }

  handleShowUse() {
    this.setState({
      isUse: !this.state.isUse,
    });
  }

  handleShowRegister() {
    this.setState({
      isRegister: !this.state.isRegister,
    });
  }

  //General Setting
  render() {
    return (
      <SettingCx.Provider
        value={{
          isCkeckedFont: this.state.isCkeckedFont,
          handleAlert: this.handleAlert,
          fontCurrent: this.state.fontCurrent,
          fontActive: this.state.fontActive,
          fontDefault: this.state.fontDefault,
          fontSize: this.state.fontSize,
          align: this.state.align,
          isSearch: this.state.isSearch,
          isUse: this.state.isUse,
          isRegister: this.state.isRegister,
          handleChangeCkecked: this.handleChangeCkecked,
          handleChangeFontCurrent: this.handleChangeFontCurrent,
          handleChangeFontActive: this.handleChangeFontActive,
          handleDesFontSize: this.handleDesFontSize,
          handleIncreFontSize: this.handleIncreFontSize,
          handleChangeFontSize: this.handleChangeFontSize,
          handleChangeAlign: this.handleChangeAlign,
          handleShowSearch: this.handleShowSearch,
          handleShowRegister: this.handleShowRegister,
          handleShowUse: this.handleShowUse,
        }}
      >
        <ReactNotification></ReactNotification>
        {this.props.children}
      </SettingCx.Provider>
    );
  }
}

export default SettingContext;
