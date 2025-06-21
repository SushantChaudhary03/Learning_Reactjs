import React, { useContext } from 'react'
import UserContext from './User'

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5px'
}
const Navigation = ()=>{
    const user = useContext(UserContext);
    return(
        <div style={style}>
            Welcome {user.name}
        </div>
    )
}

export default Navigation