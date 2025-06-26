import React, { useState } from 'react'
import '../../App.css'
import PropTypes from 'prop-types'

const loginUser = (credentials)=>{
        return fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then((data)=> data.json())
    }


const Login = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    // console.log(`username: ${username} password: ${password}`)

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        setToken(token)
        setUsername('')
        setPassword('')
    }

    return (
        <div className='login'>
            <h3>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}