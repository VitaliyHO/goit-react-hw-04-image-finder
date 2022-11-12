import style from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({handleClick}) => {
    return(
        <button onClick={handleClick} className={style.Button} type="button">Load more</button>
    )
};

Button.propTypes = {
    handleClick: PropTypes.func.isRequired
}