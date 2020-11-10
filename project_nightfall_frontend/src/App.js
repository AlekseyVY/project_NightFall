import RegisterComponent from './viewComponents/registerComponent'
import LoginComponent from './viewComponents/loginComponent'
import HomeComponent from './viewComponents/homeComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReaderComponent from './viewComponents/readerComponent';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <HomeComponent />
          </Route>
          <Route path="/Login">
            <LoginComponent />
          </Route>
          <Route path="/Register">
            <RegisterComponent />
          </Route>
          <Route path="/story">
            <ReaderComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
