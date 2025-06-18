import React from 'react';
import PropTypes from 'prop-types';

function convertFood(food) {
    switch (food) {
        case 'insects':
            return '🐜';
        case 'meat':
            return '🍖';
        case 'plants':
        default:
            return '🌱';
    }
}
export default function AnimalDetails(props) {
    const{diet, scientificName} = props
    console.log(diet)
    return (
        <div className="details">
            <h4>Details:</h4>
            <div>
                Scientific Name: {scientificName}
            </div>
            <div>
                Diet: {diet.map(food => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}
AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired,
}