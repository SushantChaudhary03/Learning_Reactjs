import React, { useEffect, useState } from 'react'
import getRiverInformation from './River';
import PropTypes from 'prop-types'

const RiverInformation = ({name}) => {
    const [riverInformation, setRiverInformation] = useState({});

    useEffect(() => {
        let mounted = true;
        getRiverInformation(name).then(data => {
            if(mounted) setRiverInformation(data)
        })
    return ()=>{
        mounted = false;
    }
    }, [name])

    return (
        <div>
            <h2>River Information</h2>
            <ul>
                <li>{riverInformation.continent}</li>
                <li>{riverInformation.length}</li>
                <li>{riverInformation.outflow}</li>
            </ul>
        </div>
    )
}

export default RiverInformation;
RiverInformation.propTypes = {
    name: PropTypes.string.isRequired
}