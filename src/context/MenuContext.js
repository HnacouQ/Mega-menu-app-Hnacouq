import React, { Component } from "react";
import { DataMenu } from "../components/Main/Menu-Content/Nav/NavData";
import _ from "lodash";

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
      isShowPopEdit: false,
      isShowFas: false,
      isShowTemplate: false,
      isShowIconHasSubmenu: true,
      CurrentSubmenuIndex: 0,
      isShowFaskey: 0,
      TypeCreate: "",
      pathMenu: "",
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
      dataDelete: 0,
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
      currentItemEdit: {},
      currentItemIndex: 0,
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
    this.handleShowFas = this.handleShowFas.bind(this);
    this.handleChangefas = this.handleChangefas.bind(this);
    this.handleShowPopEdit = this.handleShowPopEdit.bind(this);
    this.handleShowPopEdit2 = this.handleShowPopEdit2.bind(this);
    this.handleEditMenu = this.handleEditMenu.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeLink = this.handleChangeLink.bind(this);
    this.handleShowTemplate = this.handleShowTemplate.bind(this);
    this.handleShowIconHasSubMenu = this.handleShowIconHasSubMenu.bind(this);
    this.handleCreateSubmenu = this.handleCreateSubmenu.bind(this);
    this.handleShowPath = this.handleShowPath.bind(this);
  }

  handleShowPath(path) {
    this.handleShowPopCreate("dropdown");
    this.setState({
      pathMenu: path,
    });
    // console.log(path);
    // console.log(_.get(this.state.MenuData, path));
  }

  handleCreateSubmenu(data) {
    const newSubmenu = data.submenu;
    const newIndexMenu = this.state.CurrentSubmenuIndex;
    const newMenuData = [...this.state.MenuData];

    newMenuData[newIndexMenu].submenu = newSubmenu;
    console.log(newMenuData);

    this.setState({
      MenuData: newMenuData,
      isShowTemplate: !this.state.isShowTemplate,
    });
  }

  handleShowIconHasSubMenu() {
    this.setState({
      isShowIconHasSubmenu: !this.state.isShowIconHasSubmenu,
    });
  }

  handleShowTemplate(index) {
    if (index) {
      this.setState({
        isShowTemplate: !this.state.isShowTemplate,
        CurrentSubmenuIndex: index,
      });
    } else {
      this.setState({
        isShowTemplate: !this.state.isShowTemplate,
        CurrentSubmenuIndex: 0,
      });
    }
  }

  handleShowFas(index) {
    this.setState({
      isShowFas: !this.state.isShowFas,
      isShowFaskey: index,
    });
  }

  //HideShow modals Delete
  toggleModalDelete() {
    this.setState({
      isShowModalDelete: !this.state.isShowModalDelete,
    });
  }
  //HideShow modals Delete

  showModalDelete(id) {
    console.log(id);
    this.setState({
      dataDelete: id,
    });
    this.toggleModalDelete();
  }

  handleDeleteItem() {
    const menu = [...this.state.MenuData];
    const deleteMenu = this.state.dataDelete;
    menu.splice(deleteMenu, 1);
    console.log(menu);

    this.setState({
      MenuData: menu,
      dataDelete: 0,
      isShowModalDelete: !this.state.isShowModalDelete,
    });
  }

  handleDuplicate(data, index) {
    console.log(data);
    const menu = [...this.state.MenuData];
    menu.splice(index, 0, data);

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
  handleShowPopCreate(type) {
    this.setState({
      isShowPopCreate: !this.state.isShowPopCreate,
      newMenuData: [],
      isShowFas: false,
      isShowFaskey: 0,
      TypeCreate: type,
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
    if (this.state.TypeCreate == "menu") {
      const menu = this.state.MenuData;
      const newMenu = this.state.newMenuData;

      const totalMenu = menu.concat(newMenu);

      this.setState({
        MenuData: totalMenu,
        TypeCreate: "",
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
    } else if (this.state.TypeCreate == "dropdown") {
      console.log("123");
      console.log(this.state.pathMenu);
      const menu = this.state.MenuData;
      const path = this.state.pathMenu;
      const newSubmenu = _.get(menu, path);
      const newMenu = this.state.newMenuData;
      const totalMenu = newSubmenu.concat(newMenu);
      const newSubmenuUpdate = _.set(menu, path, totalMenu);

      this.setState({
        MenuData: newSubmenuUpdate,
        TypeCreate: "",
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

  handleChangefas(fas, index) {
    if (fas === "") {
      const html = [...this.state.newDataAdd];
      const Array = html[index];
      Array.icon = null;
      const newHTML = html.filter((data) => data.icon !== null);

      this.setState({
        newMenuData: newHTML,
        isShowFas: false,
      });
    } else {
      const html = [...this.state.newDataAdd];
      const Array = html[index];
      Array.icon = fas;
      const newHTML = html.filter((data) => data.icon !== null);

      this.setState({
        newMenuData: newHTML,
        isShowFas: false,
        isShowFaskey: 0,
      });
    }
  }

  handleShowPopEdit() {
    this.setState({
      isShowPopEdit: !this.state.isShowPopEdit,
      currentItemEdit: {},
      currentItemIndex: 0,
    });
  }

  handleShowPopEdit2(data, index) {
    this.handleShowPopEdit();

    this.setState({
      currentItemEdit: data,
      currentItemIndex: index,
    });
  }

  handleEditMenu() {
    const CloneMenu = [...this.state.MenuData];
    const ArrIndex = this.state.currentItemIndex;
    const newItemMenu = this.state.currentItemEdit;

    CloneMenu[ArrIndex] = newItemMenu;

    this.setState({
      MenuData: CloneMenu,
    });

    this.handleShowPopEdit();
  }

  handleChangeTitle(value) {
    this.setState({
      currentItemEdit: {
        ...this.state.currentItemEdit,
        title: value,
      },
    });
  }

  handleChangeLink(value) {
    this.setState({
      currentItemEdit: {
        ...this.state.currentItemEdit,
        url: value,
      },
    });
  }

  componentDidUpdate() {}

  render() {
    console.log(this.state.CurrentSubmenuIndex);
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
          handleShowFas: this.handleShowFas,
          handleChangefas: this.handleChangefas,
          handleShowPopEdit: this.handleShowPopEdit,
          handleShowPopEdit2: this.handleShowPopEdit2,
          handleEditMenu: this.handleEditMenu,
          handleChangeTitle: this.handleChangeTitle,
          handleChangeLink: this.handleChangeLink,
          handleShowTemplate: this.handleShowTemplate,
          handleShowIconHasSubMenu: this.handleShowIconHasSubMenu,
          handleCreateSubmenu: this.handleCreateSubmenu,
          handleShowPath: this.handleShowPath,
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
          isShowFas: this.state.isShowFas,
          isShowFaskey: this.state.isShowFaskey,
          isShowPopEdit: this.state.isShowPopEdit,
          currentItemEdit: this.state.currentItemEdit,
          isShowTemplate: this.state.isShowTemplate,
          isShowIconHasSubmenu: this.state.isShowIconHasSubmenu,
        }}
      >
        {this.props.children}
      </MenuCx.Provider>
    );
  }
}

export default MenuContext;
