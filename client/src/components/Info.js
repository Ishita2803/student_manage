import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export class Info extends Component {
    render() {
        return (
            <div style={{ color: "white"}}>
                <h2>Info Page</h2>
            </div>
        )
    }
}

export default withRouter(Info)
