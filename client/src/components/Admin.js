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
    handleOnClick=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
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
                    name='email'
                    value={this.state.email}
                    onChange={this.handleOnClick}required />

                    <label>Password: </label>
                    <input type="password" 
                    name='password'
                    value={this.state.password}
                    onChange={this.handleOnClick} required/>
                    <br />
                    <button type="submit">Login</button>
                    

                </form>
                </>
            
        )
    }
}

export default withRouter(Admin)
