import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Cgpi from './Cgpi'

class Marks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sem:null,
            cgpi:[],
        }
    }
    
    handleSem= event =>{
        this.setState({
            sem: event.target.value
        })
    }
    handleSubmit= event =>{
        event.preventDefault()
        var x=[]
        for (var i = 0; i < this.state.sem - 1; i++) 
        {
            x.push(i)
        }
        this.setState({
            cgpi:x
        })
    }

    handleOnChange = (event, cgi)=>{
    }

    render() {
        console.log();
        return (
            <div >
                <label className='labelStyle' >Currently studying in sem : </label>
                <div className='checkbox'>
                <input type="number" style={{"margin": "10px 10px 20px 0px", "color": "white"}}
                value={this.state.sem}
                className='inputStyle'
                onChange={this.handleSem} required="true" />
                <button onClick= {this.handleSubmit} style={{"color": "black"}} className="buttonstyle1" >Submit</button>
                </div>
                {this.state.cgpi.length === 0 ? <div></div> : 
                this.state.cgpi.map((cgi)=><Cgpi key={cgi} sem={cgi} id={this.props.id}/>)
                }
            </div>
        )
    }
}

export default withRouter(Marks)
