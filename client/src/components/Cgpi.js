import React, { Component } from 'react'
import axios from 'axios'

export class Cgpi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            marks:0,
        }
    }
    
    async componentDidUpdate(){
        if(this.state.marks)
        {const user={
            marks:this.state.marks
        }
        await axios.put(`/api/users/marks/${this.props.id}/${this.props.sem}`,user)
        .then(res=>{
            console.log(res.data);
            } ).catch(err=> alert(err))}
        }
    

    handleOnChange=async(event)=>{
        this.setState({
            marks:event.target.value
        })
    }

    render() {
        return (
            <div>
                <label className='labelStyle'>sem {this.props.sem + 1} </label>
                <input className='inputStyle' value={this.state.marks} onChange={this.handleOnChange} type="number" style={{"color": "white"}} required="true" />
            </div>
        )
    }
}

export default Cgpi
