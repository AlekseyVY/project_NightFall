import React, { useState } from 'react'
import styled from 'styled-components'
require('dotenv').config()
const axios = require('axios');




const FormContainer = styled.div`
display: flex;
justify-content: center;
align-self: center;
width: 50%;
border: 1px solid black;
&:hover {
    box-shadow: 10px 10px 10px;
}
`;

const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

function RegisterComponent() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(event){
        event.preventDefault();
        const regObject = {
            username: username,
            email: email,
            password: password
        }
        console.log(process.env.REGISTER_API_URL)
        axios.post('https://project-night-fall.herokuapp.com/register', regObject)
        .then(response => {
            console.log(response)
        })
    }

        return (
            <FormContainer onSubmit={handleSubmit}>
            <form >
                <div>
                <label>
                    Username:
                    <input type="text" name="username" value={username}  onChange={(e) => setUsername(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    E-mail:
                    <input type="text" name="e_mail" value={email}  onChange={(e) => setEmail(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} />
                </label>
                </div>
                <Button type="submit" value="Submit">Submit</Button>
            </form>
            </FormContainer>
        )
    }

export default RegisterComponent;