import React from "react";
import './App.css';
import PropTypes from 'prop-types';
import AnimalDetails from "./Components/AnimalDetails";
import Card from "./Components/Card";

export default function AnimalCard({
    name,
    diet,
    additional,
    scientificName,
    size,
    showAdditional
}) {
    return (
        <div>
            <Card title="Animal" details={
                <AnimalDetails
                    diet={diet}
                    scientificName={scientificName}
                />
            }>
                <h2>{name}</h2>
                <h2>{size}</h2>
                <h2>{scientificName}</h2>
                <button id="btn" onClick={() => showAdditional(additional)}>Show more</button>
            </Card>
        </div>
    );
}

AnimalCard.propTypes = {
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

AnimalCard.defaultProps = {
    additional: {
        notes: 'No additional information'
    }
};
