import React, { useState, useEffect } from 'react';

const style = {
    div: {
        border: '1px solid black',
        width: '50vw',
        minHeight: '40vh',
        padding: '20px'
    },
    input: {
        width: '14rem',
        fontSize: "1.2rem",
        margin: '15px 2px'
    },
    label: {
        fontSize: '1.2rem'
    }
}
export default function FileNamer() {
    const [name, setName] = useState('');
    const [alert, setAlert] = useState(false);
    const validate = (event) => {
        event.preventDefault();
        if (/[\*@]/.test(name)) {
            setAlert(true)
            return;
        }
        setAlert(false)
    }

    useEffect(() => {
        const handleWindowOnclick = () => setAlert(false);
        if (alert) {
            window.addEventListener('click', handleWindowOnclick)
        }
        return () => window.removeEventListener('click', handleWindowOnclick)
    }, [alert, setAlert])

    return (
        <div style={style.div}>
            <div className="preview">
                <h2>Preview: {name}</h2>
            </div>
            <form action="">
                <label htmlFor="name" style={style.label}>Name:</label>
                <input type="text" value={name} autoComplete='off' style={style.input} onChange={event => setName(event.target.value)} />
                <button type='button' onClick={validate}>Save</button>
                <div className="information-wrapper">
                    <button onClick={(e) => {e.stopPropagation(); setAlert(true)}} type='button' className="information">more information</button>
                    {alert &&
                        <div className='pop-up'>
                            <span role="img" aria-label="allowed">✅</span>Allowed: letters, numbers, hyphen (-), underscore (_)
                            <br />
                            <span role="img" aria-label="not allowed">⛔</span>Not Allowed: * or @

                        </div>}
                </div>
            </form>
        </div>
    )
}