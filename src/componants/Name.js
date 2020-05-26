import React , { Component } from 'react';
import Age from './Age';

class Name extends Component{

    constructor(props){
        super(props);
        this.state = {
            sentence: 'my name is thrindu'
        }

        this.display = this.display.bind(this);
    }

    display(age){
        alert(this.state.sentence + age);
    }

    render(){
        return(
            <div>
                <Age dis = {this.display} />
            </div>
        )
    }
}

export default Name;