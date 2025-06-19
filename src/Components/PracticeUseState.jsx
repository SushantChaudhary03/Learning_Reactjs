import React, { useState } from 'react'

const PracticeUSeState = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(previousCount=> previousCount+1)
    }

    const remove = () => {
        if(count>0){
        setCount(previousCount => previousCount - 1)
        }
    }
    return (
        <div>
            <button onClick={remove}>-</button>
            <span>{count}</span>
            <button onClick={add}>+</button>
        </div>
    )
}

export default PracticeUSeState