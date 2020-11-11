import React, { useState } from 'react'
import styled from 'styled-components'
import NavLoginComponent from './navLoginComponent'

const axios = require('axios');




const FormContainer = styled.div`
display: flex;
justify-content: center;
align-self: center;
width: 50%;
border: 1px solid black;
&:hover {
    box-shadow: 10px 10px 10px;
}
`;

const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

function RegisterComponent() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [description, setDescription] = useState('')


    async function handleSubmit(event){
        event.preventDefault();
        const storyObject = {
            title: title,
            author: author,
            description: description,
            body: body
        }

        const resp = await axios.post('https://project-night-fall.herokuapp.com/createStory', storyObject)
        console.log(resp)
    }

        return (
            <div>
                <NavLoginComponent />
            <FormContainer onSubmit={handleSubmit}>
            <form >
                <div>
                <label>
                    title:
                    <input type="text" name="title" value={title}  onChange={(e) => setTitle(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                   author:
                    <input type="text" name="author" value={author}  onChange={(e) => setAuthor(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                   description:
                    <input type="text" name="description" value={description}  onChange={(e) => setDescription(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    body:
                    <textarea type="password" name="body" value={body}  onChange={(e) => setBody(e.target.value)} />
                </label>
                </div>
                <Button type="submit" value="Submit">Submit</Button>
            </form>
            </FormContainer>
            </div>
        )
    }

export default RegisterComponent;