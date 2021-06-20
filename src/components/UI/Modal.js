import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from './Modal.module.css';

const BackDrop = (props) => {
    return <div className={classes.backdrop}></div>
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay />, document.getElementById("backdrop-overlay"))}
        </Fragment>
    );
};

export default Modal;