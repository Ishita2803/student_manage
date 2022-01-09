import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import './Styles/placement.css'
import 'react-bootstrap'

export class PlacementUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contents:[]
        }
    }

    componentWillMount(){
        axios.get(`http://localhost:5000/api/placement/view`)
        .then(res=>{
            const contents=res.data
            this.setState({contents})
        })
    } 

    render() {
        return (
            <div class="container">
                <h1>Placement</h1>
                <div class="row">
                {this.state.contents.reverse().map(content=>
                <div key={content._id} class="card card-1">
                        <h3 className='card-title'>{content.company}</h3>
                        <p>{content.companydescription} </p>
                        <p>Location: {content.location} </p>
                        <p>Start date: {content.startdate.toString().substring(0,10)}</p>
                        <p>End date: {content.enddate.toString().substring(0,10)}</p>
                        <p>Job Description: {content.jobdescription}</p>
                        <p>Minimum CGPA: {content.cgpa}</p>
                        <p>Branch: {content.branch}</p>
                        <a href={content.link} class="card__link">Register</a>
                        </div>
                    )}
                    </div>
            </div>
        )
    }
}

export default withRouter(PlacementUser)
