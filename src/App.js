import HeaderMN from "./components/header/index";
import "./App.css";
import FooterMN from "./components/footer";
import MainContentMN from "./components/Main";
import "font-awesome/css/font-awesome.min.css";
import MenuContext, { MenuCx } from "./context/MenuContext";
import SettingContext from "./context/SettingContext";
import { useState } from "react";
import CreateITemMenu from "./components/Main/Menu-Content/Nav/CreateITemMenu";
import EditItemMenu from "./components/Main/Menu-Content/Nav/EditItemMenu";

function App() {
  return (
    <MenuContext>
      <div className="App">
        <SettingContext>
          <HeaderMN></HeaderMN>
          <MainContentMN></MainContentMN>
          <FooterMN></FooterMN>
          //Popup-Create-Iteam
          <MenuCx.Consumer>
            {({ isShowPopCreate }) =>
              isShowPopCreate ? <CreateITemMenu></CreateITemMenu> : ""
            }
          </MenuCx.Consumer>
          <MenuCx.Consumer>
            {({ isShowPopEdit }) =>
              isShowPopEdit ? <EditItemMenu></EditItemMenu> : ""
            }
          </MenuCx.Consumer>
        </SettingContext>
      </div>
    </MenuContext>
  );
}

export default App;
