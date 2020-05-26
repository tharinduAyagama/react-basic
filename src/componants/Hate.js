import React , {Component} from 'react';

class Hate extends Component{
    render(){
        return <h1>i hate {this.props.name} {this.props.howMuch}</h1>
    }
}

export default Hate;