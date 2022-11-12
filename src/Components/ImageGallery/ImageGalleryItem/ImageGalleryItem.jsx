import React, { Component } from 'react';
import { Modal } from '../../Modal/Modal';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';




export class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }

    toggleModal = (e) => {
        if(window.event.code !== 'Escape' && this.state.showModal === true && e.target.nodeName !== 'DIV'){
            return
        }
        this.setState(prevState => ({showModal: !prevState.showModal}))
    }

    render() {
        return (
            <li className={style.ImageGalleryItem}>
                <img onClick={this.toggleModal} className={style.ImageGalleryItemImage} src={this.props.webformatURL} alt="" />
                { this.state.showModal && <Modal modalImg={this.props.largeImageURL} closeModal={this.toggleModal}/> }
            </li>
        )
    }
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}