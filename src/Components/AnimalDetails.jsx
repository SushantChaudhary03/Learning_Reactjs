import React from "react";
import PropTypes from "prop-types";

function convertFood(food) {
    switch (food) {
        case 'insects': return '🐛';
        case 'meat': return '🍖';
        case 'plants':
        default: return '🌱'
    }
}

export default function AnimalDetails({...props}){
    const{diet, scientificName} = props;
    console.log(scientificName)
    return(
        <div className="details">
            <h2>Details: </h2>
            <div>Scientific Name: {scientificName}</div>
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