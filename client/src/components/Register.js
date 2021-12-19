import React, { Component } from 'react'
import './form.css'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            email:'',
            password:'',
            password2: '',
        }
        this.inputRef = React.createRef()
    }
    handlename= event =>{
        this.setState({
            name: event.target.value
        })
    }
    handleCpass= event =>{
        this.setState({
            password2: event.target.value
        })
    }
    handlePassword= event =>{
        this.setState({
            password : event.target.value
        })
    }
    
    handleEmail = event =>{
        this.setState({
            email : event.target.value
        })
    }
    
    handleSubmit= (event)=> {
        event.preventDefault()
        const user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2,
        }
        axios.post(`http://localhost:5000/api/users/register`,user)
        .then(res=>{
            if(Object.values(res.data)[0]=== this.state.name) {
                alert('Registration successful')
            }
            else{
                alert(Object.values(res.data)[0]);
            }
            } ).catch(err=> alert(err))
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
        render() {
            const {name,email,password,password2}= this.state
            return (
                <>
                <h2 className="align">Registration Page</h2>
                <center>
                <form onSubmit={this.handleSubmit} > 
                    <div>
                        <label>Name : </label>
                        <input type="text" ref={this.inputRef} 
                        value={name}
                        onChange={this.handlename} required/>
                    </div>
                    <br></br>
                    <div>
                        <label>Email ID : </label>
                        <input type="email" 
                        value={email}
                        onChange={this.handleEmail} required/>
                    </div>
                    <br></br>
                    <div>
                        <label>Password : </label>
                        <input type="password" 
                        value={password}
                        onChange={this.handlePassword} required/>
                    </div>
                    <br></br>
                    <div>
                        <label>Confim password : </label>
                        <input type="password" 
                        value={password2}
                        onChange={this.handleCpass} required/>
                    </div>
                    <br></br>
                    <div>
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <a href="/login">Go to Login Page</a>
                    </div>
                </form>
                </center>
                </>
            )
        }
}

export default withRouter(register)