import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import './Styles/mainpage.css'


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
        axios.post(`/api/placement/form`,user)
        .then(res=>{
                alert('successful Posted')
            }
            ).catch(err=> alert(err))
    }

    render() {
        return (
            <>
            <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
            </div>

            <center>
            
                <form style={{height: "820px", width: "1000px"}} className='mainform extra' onSubmit={this.handleSubmit}>
                <h3 className="align">New placement Update</h3>
                <div>
                    <label className='labelStyle'>Company Name : </label>
                    <input className='inputStyle' type="text" 
                    name="company"
                    value={this.state.company}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Company Description : </label>
                    <textarea rows="4" cols="50"
                    name="companydescription"
                    className='inputStyle'
                    value={this.state.companydescription}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Location : </label>
                    <input type="text" 
                    className='inputStyle'
                    name="location"
                    value={this.state.location}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Start Date : </label>
                    <input type="date" 
                    name="startdate"
                    className='inputStyle'
                    value={this.state.startdate}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>End Date : </label>
                    <input type="date" 
                    className='inputStyle'
                    name="enddate"
                    value={this.state.enddate}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Job Description : </label>
                    <textarea rows="4" cols="50"
                    className='inputStyle'
                    name="jobdescription"
                    value={this.state.jobdescription}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Cgpa:</label>
                    <input type="number"
                    name="cgpa" 
                    className='inputStyle'
                    value={this.state.cgpa}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Branch:</label>
                    <input type="text" 
                    className='inputStyle'
                    name="branch"
                    value={this.state.branch}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Link:</label>
                    <input type="text" 
                    className='inputStyle'
                    name="link"
                    value={this.state.link}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <button className="buttonstyle" type="submit">Post</button>
                </div>
            </form>
            </center>
            </>
        )
        
    }
    
}

export default withRouter(Placement)
