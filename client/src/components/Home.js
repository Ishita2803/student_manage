import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"white"}}>Welcome Students!</h1>
            </div>
        )
    }
}

export default withRouter(Home)
