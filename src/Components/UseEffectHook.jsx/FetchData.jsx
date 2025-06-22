import React, { useState, useEffect } from "react";

const style = {
    box: {
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50vw',
        margin: '20px 0px',
        padding: '10px'
    },

    th: {
        border: '1px solid black',
        textAlign: 'center',
        padding: '5px'
    }
}
const FetchData = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.log(err)
            }
        }
        FetchData();
    }, [])
    console.log(users)
    return (
        <div style={style.box}>
                   <table>
                    <thead>
                    <tr style={style.th}>
                        <th style={style.th}>Name</th>
                        <th style={style.th}>Username</th>
                        <th style={style.th}>Email</th>
                        <th style={style.th}>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=> (
                            <tr key={user.id}>
                                <td style={style.th}>{user.name}</td>
                                <td style={style.th}>{user.username}</td>
                                <td style={style.th}>{user.email}</td>
                                <td style={style.th}>{user.address.city}, {user.address.street}</td>
                            </tr>
                        ))}
                    </tbody>
                   </table>
        </div>
    )
}

export default FetchData