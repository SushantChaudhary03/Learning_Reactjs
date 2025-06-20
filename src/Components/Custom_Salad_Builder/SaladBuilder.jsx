import React from 'react'
import SaladItem from './SaladItem';

const ingredients = [
    {
        image: '🍎',
        name: 'apple',
    },
    {
        image: '🥑',
        name: 'avocado',
    },
    {
        image: '🥦',
        name: 'broccoli',
    },
    {
        image: '🥕',
        name: 'carrot',
    },
    {
        image: '🍷',
        name: 'red wine dressing',
    },
    {
        image: '🍚',
        name: 'seasoned rice',
    },
];
const SaladBuilder = () => {
    return (
        <div className='salad-builder'>
            {ingredients.map(ingredients => (
                <SaladItem
                    key={ingredients.name}
                    image={ingredients.image}
                    name={ingredients.name}
                />
            ))}
        </div>
    )
}

export default SaladBuilder