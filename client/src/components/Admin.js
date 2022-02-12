import React, { Component } from 'react'
import './Styles/mainpage.css'
import {withRouter} from 'react-router-dom'

export class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password :''
        }
    }
    handleOnClick=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit= event =>{
        event.preventDefault()
        if(this.state.email === "admin@gmail.com" && this.state.password === "admin123"){
            localStorage.setItem("isAdmin", "true");
            console.log(localStorage);
            this.props.history.push('./admin/home')
        }
        else{
            alert("Invalid credentials")
        }
        
    }
    render() {
        return (
            <><div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div><form onSubmit={this.handleSubmit} style={{ height: "350px", width: "500px" }} className='mainform'>
                    <h3 className="align">Hello Admin</h3>
                    <label className='labelStyle'>Email ID: </label>
                    <input className='inputStyle' type="email" 
                    name='email'
                    value={this.state.email}
                    onChange={this.handleOnClick}required />

                    <label className='labelStyle'>Password: </label>
                    <input type="password" 
                    className='inputStyle'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleOnClick} required/>
                    <br />
                    <button className="buttonstyle" type="submit">Login</button>
                </form>
                </>
            
        )
    }
}

export default withRouter(Admin)
