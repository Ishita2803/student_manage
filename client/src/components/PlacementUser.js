import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';


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
            <div>
                <h1>Placement</h1>
                {this.state.contents.reverse().map(content=>
                <div key={content._id} style={{color:"white"}}>
                    <h3>{content.company}</h3>
                    <p>{content.companydescription} </p>
                    <p>Location: {content.location} </p>
                    <p>Start date: {content.startdate.toString().substring(0,10)}</p>
                    <p>End date: {content.enddate.toString().substring(0,10)}</p>
                    <p>Job Description: {content.jobdescription}</p>
                    <p>Minimum CGPA: {content.cgpa}</p>
                    <p>Branch: {content.branch}</p>
                    <a href={content.link}>Register</a>
                </div>
                    )}
            </div>
        )
    }
}

export default withRouter(PlacementUser)
