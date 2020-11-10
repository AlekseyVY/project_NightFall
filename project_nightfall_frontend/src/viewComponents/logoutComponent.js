import { useHistory } from "react-router-dom";


function Logout() {
    const history = useHistory();

    localStorage.clear()
    history.push('/')
    return(
        <div>1</div>
    )
}


export default Logout