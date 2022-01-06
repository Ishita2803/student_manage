import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

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

    handleCompany= event =>{
        this.setState({
            company: event.target.value
        })
    }
    handlecompanydescription= event =>{
        this.setState({
            companydescription : event.target.value
        })
    }
    handleLocation= event =>{
        this.setState({
            location : event.target.value
        })
    }
    handlestartdate= event =>{
        this.setState({
            startdate : event.target.value
        })
    }
    handleenddate= event =>{
        this.setState({
            enddate : event.target.value
        })
    }
    handlejobdescription= event =>{
        this.setState({
            jobdescription : event.target.value
        })
    }
    handlecgpa= event =>{
        this.setState({
            cgpa : event.target.value
        })
    }
    handlebranch= event =>{
        this.setState({
            branch : event.target.value
        })
    }
    handlelink= event =>{
        this.setState({
            link : event.target.value
        })
    }
    handleSubmit= event=> {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <br/><br/><br/><br/>
                    <label>Company Name : </label>
                    <input type="text" 
                    value={this.state.company}
                    onChange={this.handleCompany}/>
                </div>
                <div>
                    <label>Company Description : </label>
                    <textarea rows="4" cols="50"
                    value={this.state.companydescription}
                    onChange={this.handlecompanydescription}/>
                </div>
                <div>
                    <label>Location : </label>
                    <input type="text" 
                    value={this.state.location}
                    onChange={this.handleLocation}/>
                </div>
                <div>
                    <label>Start Date : </label>
                    <input type="date" 
                    value={this.state.startdate}
                    onChange={this.handlestartdate}/>
                </div>
                <div>
                    <label>End Date : </label>
                    <input type="date" 
                    value={this.state.enddate}
                    onChange={this.handleenddate}/>
                </div>
                <div>
                    <label>Job Description : </label>
                    <textarea rows="4" cols="50"
                    value={this.state.jobdescription}
                    onChange={this.handlejobdescription}/>
                </div>
                <div>
                    <label>Cgpa:</label>
                    <input type="number" 
                    value={this.state.cgpa}
                    onChange={this.handlecgpa}/>
                </div>
                <div>
                    <label>Branch:</label>
                    <input type="text" 
                    value={this.state.branch}
                    onChange={this.handlebranch}/>
                </div>
                <div>
                    <label>Link:</label>
                    <input type="text" 
                    value={this.state.link}
                    onChange={this.handlelink}/>
                </div>
                <div>
                    <button className="btn btn-dark" type="submit">Login</button>
                </div>
            </form>
            </div>
        )
    }
}

export default withRouter(Placement)
