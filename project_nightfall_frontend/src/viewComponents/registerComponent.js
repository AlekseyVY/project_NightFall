import React from 'react'



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
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    E-mail:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Confirm password:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default RegisterComponent;