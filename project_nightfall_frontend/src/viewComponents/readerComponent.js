import React from 'react'
import { getToken, getAuth } from "../services/localStorageService"
const axios = require('axios');


function ReaderComponent() {
    if(getAuth()) {

        const token = getToken()
        console.log(token)
        axios.get('https://project-night-fall.herokuapp.com/random_story', { headers: {"Authorization": `Bearer ${token}`} })
        .then(res => {
            console.log(res.data.username.length)
        })
        return (
        <div><h1>{getToken()}</h1></div>
        )
    } else {
        return (
            <div><h1>Please Authorize for services.</h1></div>
        )
    }

}


export default ReaderComponent;