import React , { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    counting(){
        // this.setState(
        //     {count: this.state.count + 1}
        // ) 
        this.setState(
            prevState => ({
                count: prevState.count + 1
            })
        )
    }

    countingFive(){
        this.counting();
        this.counting();
        this.counting();
        this.counting();
        this.counting();
    }

    render(){
        return(
            <div>
                <div>count - {this.state.count}</div>
                <button onClick = {() => this.counting()} >increase</button>
                <button onClick = {() => this.countingFive()} >increase five</button>
            </div>
        )
    }
}

export default Counter;