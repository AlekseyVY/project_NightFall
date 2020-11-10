import {
  Link
} from "react-router-dom";



function navComponent() {
  return (
    <nav>
      <ul>
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

export default navComponent