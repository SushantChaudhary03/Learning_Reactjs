import React, { useContext, useReducer } from 'react'
import PropTypes from 'prop-types';
import UserContext from './User';
import { SaladContext } from './SaladMaker';

const reducer = key=> key+1;
const SaladItem = ({ image, name }) => {
    const user = useContext(UserContext);
    const favorite = user.favorites.includes(name);
    const {setSalad} = useContext(SaladContext);
    const [id, updatedId] = useReducer(reducer, 0);
    function update(){
        setSalad({
            name,
            id: `${name}-${id}`
        })
    updatedId();
    }
    return (
        <div className='salad-items'>
            <h4>{name}</h4>
            <span>
                {favorite ? '😊' : ''}
            </span>
            <button onClick={update}>
                <span>{image}</span>
            </button>
        </div>
    )
}

export default SaladItem

SaladItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}