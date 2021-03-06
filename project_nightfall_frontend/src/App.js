import RegisterComponent from './viewComponents/registerComponent'
import LoginComponent from './viewComponents/loginComponent'
import HomeComponent from './viewComponents/homeComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ReaderComponent from './viewComponents/readerComponent';
import LogoutComponent from './viewComponents/logoutComponent'
import CreateStoryComponent from './viewComponents/addStoryComponent'
import styled from 'styled-components'

function App() {
  return (
    <MainContainer>
    <Router>
        <Switch>
          <Route path="/Login">
            <LoginComponent />
          </Route>
          <Route path="/Register">
            <RegisterComponent />
          </Route>
          <Route path="/story">
            <ReaderComponent />
          </Route>
          <Route path="/logout">
            <LogoutComponent />
          </Route>
          <Route path="/createStory">
            <CreateStoryComponent />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
    </Router>
    </MainContainer>
  );
}

export default App;



const MainContainer = styled.div`
background-color: #f2f2f2;
height: 100vh;
overflow: scroll;
display: flex;
justify-content: center;
`;