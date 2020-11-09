import React from 'react'



class HomeComponent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            test: props
        }
    }


    render(){
        return(
            <div><h1>THIS IS HOME PAGE</h1></div>
        )
    }
}


export default HomeComponent;