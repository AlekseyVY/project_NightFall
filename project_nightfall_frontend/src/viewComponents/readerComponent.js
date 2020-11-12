import React, { useState } from 'react'
import { getToken, getAuth } from "../services/localStorageService"
import { setStory, getStory } from '../services/localStorageService'
import NavLogoutComponent from './navLogoutComponent'
import NavLoginComponent from './navLoginComponent'
import styled from 'styled-components'


const axios = require('axios');



function ReaderComponent() {
    const [state, setState] = useState({})
    if(getAuth()) {
        const token = getToken()
         axios.get('https://project-night-fall.herokuapp.com/random_story', { headers: {"Authorization": `Bearer ${token}`} })
         .then(res => {
            setStory(res)
         })


         function getStoryHandler(event) {
             event.preventDefault()
             setState(getStory())
         }

        return (
            <MainContainer>
                <NavLogoutComponent />
                <div>
                    <h1>
                        {state.title}
                    </h1>
                </div>
                <div>
                    <h4>
                        {state.author}
                    </h4>
                </div>
                <StoryContainer>
                    <MainText>
                        {state.body}
                    </MainText>
                </StoryContainer>
                <Button type="submit" value="Submit" onClick={getStoryHandler}>Get Story</Button>
            </MainContainer>
        )
    } else {
        return (
            <div>
                <NavLoginComponent />
            <div>
                <h1>Please Authorize for services.</h1>
            </div>
            </div>
        )
    }
}


export default ReaderComponent;

const MainText = styled.p`
font-family: 'Xanh Mono', monospace;
    word-spacing: 5px;
    line-height: 30px;
    font-size: 20px;
`;

const Button = styled.button`
margin: 10px;
display: flex;
outline: none;
height: 50px;
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

const StoryContainer = styled.div`
    width: 1000px;
`;

const MainContainer = styled.div`
font-family: 'Merriweather', serif;
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
background: #f2f2f2;
`;