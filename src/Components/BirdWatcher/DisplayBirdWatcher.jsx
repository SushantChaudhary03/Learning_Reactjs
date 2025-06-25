import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementBird, addBird } from './Bird'

const DisplayBirdWatcher = () => {
    const [birdName, setBird]= useState('')
    const birds = [...useSelector((state)=> state.birds)].sort((a, b)=> {
         return a.name.toLowerCase() > b.name.toLowerCase()? 1: -1
    })
    // const birds = useSelector((state) => state.birds)
    const dispatch = useDispatch()

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addBird(birdName));
        setBird('');
    }
    return (
        <div className='display-bird-watcher'>
            <h1>Bird List</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>
                        Add Bird
                    </p>
                    <input type="text" value={birdName} onChange={(e)=> setBird(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>

            <ul>
                {birds.map((bird) => (
                    <li key={bird.name}>
                        <h3>{bird.name}</h3>
                        <div>
                            Views: {bird.views}
                            <button type="submit" onClick={()=> dispatch(incrementBird(bird.name))}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayBirdWatcher;