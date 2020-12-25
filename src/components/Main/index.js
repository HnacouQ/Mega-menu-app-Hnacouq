import React, { useContext } from "react";
import PropTypes from "prop-types";
import SiderBar from "./Siderbar";
import Content from "./Menu-Content";
import ModalFont from "./Menu-Content/SettingMenu/Font/ModalFont";
import { MenuCx } from "../../context/MenuContext";

MainContentMN.propTypes = {};

function MainContentMN(props) {
  const { isActiveModalFont } = useContext(MenuCx);

  return (
    <div className="main-content">
      <SiderBar
        dataSider={[
          { icon: "fa fa-cog", name: "General" },
          { icon: "fa fa-font", name: "Font" },
          { icon: "fa fa-tachometer", name: "Color" },
          { icon: "fa fa-language", name: "Language" },
          { icon: "fa fa-long-arrow-left", name: "Back to Shopify" },
        ]}
      ></SiderBar>
      <Content handle={props.handle}></Content>
      {isActiveModalFont && <ModalFont />}
    </div>
  );
}

export default MainContentMN;
