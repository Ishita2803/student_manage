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
    handleOnChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
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
                alert('Registration successful');
                this.props.history.push("./login");
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
                <form onSubmit={this.handleSubmit} style={{height: "610px", width: "600px"}}> 
                    <h3>Registration Page</h3>
                    
                        <label>Name : </label>
                        <input type="text" ref={this.inputRef} 
                        value={name} 
                        name='name'
                        onChange={this.handleOnChange}
                        placeholder='Name' required />

                        <label>PRN : </label>
                        <input type="text" 
                        value={prn} 
                        name='prn'
                        onChange={this.handleOnChange}
                        placeholder='prn' required />

                        <div class="float-container">
                            <div class="float-child"><label>Year:</label></div>
                      
                                   <div class="float-child"><label>Branch:</label></div>
                        </div>

                        <div class="float-container">
                            <div class="float-child">
                                {/* <select class="form-select">
                                <option selected> Enter year </option>
                                    <option value=''> TE </option>
                                    <option value=''> BE </option>
                                </select> */}
                                <input type="text" 
                                    value={year} 
                                    name='year'
                                    onChange={this.handleOnChange}
                                    placeholder='Year' required />
                                </div>
                            
                        
                            <div class="float-child"><input type="text" 
                                value={branch} 
                                name='branch'
                                onChange={this.handleOnChange}
                                placeholder='Branch' required style={{marginBottom:""}}/>
                            </div>
                     
                        
                        </div>
                    
                        <label>Email ID : </label>
                        <input type="email" 
                        placeholder='Email id'
                        value={email}
                        name='email'
                        onChange={this.handleOnChange} required/>
                   
                        <label>Password : </label>
                        <input type="password" 
                        placeholder='Password'
                        value={password}
                        name='password'
                        onChange={this.handleOnChange} required/>
                    
                        <label>Confim password : </label>
                        <input type="password" 
                        placeholder='Confirm password'
                        name='password2'
                        value={password2}
                        onChange={this.handleOnChange} required/>
                    
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