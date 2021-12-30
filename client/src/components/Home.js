import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-dark" >Pre-placement</button>
                <button className="btn btn-dark" >placement</button>
                <button className="btn btn-dark" >Higher Studies</button>
            </div>
        )
    }
}

export default withRouter(Home)
