import React from "react";
import PropTypes from "prop-types";

export default function Card({ children,details, title }) {
    return (
        <div className="card">
            <div className="card-details">
            <h2>{title}</h2>
            {details}
            <div>
                {children}
            </div>
            </div>
        </div>
    )
}

Card.PropTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    details: PropTypes.element,
    title: PropTypes.string.isRequired,
}

Card.defaultProps = {
    details: null,
}