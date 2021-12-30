import React, { Component } from 'react'
import './form.css'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class login extends Component {
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
    handleSubmit= event=> {
        event.preventDefault()
        const user={
            email:this.state.email,
            password:this.state.password,
        }
        axios.post(`http://localhost:5000/api/users/login`,user)
        .then(res=>{ 
            if(Object.values(res.data)[0]=== true){
                this.props.history.push('./home')
            }
            else{
                alert(Object.values(res.data)[0]);
            }
            
        } ).catch(err=> alert(err))
    }

    render() {
        return (
            <>
            <h2 className="align">Login Page</h2>
            <center>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email ID: </label>
                    <input type="email" 
                    value={this.state.email}
                    onChange={this.handleEmail}required />
                </div>
                <br></br>
                <div>
                    <label>Password : </label>
                    <input type="password" 
                    value={this.state.password}
                    onChange={this.handlePassword} required />
                </div>
                <br></br>
                <div>
                    <button className="btn btn-dark" type="submit">Login</button>
                </div>
                <br></br>
                <br></br>
                <div>
                    <a href="/">Go to Registration Page</a>
                </div>
            </form>
            </center>
            </>
        )
    }
}

export default withRouter(login)