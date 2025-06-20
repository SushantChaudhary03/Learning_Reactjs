import React from 'react'
import PropTypes from 'prop-types';

const SaladItem = ({ image, name }) => {
    const favorite = true;
    return (
        <div className='salad-items'>
            <h4>{name}</h4>
            <span>
                {favorite ? '😊' : ''}
            </span>
            <button>
                <span>{image}</span>
            </button>
        </div>
    )
}

export default SaladItem

SaladItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}