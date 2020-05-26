import React , { Component } from 'react'

class Person extends Component {
    render(props){
        return this.props.pl.map(thike => <h2>im {thike}</h2>)
    }
}

export default Person