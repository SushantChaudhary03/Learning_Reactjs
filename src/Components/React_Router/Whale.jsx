import React from 'react'
import Beluga from './Whale _Species/Beluga'
import Blue from './Whale _Species/Blue'
// import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Whale() {
    // const {search} = useLocation();
    // const match = search.match(/type=(.*)/);
    // const type = match?.[1];
    const {type} = useParams();
    return (
        <div>
            <h2>Whale</h2>
            {type === 'beluga' && <Beluga />}
            {type === 'blue' && <Blue />}
        </div>
    )
}