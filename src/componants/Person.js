import React , { Component } from 'react'

class Person extends Component {
    render(props){
        return this.props.pl.map((thike , hutta) => <h2 key= {hutta}>im {hutta} {thike}</h2>)
    }
}

export default Person