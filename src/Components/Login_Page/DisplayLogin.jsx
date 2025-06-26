import React, {useState} from 'react'
import Login from './Login'
import useToken from './UseToken';


const DisplayLogin = () => {
  const {token, setToken} = useToken();

    if(!token){
        return <Login setToken={setToken} />
    }
  return (
    <div>DisplayLogin</div>
  )
}

export default DisplayLogin