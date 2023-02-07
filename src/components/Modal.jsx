import { Modal, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const DrinkModal =  () => {
  const {modal, handleModalClick} = useDrinks();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>
        Corpo
      </Modal.Body>
    </Modal>
  )
}

export default DrinkModal;