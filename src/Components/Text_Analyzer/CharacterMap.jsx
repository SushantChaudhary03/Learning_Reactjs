import React from 'react'
import PropTypes from 'prop-types'

function itemize(text){
    const letters = text.split('')
    .filter(l => l !== ' ')
    .reduce((collection, item)=>{
        const letter = item.lowerCase();
        return{
            ...collection,
            [letter]: (collection[letter] || 0)+1
        }
    }, {})
    return letters
}

const CharacterMap = ({text})=>{
    return(
        <div>
            Character Map: {text}
        </div>
    )
}

export default CharacterMap;
CharacterMap.propTypes = {
    text: PropTypes.string.isRequired
}