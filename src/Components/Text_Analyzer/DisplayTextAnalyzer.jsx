import React, { useCallback, useReducer, useState } from 'react'
import CharSelector from './CharSelector';

const DisplayTextAnalyzer = () => {
    const [text, setText] = useState('')
    const [showExplanation, toggleExplanation] = useReducer(state=> !state, false)
    const transformer = useCallback(item=> item.toLowerCase(), [])
    return (
        <>
            <div className=
                "wrapper">
                <label htmlFor="text">
                    <p>Add Your Text Here</p>
                    <textarea id="text" value={text} rows="10" cols="100" onChange={(e) => setText(e.target.value)} />
                </label>
                <div>
                    <button onClick={toggleExplanation}>Show Explanation</button>
                </div>
                <div>
                    <CharSelector text={text} showExplanation={showExplanation} transformer={transformer} />
                </div>
            </div>
        </>
    )
}

export default DisplayTextAnalyzer;