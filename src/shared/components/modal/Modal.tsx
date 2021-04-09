import React from "react";
import { Modal as ModalBoostrap } from "react-bootstrap"

const Modal = (props: any) => {
    return (
        <ModalBoostrap {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalBoostrap.Header closeButton>
                <ModalBoostrap.Title id="contained-modal-title-vcenter">
                    {props.title}
                </ModalBoostrap.Title>
            </ModalBoostrap.Header>
            <ModalBoostrap.Body>
                {props.children}
            </ModalBoostrap.Body>
        </ModalBoostrap>
    )
}

export default Modal

