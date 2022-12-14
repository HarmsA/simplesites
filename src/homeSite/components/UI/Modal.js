import React, { Fragment } from 'react';
import classes from './Modal.module.css'
import ReactDom from 'react-dom'; 

const Backdrop = props => {
    return <div className={classes.backdrop}>
        
    </div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElament = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, portalElament)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
        </Fragment>
    );
};

export default Modal;