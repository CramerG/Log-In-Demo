import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const SignUp = props => {
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: fName,
            lastName: lName,
            email: email,
            password: password,
            confirmPassword: confPassword
        }
        axios.post("http://localhost:8000/api/users", newUser)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    return(
        <div>
            <Link to="login">Log In</Link>
            <Link to="users">See Users</Link>
            <form onSubmit={onSubmitHandler}>
                <label>First Name:</label>
                <input type="text" onChange={(e) => {setFName(e.target.value)}}></input>
                <br/>
                <label>Last Name:</label>
                <input type="text" onChange={(e) => {setLName(e.target.value)}}/>
                <br/>
                <label>E-Mail:</label>
                <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                <br/>
                <label>Password:</label>
                <input type="text" onChange={(e) => {setPassword(e.target.value)}}/>
                <br/>
                <label>Confirm Password:</label>
                <input type="text" onChange={(e) => {setConfPassword(e.target.value)}}/>
                <br/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>

    )
}

export default SignUp;