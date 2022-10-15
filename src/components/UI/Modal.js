import styles from './Modal.module.css'
import {createPortal} from "react-dom";

const Backdrop = (props) => {
    return(
        <div className={styles.backdrop} onClick={props.onClick}></div>
    )
}

const ModalWindow = (props) => {
    return(
        <div className={styles.modal}>
           {props.children}
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return(
        <>
            {createPortal(<Backdrop onClick={props.onHideCart}/>, portalElement)}
            {createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
        </>
    )
}

export default Modal;