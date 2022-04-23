import React, { Component } from 'react'
import './Styles/mainpage.css'
import './Styles/login.css'
import logo from './logo.png'
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
        axios.post(`/api/users/login`,user)
        .then(res=>{ 
            localStorage.setItem("isAuthenticated", "true");
            if(Object.values(res.data)[0]=== true){
                const id =Object.values(res.data)[2]
                axios.get(`/api/users/register/${id}`)
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
            <header className='loginhead'>
	            <div className="overlay">     
                <div className='logohead'>
                        {/* <img src={logo} alt="logo" width="90" height="70"/> */}
                        <h1 className='loginh1'>SIES GRADUATE SCHOOL OF TECHNOLOGY</h1>
                    </div>
                        <h5 className='loginh3'>Students can choose their preference accordingly</h5>
                </div>
            </header>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            
            <form onSubmit={this.handleSubmit} style={{height: "400px", width: "500px"}} className='mainform'>
            <h3 className="align">Login Here</h3>

                
                    <label className='labelStyle'>Email ID: </label>
                    <input type="email" 
                    className='inputStyle'
                    value={this.state.email}
                    onChange={this.handleEmail}required />
                
                    <label className='labelStyle'>Password : </label>
                    <input type="password" 
                    className='inputStyle'
                    value={this.state.password}
                    onChange={this.handlePassword} required />
                <br/>
                    <button className="buttonstyle" type="submit">Login</button>
                    <div className="social">
                        <div className='fb'> <a href='/admin'> ADMIN </a> </div>
                        <div className='fb'> <a href="/register">REGISTER</a></div>
                        </div>
                    
                
            </form>
            
            </>
        )
    }
}

export default withRouter(login)