import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export class AdminHigherEd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sname:'',
            speaker:'',
            platform:'',
            date:'',
            duration:'',
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
            sname:this.state.sname,
            speaker:this.state.speaker,
            platform:this.state.platform,
            date:this.state.date,
            duration:this.state.duration,
            link:this.state.link,
        }
        axios.post(`http://localhost:5000/api/higherStudies/form`,user)
        .then(res=>{
                alert('successful Posted')
            }
            ).catch(err=> alert(err))
    }
    
    render() {
        return (
            
                <>
            <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
            </div>

            <center>
            
                <form style={{height: "820px", width: "1000px"}} className='mainform extra' onSubmit={this.handleSubmit}>
                <h3 className="align">New Higher Studies Update</h3>
                <div>
                    <label className='labelStyle'>Session Name </label>
                    <input className='inputStyle' type="text" 
                    name="sname"
                    className='inputStyle'
                    value={this.state.sname}
                    onChange={this.handleOnClick}
                    />
                </div>
                <div>
                    <label className='labelStyle'>Session arranged by:</label>
                    <textarea rows="4" cols="50"
                    name="speaker"
                    className='inputStyle'
                    value={this.state.speaker}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Through : </label>
                    <input type="text" 
                    className='inputStyle'
                    name="platform"
                    value={this.state.platform}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Date : </label>
                    <input type="date" 
                    className='inputStyle'
                    name="date"
                    value={this.state.date}
                    onChange={this.handleOnClick}/>
                </div>
                <div>
                    <label className='labelStyle'>Duration : </label>
                    <input type="time" 
                    name="duration"
                    className='inputStyle'
                    value={this.state.duration}
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

export default withRouter(AdminHigherEd)
