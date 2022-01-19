import React, { Component } from 'react'
import axios from 'axios'

export class Cgpi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            semester:this.props.sem,
            marks:0,
        }
    }
    
    async componentDidUpdate(){
        console.log(this.state.semester, this.state.marks);
    }

    handleOnChange=async(event)=>{
        this.setState({
            marks:event.target.value
        })
    }

    render() {
        return (
            <div>
                <label>sem {this.props.sem + 1} </label>
                <input value={this.state.marks} onChange={this.handleOnChange} type="number" style={{"color": "black"}} />
            </div>
        )
    }
}

export default Cgpi
