import React from 'react'
import NavComponent from "./navComponent"
import styled from 'styled-components'

function HomeComponent() {



    return(
        <MainContainer>
        <NavComponent />
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
`;