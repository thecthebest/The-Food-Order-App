import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from './Modal.module.css';

const BackDrop = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop}></div>
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlay-root"))}
        </Fragment>
    );
};

export default Modal;