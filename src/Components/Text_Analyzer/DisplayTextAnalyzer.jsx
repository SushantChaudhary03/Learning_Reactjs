import React from 'react'

const DisplayTextAnalyzer = () => {
    return (
        <>
            <div className=
                "wrapper">
                <label htmlFor=
                    "text">
                    <p>Add Your Text Here</p>
                    <textarea id="text" rows="10" cols="100" />
                </label>
            </div>
        </>
    )
}

export default DisplayTextAnalyzer;