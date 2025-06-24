import React, { useState, useEffect, useRef } from 'react';
import '../../App.css'
import { getList, setItem } from './list';


const style = {
    margin: '20px 0px'
}

const DisplayData = () => {
    const [list, setList] = useState([]);
    const [itemInput, setItemInput] = useState('')
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(null)
    const mounted = useRef(true)

    useEffect(() => {
        getList().then((items) => {
            if (mounted.current) setList(items)
        })
        return () => {
            mounted.current = false;
        }
    }, [])

    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                if (mounted.current) {
                    setAlert(false)
                }
            }, 1500);
        }
    }, [alert])

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(itemInput)
            .then(() => {
                if (mounted.current) {
                    setItemInput('');
                    setAlert(true)
                }
            })
    }

    useEffect(() => {
        mounted.current = true;
        if (list.length && !alert) return
        getList().then((items) => {
            if (mounted.current) {
                setList(items)
            }
        })
        .catch((err)=>{
            if(mounted.current){
                console.error("Fetch error: ", err)
                setError('Connection refused. Please ensure the API server is running.')
            }
        })
        return () => mounted.current = false;
    }, [alert, list])

    return (
        <div className='grocery'>
            <h1>Grocery List</h1>
             {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <ul>
                {alert && <h2>Submit Successful</h2>}
                {list.map(item => <li key={item.id}>{item.item}</li>)}
            </ul>
            <form>
                <h3 style={style}>Add New Item</h3>
                <label>
                    <input type="text" value={itemInput} onChange={(event) => setItemInput(event.target.value)} />
                </label>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default DisplayData;