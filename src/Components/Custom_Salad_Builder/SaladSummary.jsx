import React, { useContext } from 'react'
import { SaladContext } from './SaladMaker'

const style = {
    marginLeft: '20px'
}
const SaladSummary = () => {
    const {salad} = useContext(SaladContext);
    console.log(salad)
    return (
        <div style={style}>
            <h2>Your Salad</h2>
            <ul>
               {salad.map(({id, name})=> (<li key={id}>{name}</li>))}
            </ul>
        </div>
    )
}

export default SaladSummary;