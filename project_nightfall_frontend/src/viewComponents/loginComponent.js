import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { setAuth, storeToken } from "../services/localStorageService"
import NavLoginComponent from './navLoginComponent'




const axios = require('axios');


function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();
        const logObject = {
            username: username,
            password: password
        }
        const resp = await axios.post('https://project-night-fall.herokuapp.com/login', logObject)
        if(resp.data.token !== "wrong username or password"){
            setAuth(true)
            storeToken(resp.data.token)
            history.push('/story')
        } else {
            setAuth(false)
            alert('Wrong username or password')
        }
    }
    return (
        <MainContainer>
            <NavLoginComponent />
        <FormMainContainer onSubmit={handleSubmit}>
            <h1>Login:</h1>
            <FormContainer>
                <FormInput type="text"  name="username" placeholder=" username" autoComplete="off" value={username} required onChange={(e) => setUsername(e.target.value)} />
            </FormContainer>
            <FormContainer>
                <FormInput type="password" name="password" placeholder=" password" autoComplete="off" value={password} required  onChange={(e) => setPassword(e.target.value)} />
            </FormContainer>
            <Button type="submit" value="Submit">Submit</Button>
        </FormMainContainer>
        </MainContainer>
    )
}

export default LoginComponent;

const FormMainContainer = styled.form`
border-radius: 10px;
margin-top: 20vh;
margin-bottom: 29vh;
width: 600px;
display: flex;
flex-direction: column;
align-items: center;

transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
`;

const FormContainer = styled.div`
border-radius: 10px;
width: 80%;
position: relative;
height: 50px;
margin-top: 30px;

transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
&:hover {
    box-shadow: inset 0px -2px 5px rgb(255, 255, 255),
    inset 0px 2px 5px rgba(0, 0, 0, 0.15);
}
`;

const FormInput = styled.input`
border-radius: 10px;
margin-top: 5px;
width: 100%;
height: 30px;
padding-top: 5px;
border: none;
background: #f2f2f2;
outline: none;
font-size: 17px;
`;


const Button = styled.button`
margin-top: 50px;
margin-bottom: 50px;
display: flex;
height: 50px;
outline: none;
width: 100px;
border: none;
border-radius: 10px;
justify-content: center;
align-items: center;
background: #f2f2f2;
transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
cursor: pointer;
&:hover {
box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
&:hover {
box-shadow: inset 0px -2px 5px rgb(255, 255, 255),
  inset 0px 2px 5px rgba(0, 0, 0, 0.15);
}
}
`;


const MainContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
background: #f2f2f2;
margin: 0px;
padding: 0px;

transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
`;
