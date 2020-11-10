import React, { useState } from 'react'
import { getToken, getAuth } from "../services/localStorageService"
import { setStory, getStory } from '../services/localStorageService'
const axios = require('axios');



function ReaderComponent() {
    const [state, setState] = useState({})
    if(getAuth()) {
        const token = getToken()
         axios.get('https://project-night-fall.herokuapp.com/random_story', { headers: {"Authorization": `Bearer ${token}`} })
         .then(res => {
            setStory(res)
         })

         function getStoryHandler(event) {
             event.preventDefault()
             setState(getStory())
         }

         console.log(state)
        return (
            <div>
                <div>
                    <h1>
                        {state.title}
                    </h1>
                </div>
                <div>
                    <h4>
                        {state.author}
                    </h4>
                </div>
                <div>
                    <p>
                        {state.body}
                    </p>
                </div>
                <button type="submit" value="Submit" onClick={getStoryHandler}>Read Story</button>
            </div>
        )
    } else {
        return (
            <div><h1>Please Authorize for services.</h1></div>
        )
    }
}


export default ReaderComponent;