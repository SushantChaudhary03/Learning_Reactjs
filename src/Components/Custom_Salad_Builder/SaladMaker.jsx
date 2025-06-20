import React from 'react'
import SaladBuilder from './SaladBuilder';
import SaladSummary from './SaladSummary'

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px'
}
const SaladMaker = ()=>{
    return(
        <div>
            <h1 style={style}>
                <span>🥗</span>
                Build your custom salad
                <span>🥗</span>
            </h1>
            <SaladBuilder />
            <SaladSummary />
        </div>
    )
}

export default SaladMaker;