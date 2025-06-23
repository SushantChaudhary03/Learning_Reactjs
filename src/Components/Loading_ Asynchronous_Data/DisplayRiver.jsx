import React, { lazy, Suspense, useReducer, useState } from 'react';
import '../../App.css'
const RiverInformation = lazy(()=> import( /* webpackChunkName: "RiverInformation"
*/'./RiverInformation'))

export default function DisplayRiver() {
    const [river, setRiver] = useState('nile');
    const [show, toggle] = useReducer(state => !state, true)
    return (
        <div className="river-information">
            <h1>World's longest rivers</h1>
            <button onClick={toggle}>Toggle Details</button>
            <button onClick={() => setRiver('nile')}>Nile</button>
            <button onClick={() => setRiver('amazon')}>Amazon</button>
            <button onClick={() => setRiver('yangtze')}>Yangtze</button>
            <button onClick={() => setRiver('mississippi')}>mississippi</button>
            <Suspense fallback={<div>Loading Component</div>}>
            {show && <RiverInformation name={river} />}
            </Suspense>
        </div>
    )
}