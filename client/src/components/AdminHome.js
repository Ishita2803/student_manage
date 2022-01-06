import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export class AdminHome extends Component {
    handlePlacement= event=>{
        event.preventDefault()
        this.props.history.push('./placement')
    }
    render() {
        return (
            <div>
                <button className="btn btn-dark" onClick={this.handlePreplace}>Pre-placement</button>
                <button className="btn btn-dark" onClick={this.handlePlacement}>placement</button>
                <button className="btn btn-dark" onClick={this.handleHigher}>Higher Studies</button>
            </div>
        )
    }
}

export default withRouter(AdminHome)
