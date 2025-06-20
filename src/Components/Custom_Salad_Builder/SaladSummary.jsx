import React from 'react'

const style = {
    marginLeft: '20px'
}
const SaladSummary = () => {
    return (
        <div style={style}>
            <h2>Your Salad</h2>
            <ul>
                <li>Apple</li>
                <li>Avocado</li>
                <li>Carrots</li>

            </ul>
        </div>
    )
}

export default SaladSummary;