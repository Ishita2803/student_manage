import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Backbutton from './Backbutton'

export class AdminPreplace extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sname:'',
            speaker:'',
            platform:'',
            date:'',
            duration:'',
            link:'',
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
        axios.post(`/api/preplacement/form`,user)
        .then(res=>{
                alert('successful Posted')
            }
            ).catch(err=> alert(err))
    }
    handleBack=event=>{
        this.props.history.goBack();
    }
    
    render() {
        return (
            
                <>
                {/* <button onClick={this.handleBack}><i class="fas fa-arrow-left"></i></button> */}
                <Backbutton back={this.props.history}/>
            <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
            </div>

            <center>
            
                <form style={{height: "820px", width: "1000px"}} className='mainform extra' onSubmit={this.handleSubmit}>
                <h3 className="align">New Higher Studies Update</h3>
                <div>
                    <label className='labelStyle'>Session Name </label>
                    <input className='inputStyle' type="text" 
                    name="sname"
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
                    <label className='labelStyle'>Registration Link:</label>
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

export default AdminPreplace
