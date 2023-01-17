import { useState } from "react";
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color; rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
    background-color: grey;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`


export const Modal = ({ children }) => {
    const [show, setShow] = useState(false)

    const closeModal = () => {
        setShow(false)
    }

    return (
        <>
            <button onClick={() => setShow(true)}>Show Modal</button>
            {
                show && (
                    <ModalBackground onClick={closeModal}>
                        <ModalBody onClick={e => e.stopPropagation()}>
                            <button onClick={closeModal}>Hide Modal</button>
                            {children}
                        </ModalBody>
                    </ModalBackground>
                )

            }
        </>
    )

}
