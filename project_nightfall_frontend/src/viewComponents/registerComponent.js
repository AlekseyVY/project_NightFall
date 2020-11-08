import React from 'react'
import styled from 'styled-components'



class RegisterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            e_mail: '',
            password: ''

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        alert('submitted' + this.state.value)
    }



    render(){
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

        return (
            <FormContainer>
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>
                    Username:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </div>
                <div>
                <label>
                    E-mail:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </div>
                <div>
                <label>
                    Password:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                </div>
            <div>
            <label>
                    Confirm password:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </div>
                <Button type="submit" value="Submit">Submit</Button>
            </form>
            </FormContainer>
        )
    }
}

export default RegisterComponent;