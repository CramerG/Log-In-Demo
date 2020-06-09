import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = props => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/users", {withCredentials: true})
            .then(res => {setUsers(res.data)})
            .catch(err => console.log(err));
    }, [users]);

    return(
        <div>
            {users.map( (user, idx) => {
                return(
                    <p key={idx}>{user.firstName} {user.lastName}</p>
                )
            })}
        </div>
    )
}

export default UserList;