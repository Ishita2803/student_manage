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
            prn:'',
            branch:'',
            year:''
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
    handleYear = event =>{
        this.setState({
            year : event.target.value
        })
    }
    handleBranch = event =>{
        this.setState({
            branch : event.target.value
        })
    }
    handlePRN = event =>{
        this.setState({
            prn : event.target.value
        })
    }
    
    
    
    
    handleSubmit= (event)=> {
        event.preventDefault()
        const user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2,
            prn:this.state.prn,
            branch:this.state.branch,
            year: this.state.year
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
            const {name,email,password,password2,year,prn,branch}= this.state
            return (
                <>
                <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>
                
                
                <center>
                <form onSubmit={this.handleSubmit} style={{height: "690px", width: "600px"}}> 
                    <h3>Registration Page</h3>
                    
                        <label>Name : </label>
                        <input type="text" ref={this.inputRef} 
                        value={name} 
                        onChange={this.handlename}
                        placeholder='Name' required />

                        <label>PRN : </label>
                        <input type="text" 
                        value={prn} 
                        onChange={this.handlePRN}
                        placeholder='prn' required />

                        <span>
                        <label>Year: </label>
                        <input type="text" 
                        value={year} 
                        onChange={this.handleYear}
                        placeholder='Year' required />
                        </span>

                        <span>
                        <label>Branch: </label>
                        <input type="text" 
                        value={branch} 
                        onChange={this.handleBranch}
                        placeholder='Branch' required />
                        </span>
                    
                        <label>Email ID : </label>
                        <input type="email" 
                        placeholder='Email id'
                        value={email}
                        onChange={this.handleEmail} required/>
                   
                        <label>Password : </label>
                        <input type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={this.handlePassword} required/>
                    
                        <label>Confim password : </label>
                        <input type="password" 
                        placeholder='Confirm password'
                        value={password2}
                        onChange={this.handleCpass} required/>
                    
                        <button type="submit">Submit</button>
                        <div class="social">
                        <a href="/login"> Already an Account ?  Click here</a>
                        </div>
                        
                    
                    </form>
                </center>
                </>
            )
        }
}

export default withRouter(register)