import React from 'react'
import NavLoginComponent from "./navLoginComponent"
import styled from 'styled-components'

function HomeComponent() {



    return(
        <MainContainer>
        <NavLoginComponent />
        </MainContainer>
    )
}


export default HomeComponent;


const MainContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
background: #f2f2f2;
`;