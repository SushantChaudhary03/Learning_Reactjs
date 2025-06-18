import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ children, title, type }) {
    const colors = {
        success: 'blue',
        error: 'red'
    }

    const style = {
        heading: {
            color: colors[type],
            margin: '0 0 10px 0',
        },

        itemColor: {
            marginBottom: 15,
            padding: 15,
            position: 'relative',
            border: `${colors[type]} solid 1px`
        }

    }
    return (
        <div style={style.itemColor}>
            <h2 style={style.heading}>{title}</h2>
            {children}
        </div>
    )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}