import React , { Component } from 'react';

class Like extends Component{

    constructor(){
        super();
        this.state = {
            message: 'welcome'
        }
    }

    liked(){
        this.setState(
            {
                message: 'ilked'
            }
        )
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.liked()}>like</button>
            </div>
        )
    }
}

export default Like;