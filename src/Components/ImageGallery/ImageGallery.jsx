import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';



export const ImageGallery = ({ images }) => {
    return (<ul className={style.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
        ))}
    </ul>)
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}