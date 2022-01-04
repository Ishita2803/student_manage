import React, { Component } from 'react'
import './form.css'
import {withRouter} from 'react-router-dom'

export class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password :''
        }
    }
    handleEmail= event =>{
        this.setState({
            email: event.target.value
        })
    }
    handlePassword= event =>{
        this.setState({
            password : event.target.value
        })
    }
    handleSubmit= event =>{
        event.preventDefault()
        if(this.state.email === "admin@gmail.com" && this.state.password === "admin123"){
            this.props.history.push('./admin/home')
        }
        else{
            alert("Invalid credentials")
        }
        
    }
    render() {
        return (
            <><div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div><form onSubmit={this.handleSubmit} style={{ height: "350px", width: "500px" }}>
                    <h3 className="align">Hello Admin</h3>


                    <label>Email ID: </label>
                    <input type="email" 
                    value={this.state.email}
                    onChange={this.handleEmail}required />

                    <label>Password: </label>
                    <input type="password" 
                    value={this.state.password}
                    onChange={this.handlePassword} required/>
                    <br />
                    <button type="submit">Login</button>
                    

                </form>
                </>
            
        )
    }
}

export default withRouter(Admin)
