import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export class Placement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            company:'',
            companydescription:'',
            location:'',
            startdate:'',
            enddate:'',
            jobdescription:'',
            cgpa:'',
            branch:'',
            link:''
        }
    }
    handleOnClick=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit= event=> {
        event.preventDefault();
        const user={
            company:this.state.company,
            companydescription:this.state.companydescription,
            location:this.state.location,
            startdate:this.state.startdate,
            enddate:this.state.enddate,
            jobdescription:this.state.jobdescription,
            cgpa:this.state.cgpa,
            branch:this.state.branch,
            link: this.state.link
        }
        axios.post(`http://localhost:5000/api/placement/form`,user)
        .then(res=>{
                alert('Registration successful')
            }
            ).catch(err=> alert(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <br/><br/><br/><br/>
                    <label>Company Name : </label>
                    <input type="text" 
                    name="company"
                    value={this.state.company}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>Company Description : </label>
                    <textarea rows="4" cols="50"
                    name="companydescription"
                    value={this.state.companydescription}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>Location : </label>
                    <input type="text" 
                    name="location"
                    value={this.state.location}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>Start Date : </label>
                    <input type="date" 
                    name="startdate"
                    value={this.state.startdate}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>End Date : </label>
                    <input type="date" 
                    name="enddate"
                    value={this.state.enddate}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>Job Description : </label>
                    <textarea rows="4" cols="50"
                    name="jobdescription"
                    value={this.state.jobdescription}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>Cgpa:</label>
                    <input type="number"
                    name="cgpa" 
                    value={this.state.cgpa}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>Branch:</label>
                    <input type="text" 
                    name="branch"
                    value={this.state.branch}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label>Link:</label>
                    <input type="text" 
                    name="link"
                    value={this.state.link}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <button className="btn btn-dark" type="submit">Post</button>
                </div>
            </form>
            </div>
        )
    }
}

export default withRouter(Placement)
