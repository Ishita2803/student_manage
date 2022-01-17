import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Styles/button.css'
import Navbar1 from './Navbar1'

export class AdminHome extends Component {
    handlePlacement= event=>{
        event.preventDefault()
        this.props.history.push('./placement')
    }
    handleHigher= event=>{
        event.preventDefault()
        this.props.history.push('./higherEducation')
    }
    handlePreplace= event=>{
        event.preventDefault()
        this.props.history.push('./preplacement')
    }
    render() {
        return (
            <div>
                <Navbar1 user='Admin'/>
                <br></br>
                <button class="glow-on-hover" type="button" onClick={this.handlePreplace}>Pre-placement</button>
                <button class="glow-on-hover" type="button" onClick={this.handlePlacement}>Placement</button>
                <button class="glow-on-hover" type="button" onClick={this.handleHigher}>Higher Studies</button>
            </div>
        )
    }
}

export default withRouter(AdminHome)
