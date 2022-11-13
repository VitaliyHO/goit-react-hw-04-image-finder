import React, { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';




export function ImageGalleryItem({ webformatURL, largeImageURL }) {
    
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (e) => {
        if(window.event.code !== 'Escape' && showModal === true && e.target.nodeName !== 'DIV'){
            return
        }
        setShowModal(!showModal)
    }

    
        return (
            <li className={style.ImageGalleryItem}>
                <img onClick={toggleModal} className={style.ImageGalleryItemImage} src={webformatURL} alt="" />
                { showModal && <Modal modalImg={largeImageURL} closeModal={toggleModal}/> }
            </li>
        )
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}