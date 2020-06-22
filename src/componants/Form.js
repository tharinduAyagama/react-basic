import React , { Component } from 'react'

class Form extends Component{
    constructor(){
        super();
        this.state = {
            Name: '',
            Idea: '',
            pay: 'credit'
        }
    }
    
    nameHandler = (event) =>{
        this.setState({
            Name: event.target.value
        })
    }

    ideaHandler = (event) =>{
        this.setState({
            Idea: event.target.value
        })
    }

    payHandler = (event) =>{
        this.setState({
            pay: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(this.state.Name+ " " + this.state.Idea+ " " + this.state.pay)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit = {this.submitHandler}>
                <div>
                    <label>Name</label>
                    <input type = "text" value = {this.state.Name} onChange = {this.nameHandler}></input>
                </div>
                <div>
                    <label>Idea</label>
                    <textarea value = {this.state.Idea} onChange = {this.ideaHandler}></textarea>
                </div>
                <div>
                    <label>pay method</label>
                    <select value = {this.state.pay} onChange = {this.payHandler}>
                        <option value = "credit">credit</option>
                        <option value = "debit">debit</option>
                        <option value = "cash">cash</option>
                    </select>
                </div>
                <button type = "submit">submit</button>
            </form>
        )
    }
}
export default Form;