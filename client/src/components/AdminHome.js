import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export class AdminHome extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"white"}}>Welcome Admin</h1>
            </div>
        )
    }
}

export default withRouter(AdminHome)
