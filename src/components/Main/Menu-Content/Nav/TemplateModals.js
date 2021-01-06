import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MenuCx } from "../../../../context/MenuContext";

TemplateModals.propTypes = {};

function TemplateModals(props) {
  const closeBtn = <button className="close">&times;</button>;
  return (
    <div>
      <Modal isOpen={false}>
        <ModalHeader close={closeBtn}>Select Template</ModalHeader>
        <ModalBody>
          <div className="Template__menu">
            <ul className="Template__menu--ul">
              <li className="Template__menu--li">
                <button className="btn-default Template__menu--button">
                  Dropdown
                </button>
              </li>
              <li className="Template__menu--li">
                <button className="btn-default Template__menu--button">
                  Special menu
                </button>
              </li>
              <li className="Template__menu--li">
                <button className="btn-default Template__menu--button">
                  Tabs
                </button>
              </li>
              <li className="Template__menu--li">
                <button className="btn-default Template__menu--button">
                  Mega menu
                </button>
              </li>
            </ul>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default TemplateModals;
