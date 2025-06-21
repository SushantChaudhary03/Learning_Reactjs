import React, { createContext, useReducer } from 'react'
import SaladBuilder from './SaladBuilder';
import SaladSummary from './SaladSummary'

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px'
}
const reducer = (state, item)=>{
    return [...state, item]
}
const SaladContext = createContext();
const SaladMaker = ()=>{
    const [salad, setSalad] = useReducer(reducer, [])
    return(
        <SaladContext.Provider value={{salad, setSalad}}>
        <div>
            <h1 style={style}>
                <span>🥗</span>
                Build your custom salad
                <span>🥗</span>
            </h1>
            <SaladBuilder />
            <SaladSummary />
        </div>
        </SaladContext.Provider>
    )
}

;
export default SaladMaker;
export {SaladContext}