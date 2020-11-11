import React, { useState } from 'react'
import styled from 'styled-components'
import NavLoginComponent from './navLoginComponent'
import { useHistory } from "react-router-dom";
import { setAuth, storeToken } from "../services/localStorageService"

const axios = require('axios');






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
        if(resp.data.token.name !== "SequelizeUniqueConstraintError"){
            setAuth(true)
            storeToken(resp.data.token)
            history.push('/story')
        } else {
            setAuth(false)
            alert('UserName or Email already used to Rgister.')
        }
    } //fix

        return (
            <MainContainer>
                <NavLoginComponent />
            <FormContainer onSubmit={handleSubmit}>
            <form>
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
            </MainContainer>
        )
    }

export default RegisterComponent;

const FormContainer = styled.div`
display: flex;
justify-content: center;
align-self: center;
width: 50%;
background: #f2f2f2;
transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
box-shadow: 0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
&:hover {
    box-shadow: inset 0px -2px 5px rgb(255, 255, 255),
      inset 0px 2px 5px rgba(0, 0, 0, 0.15);
}
`;

const Button = styled.button`
margin: 10px;
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
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
background: #f2f2f2;
`;