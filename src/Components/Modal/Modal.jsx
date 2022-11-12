import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeByEsc)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeByEsc)
    }

    closeByEsc = (event) => {
        if(event.code === 'Escape'){
            this.props.closeModal()
        }
    }

    render() {
        return createPortal(
            <div onClick={this.props.closeModal} className={style.Overlay}>
                <div className={style.Modal}>
                    <img src={this.props.modalImg} alt="" />
                </div>
            </div>,
            modalRoot
        )
    }
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalImg: PropTypes.string.isRequired
}