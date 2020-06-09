import React from 'react';
import { Link } from '@reach/router';

const SignUp = props => {

    return(
        <div>
            <Link to="login">Log In</Link>
            <form>
                <label>First Name:</label>
                <input type="text"></input>
            </form>
        </div>

    )
}

export default SignUp;