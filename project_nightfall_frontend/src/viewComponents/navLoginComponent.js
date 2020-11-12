import {
    Link
  } from "react-router-dom";
  import styled from 'styled-components'
  

  function navLoginComponent() {
    return (
      <NavContainer>
            <StyledLink to="/"><Button>Home</Button></StyledLink>
            <StyledLink to="/Login"><Button>Login</Button></StyledLink>
            <StyledLink to="/Register"><Button>Sign in</Button></StyledLink>

      </NavContainer>
    )
  }
  
  export default navLoginComponent

  const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


  const NavContainer = styled.div`
border-radius: 10px;
  width: 80%;
  height: 100px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
  background: #f2f2f2;
  text-decoration: none;
`;


const Button = styled.button`
margin: 10px;
display: flex;
height: 50px;
width: 100px;
border: none;
outline: none;
border-radius: 10px;
justify-content: center;
align-items: center;
text-decoration: none;
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