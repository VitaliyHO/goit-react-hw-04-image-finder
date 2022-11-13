import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root')

export function Modal({modalImg, closeModal}) {

    useEffect(() => {
        window.addEventListener('keydown', closeByEsc)
        return () => {
            window.removeEventListener('keydown', closeByEsc)
        }
    }, []);

    const closeByEsc = (event) => {
        if(event.code === 'Escape'){
            closeModal()
        }
    }

        return createPortal(
            <div onClick={closeModal} className={style.Overlay}>
                <div className={style.Modal}>
                    <img src={modalImg} alt="" />
                </div>
            </div>,
            modalRoot
        )
    };

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalImg: PropTypes.string.isRequired
}