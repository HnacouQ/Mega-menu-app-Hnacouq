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
      isShowModalDelete: false,
      Color: {
        activeColor: false,
        currentColor: "",
      },
      BackgroundColor: {
        Main: "#E8E4EA",
        Hover: "#fffa65",
        Text: "#03010C",
        textHover: "#ff3838",
      },
      isActiveModalFont: false,
      MenuData: DataMenu,
      newMenuData: [],
      dataDelete: {},
      newDataAdd: [
        {
          title: "",
          url: "",
          level: 0,
          color: {
            backgroundColor: "rgba(248, 249, 249, 1)",
            textColor: "rgba(15, 15, 15, 1)",
            backgroundHoverColor: "rgba(255, 255, 255, 1)",
            textHoverColor: "rgba(21, 21, 21, 1)",
          },
          icon: null,
        },
      ],
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
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
    this.handleGetValueInput = this.handleGetValueInput.bind(this);
    this.toggleModalDelete = this.toggleModalDelete.bind(this);
    this.showModalDelete = this.showModalDelete.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleDuplicate = this.handleDuplicate.bind(this);
  }

  toggleModalDelete() {
    this.setState({
      isShowModalDelete: !this.state.isShowModalDelete,
    });
  }

  showModalDelete(data) {
    this.setState({
      dataDelete: data,
    });
    this.toggleModalDelete();
  }

  handleDeleteItem() {
    const menu = this.state.MenuData;
    const deleteMenu = this.state.dataDelete;
    const newMenu = menu.filter((data) => data.title !== deleteMenu.title);

    this.setState({
      MenuData: newMenu,
      dataDelete: {},
      isShowModalDelete: !this.state.isShowModalDelete,
    });
  }

  handleDuplicate(data) {
    console.log(data);
    const menu = this.state.MenuData;
    menu.push(data);

    console.log(menu);

    this.setState({
      MenuData: menu,
    });
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
    this.setState({
      newDataAdd: [
        {
          title: "",
          url: "",
          level: 0,
          color: {
            backgroundColor: "rgba(248, 249, 249, 1)",
            textColor: "rgba(15, 15, 15, 1)",
            backgroundHoverColor: "rgba(255, 255, 255, 1)",
            textHoverColor: "rgba(21, 21, 21, 1)",
          },
          icon: null,
        },
      ],
    });
  }

  //handleNewArrEmpty
  handleNewArrayEmpty() {
    this.setState({
      newMenuData: [],
    });
  }
  //handleCreateAddHTMLMenu
  handleAddNewItem() {
    const child = {
      title: "",
      url: "",
      level: 0,
      color: {
        backgroundColor: "rgba(248, 249, 249, 1)",
        textColor: "rgba(15, 15, 15, 1)",
        backgroundHoverColor: "rgba(255, 255, 255, 1)",
        textHoverColor: "rgba(21, 21, 21, 1)",
      },
      icon: null,
    };
    const arrOld = this.state.newDataAdd;
    arrOld.push(child);
    this.setState({
      newDataAdd: arrOld,
    });
  }

  //handleGetValueInput
  handleGetValueInput(value, index) {
    const html = [...this.state.newDataAdd];
    const Array = html[index];
    Array.title = value;
    const newHTML = html.filter((data) => data.title !== "");

    this.setState({
      newMenuData: newHTML,
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
          handleAddNewItem: this.handleAddNewItem,
          handleGetValueInput: this.handleGetValueInput,
          toggleModalDelete: this.toggleModalDelete,
          showModalDelete: this.showModalDelete,
          handleDeleteItem: this.handleDeleteItem,
          handleDuplicate: this.handleDuplicate,
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
          newDataAdd: this.state.newDataAdd,
          isShowModalDelete: this.state.isShowModalDelete,
        }}
      >
        {this.props.children}
      </MenuCx.Provider>
    );
  }
}

export default MenuContext;
