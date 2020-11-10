import {
    Link
  } from "react-router-dom";

  

  function navLoginComponent() {
    return (
  <nav>
  <ul>
  <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Login">Login</Link>
    </li>
    <li>
      <Link to="/Register">Register</Link>
    </li>
  </ul>
  </nav>
    )
  }
  
  export default navLoginComponent