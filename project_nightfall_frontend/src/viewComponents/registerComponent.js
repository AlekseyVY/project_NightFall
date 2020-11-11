import React, { useState } from 'react'
import styled from 'styled-components'
import NavLoginComponent from './navLoginComponent'
import { useHistory } from "react-router-dom";
import { setAuth, storeToken } from "../services/localStorageService"

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

    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();
        const regObject = {
            username: username,
            email: email,
            password: password
        }
        const resp = await axios.post('https://project-night-fall.herokuapp.com/register', regObject)
        console.log(resp)
        if(resp.data.token !== "wrong username or password"){
            setAuth(true)
            storeToken(resp.data.token)
            history.push('/story')
        } else {
            setAuth(false)
            alert('Wrong username or password')
        }
    } //fix

        return (
            <div>
                <NavLoginComponent />
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
            </div>
        )
    }

export default RegisterComponent;