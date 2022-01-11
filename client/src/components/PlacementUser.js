import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import './Styles/placement.css'


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

    handleDescription=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <div className='container'>
                <h2>Placement Opportunities</h2>
                <div class="row">
                {this.state.contents.reverse().map(content=>
                <div key={content._id} class="card card-1">
                        <h3 className='card-title'>{content.company}</h3>
                        {/* <p>{content.companydescription.length>20?content.companydescription.substring(0,20)+"...":content.companydescription} </p> */}
                        {<p>{content.companydescription}</p>}
                        <table>
                            <tr>
                                <td>Location:</td>
                                <td>{content.location}</td>
                            </tr>
                            <tr>
                                <td>Start date:</td>
                                <td>{content.startdate.toString().substring(0,10)}</td>
                            </tr>
                            <tr>
                                <td>End date:</td>
                                <td> {content.enddate.toString().substring(0,10)}</td>
                            </tr>
                            <tr>
                                <td>Job Description:</td>
                                <td>{content.jobdescription}</td>
                            </tr>
                            <tr> 
                                <td>Minimum CGPA:</td>
                                <td>{content.cgpa}</td>
                            </tr>
                            <tr>
                                <td>Branch: </td>
                                <td>{content.branch}</td>
                            </tr>
                            <tr></tr>
                            
                        </table>
                        <br></br>
                        <a href={content.link} class="card__link">Register</a>
                        </div>
                    )}
                    </div>
            </div>
        )
    }
}

export default withRouter(PlacementUser)
