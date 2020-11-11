import React from 'react'
import NavLoginComponent from "./navLoginComponent"
import styled from 'styled-components'

function HomeComponent() {



    return(
        <MainContainer>
        <NavLoginComponent />
        <PlaceHolder>
            <h1>
               404
            </h1>
        </PlaceHolder>
        </MainContainer>
    )
}


export default HomeComponent;

const PlaceHolder = styled.div`
    margin-top: 40vh;
    font-size: 40px;
`;


const MainContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
background: #f2f2f2;
`;