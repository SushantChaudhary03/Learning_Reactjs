import React from 'react';
import PropTypes from 'prop-types';
export default function Alert({ children, title, type }) {
return (
 <div>
 <h2>{title}</h2>
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
