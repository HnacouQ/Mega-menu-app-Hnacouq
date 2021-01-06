import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MenuCx } from "../../../../context/MenuContext";
import Dropdown from "../TemplateMenu/Dropdown";
import SpecialMenu from "../TemplateMenu/SpecialMenu";
import Tabs from "../TemplateMenu/Tabs";
import MegaMenu from "../TemplateMenu/MegaMenu";

TemplateModals.propTypes = {};

function TemplateModals({ datas, handleActive }) {
  const { isShowTemplate, handleShowTemplate } = useContext(MenuCx);
  const closeBtn = (
    <button onClick={handleShowTemplate} className="close">
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={isShowTemplate}>
        <ModalHeader close={closeBtn}>Select Template</ModalHeader>
        <ModalBody>
          <div className="Template__menu">
            <ul className="Template__menu--ul">
              {datas.map((data, index) => (
                <li
                  key={index}
                  className={
                    data.active
                      ? "Template__menu--li active"
                      : "Template__menu--li"
                  }
                >
                  <button
                    onClick={() => handleActive(index)}
                    className="btn-default Template__menu--button"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="Template__menu--body">
            {datas.map((data, index) => (
              <div key={index}>
                {data.name === "Dropdown" && data.active == true ? (
                  <Dropdown />
                ) : data.name === "Special menu" && data.active == true ? (
                  <SpecialMenu />
                ) : data.name === "Tabs" && data.active == true ? (
                  <Tabs />
                ) : data.name === "Mega menu" && data.active == true ? (
                  <MegaMenu />
                ) : null}
              </div>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default TemplateModals;
