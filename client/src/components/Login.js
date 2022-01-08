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
                const id =Object.values(res.data)[2]
                axios.get(`http://localhost:5000/api/users/register/${id}`)
                .then(res1=>{
                    const loguser=res1.data;
                    if(loguser.preplacement || loguser.placement || loguser.higherstudies){
                        this.props.history.push({
                            pathname:"./info",
                            state: id
                        })
                    }
                    else{
                        this.props.history.push({
                            pathname:"./home",
                            state: id
                        })
                    }
                })
            }
            else{
                alert(Object.values(res.data)[0]);
            }
            
        } ).catch(err=> alert(err))
    }

    render() {
        return (
            <>
            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            
            <form onSubmit={this.handleSubmit} style={{height: "400px", width: "500px"}}>
            <h3 className="align">Login Here</h3>

                
                    <label>Email ID: </label>
                    <input type="email" 
                    value={this.state.email}
                    onChange={this.handleEmail}required />
                
                    <label>Password : </label>
                    <input type="password" 
                    value={this.state.password}
                    onChange={this.handlePassword} required />
                <br/>
                    <button type="submit">Login</button>
                    <div class="social">
                        <div className='fb'> <a href='/admin'> ADMIN </a> </div>
                        <div className='fb'> <a href="/">REGISTER</a></div>
                        </div>
                    
                
            </form>
            
            </>
        )
    }
}

export default withRouter(login)