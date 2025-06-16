import React from "react";
import './App.css';
import PropTypes from 'prop-types';

export default function AnimalCard({
    name,
    diet,
    additional,
    scientificName,
    size,
    showAdditional
}) {

    return (
        <>
            <div>
                <h2>{name}</h2>
                <h2>{size}</h2>
                <h2>{scientificName}</h2>
                <h2>{diet.join(', ')}</h2>
                <button id="btn" onClick={() => showAdditional(additional)}>Show more</button>
            </div>
        </>
    )
}

AnimalCard.PropTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }

AnimalCard.defaultProps = {
    additional: {
        notes: 'No additional information'
    }
}
