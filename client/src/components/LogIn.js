import React, { useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const LogIn = props => {
    axios.defaults.withCredentials = true;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        };
        axios.post("http://localhost:8000/api/users/login", user)
            .then(res => {
                console.log("login success");
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    const buttonHandler = () => {
        console.log("Logging out");
        axios.get("http://localhost:8000/api/users/logout")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>E-mail:</label>
                <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                <br/>
                <label>Password</label>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                <br/>
                <input type="submit" value="Log In"/>
            </form>
            <button onClick={buttonHandler}>Log Out</button>
            <br/>
            <Link to="/users">See Users</Link>
        </div>
    )
}

export default LogIn;