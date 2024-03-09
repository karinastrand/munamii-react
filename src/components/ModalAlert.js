import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalAlert({show, handleClose, onConfirm, title, message, buttonLabel})
 {
  return (
    <Modal show={show} onHide={handleClose} onClose={handleClose}>
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {message}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>
                {buttonLabel}
            </Button>
            <Button onClick={onConfirm}>
                {buttonLabel}
            </Button>
        </Modal.Footer>
    </Modal>
  )
}
