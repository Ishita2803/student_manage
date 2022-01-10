import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Styles/button.css'

export class AdminHome extends Component {
    handlePlacement= event=>{
        event.preventDefault()
        this.props.history.push('./placement')
    }
    render() {
        return (
            <div>
                <button class="glow-on-hover" type="button" onClick={this.handlePreplace}>Pre-placement</button>
                <button class="glow-on-hover" type="button" onClick={this.handlePlacement}>Placement</button>
                <button class="glow-on-hover" type="button" onClick={this.handleHigher}>Higher Studies</button>
            </div>
        )
    }
}

export default withRouter(AdminHome)
