import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MenuCx } from "../../../../context/MenuContext";

ModalDelete.propTypes = {};

function ModalDelete(props) {
  const { isShowModalDelete, toggleModalDelete, handleDeleteItem } = useContext(
    MenuCx
  );
  return (
    <div>
      <Modal isOpen={isShowModalDelete} onClick={toggleModalDelete}>
        <ModalHeader onClick={toggleModalDelete}>
          Remove this menu item and its sub-menus
        </ModalHeader>
        <ModalBody>
          Are you sure to remove this menu item and its all sub-menus?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModalDelete}>
            Cancel
          </Button>{" "}
          <Button onClick={handleDeleteItem} color="danger">
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDelete;
