import React, { Component } from "react";
import { DataMenu } from "../components/Main/Menu-Content/Nav/NavData";

export const MenuCx = React.createContext();

class MenuContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSetting: "",
      menuActive: false,
      contentActive: false,
      isCreateActive: true,
      isShowPopCreate: false,
      Color: {
        activeColor: false,
        currentColor: "",
      },
      BackgroundColor: {
        Main: "#E8E4EA",
        Hover: "#090C01",
        Text: "#03010C",
        textHover: "#F4EFF6",
      },
      isActiveModalFont: false,
      MenuData: DataMenu,
      newMenuData: [],
    };

    this.handleActiveMenu = this.handleActiveMenu.bind(this);
    this.handleActiveContent = this.handleActiveContent.bind(this);
    this.handleActiveColor = this.handleActiveColor.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleActiveModalFont = this.handleActiveModalFont.bind(this);
    this.handleActiveCreateItem = this.handleActiveCreateItem.bind(this);
    this.handleCreateItemMenuCkeckbox = this.handleCreateItemMenuCkeckbox.bind(
      this
    );
    this.handleCreateItem = this.handleCreateItem.bind(this);
    this.handleNewArrayEmpty = this.handleNewArrayEmpty.bind(this);
    this.handleShowPopCreate = this.handleShowPopCreate.bind(this);
  }

  handleActiveContent(screen) {
    if (screen === "mobile") {
      this.setState({
        contentActive: true,
      });
    } else {
      this.setState({
        contentActive: false,
      });
    }
  }

  handleActiveMenu(name) {
    const menu = ["General", "Font", "Color", "Language"];
    if (menu.includes(name)) {
      this.setState({
        menuActive: !this.state.menuActive,
        currentSetting: name,
      });
    }
  }

  // Color-st

  handleActiveColor(currentColor) {
    const newColor = {
      activeColor: !this.state.Color.activeColor,
      currentColor: currentColor,
    };

    this.setState({
      Color: newColor,
    });
  }

  //change Color
  handleChangeColor(colorupdate) {
    if (this.state.Color.currentColor === this.state.BackgroundColor.Main) {
      const newColorUpdate = colorupdate;
      const newBackGroundColor = {
        ...this.state.BackgroundColor,
        Main: newColorUpdate,
      };
      this.setState({
        BackgroundColor: newBackGroundColor,
      });
    } else if (
      this.state.Color.currentColor === this.state.BackgroundColor.Hover
    ) {
      const newBackGroundColor = {
        ...this.state.BackgroundColor,
        Hover: colorupdate,
      };
      this.setState({
        BackgroundColor: newBackGroundColor,
      });
    } else if (
      this.state.Color.currentColor === this.state.BackgroundColor.Text
    ) {
      const newBackGroundColor = {
        ...this.state.BackgroundColor,
        Text: colorupdate,
      };
      this.setState({
        BackgroundColor: newBackGroundColor,
      });
    } else if (
      this.state.Color.currentColor === this.state.BackgroundColor.textHover
    ) {
      const newBackGroundColor = {
        ...this.state.BackgroundColor,
        textHover: colorupdate,
      };
      this.setState({
        BackgroundColor: newBackGroundColor,
      });
    }
  }

  // Color-st

  //Font
  handleActiveModalFont() {
    this.setState({
      isActiveModalFont: !this.state.isActiveModalFont,
    });
  }
  //Font

  //ChangeActiveCreateITem
  handleActiveCreateItem(type) {
    if (type === "Select") {
      this.setState({
        isCreateActive: true,
      });
    } else {
      this.setState({
        isCreateActive: false,
      });
    }
  }

  //handleShowwPopCreate
  handleShowPopCreate() {
    this.setState({
      isShowPopCreate: !this.state.isShowPopCreate,
      newMenuData: [],
    });
  }
  //handleCreateItemMenuCkeckbox
  handleCreateItemMenuCkeckbox(id, value, href) {
    const listchild = {
      title: value,
      url: href,
      level: 0,
      color: {
        backgroundColor: "rgba(248, 249, 249, 1)",
        textColor: "rgba(15, 15, 15, 1)",
        backgroundHoverColor: "rgba(255, 255, 255, 1)",
        textHoverColor: "rgba(21, 21, 21, 1)",
      },
      icon: null,
    };
    const arr = this.state.newMenuData;
    if (arr.some((arr) => arr.title === listchild.title)) {
      const newAr = arr.filter((arrr) => {
        return arrr.title !== listchild.title;
      });
      this.setState({
        newMenuData: newAr,
      });
    } else {
      arr.push(listchild);

      this.setState({
        newMenuData: arr,
      });
    }
  }

  //handleCreateItem
  handleCreateItem() {
    const menu = this.state.MenuData;
    const newMenu = this.state.newMenuData;

    const totalMenu = menu.concat(newMenu);

    this.setState({
      MenuData: totalMenu,
    });

    this.handleShowPopCreate();
  }

  //handleNewArrEmpty
  handleNewArrayEmpty() {
    this.setState({
      newMenuData: [],
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <MenuCx.Provider
        value={{
          handleActiveMenu: this.handleActiveMenu,
          handleActiveContent: this.handleActiveContent,
          handleActiveColor: this.handleActiveColor,
          handleChangeColor: this.handleChangeColor,
          handleActiveModalFont: this.handleActiveModalFont,
          handleActiveCreateItem: this.handleActiveCreateItem,
          handleCreateItemMenuCkeckbox: this.handleCreateItemMenuCkeckbox,
          handleCreateItem: this.handleCreateItem,
          handleNewArrayEmpty: this.handleNewArrayEmpty,
          handleShowPopCreate: this.handleShowPopCreate,
          currentSetting: this.state.currentSetting,
          menuActive: this.state.menuActive,
          contentActive: this.state.contentActive,
          activeColor: this.state.Color.activeColor,
          currentColor: this.state.Color.currentColor,
          BackgroundColor: this.state.BackgroundColor,
          handleAlert: this.handleAlert,
          isActiveModalFont: this.state.isActiveModalFont,
          isCreateActive: this.state.isCreateActive,
          MenuData: this.state.MenuData,
          newMenuData: this.state.newMenuData,
          isShowPopCreate: this.state.isShowPopCreate,
        }}
      >
        {this.props.children}
      </MenuCx.Provider>
    );
  }
}

export default MenuContext;
