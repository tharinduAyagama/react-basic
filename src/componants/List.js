import React ,  {Component } from 'react'
import Person from './Person'

class List extends Component {
    render(){
        const persons = ['tharin' , 'bandar' , 'hirantha' , 'ayagama']
        
        return (
            <div>
                <Person pl = {persons} />
            </div>
        )
    }
}

export default List