import React, { Component } from 'react'
import './Styles/mainpage.css'
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
                this.props.history.push("./");
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
                <form onSubmit={this.handleSubmit} style={{height: "610px", width: "600px"}} className='mainform'> 
                    <h3 >Registration Page</h3>
                    
                        <label className='labelStyle'>Name : </label>
                        <input type="text" ref={this.inputRef} 
                        className='inputStyle'
                        value={name} 
                        name='name'
                        onChange={this.handleOnChange}
                        placeholder='Name' required />

                        <label className='labelStyle'>PRN : </label>
                        <input type="text" 
                        className='inputStyle'
                        value={prn} 
                        name='prn'
                        onChange={this.handleOnChange}
                        placeholder='prn' required />

                        <div class="float-container">
                            <div class="float-child"><label className='labelStyle'>Year:</label></div>
                      
                                   <div class="float-child"><label className='labelStyle'>Branch:</label></div>
                        </div>

                        <div class="float-container">
                            <div class="float-child">
                                <select className="inputStyle" onChange={this.handleOnChange} name='year' value={year}>
                                    <option selected style={{backgroundColor:"lightslategrey"}}>Enter Year</option>
                                    <option value="SE" style={{backgroundColor:"lightslategrey"}}> SE </option>
                                    <option value="TE" style={{backgroundColor:"lightslategrey"}}> TE </option>
                                    <option value="BE" style={{backgroundColor:"lightslategrey"}}> BE </option>
                                </select>
                                </div>
                            
                        
                            <div class="float-child">
                            <select className="inputStyle" onChange={this.handleOnChange} name='branch' value={branch}>
                                    <option selected style={{backgroundColor:"lightslategrey"}}>Enter Branch</option>
                                    <option value="CE" style={{backgroundColor:"lightslategrey"}}> CE </option>
                                    <option value="IT" style={{backgroundColor:"lightslategrey"}}> IT </option>
                                    <option value="Mech" style={{backgroundColor:"lightslategrey"}}> Mech </option>
                                    <option value="Extc" style={{backgroundColor:"lightslategrey"}}> Extc </option>
                                    <option value="Ppt" style={{backgroundColor:"lightslategrey"}}> Ppt </option>
                                    
                                </select>
                            </div>
                    
                        
                        </div>
                    
                        <label className='labelStyle'>Email ID : </label>
                        <input type="email" 
                        placeholder='Email id'
                        className='inputStyle'
                        value={email}
                        name='email'
                        onChange={this.handleOnChange} required/>
                   
                        <label className='labelStyle'>Password : </label>
                        <input type="password" 
                        placeholder='Password'
                        className='inputStyle'
                        value={password}
                        name='password'
                        onChange={this.handleOnChange} required/>
                    
                        <label className='labelStyle'>Confim password : </label>
                        <input type="password" 
                        placeholder='Confirm password'
                        className='inputStyle'
                        name='password2'
                        value={password2}
                        onChange={this.handleOnChange} required/>
                    
                        <button className="buttonstyle" type="submit">Submit</button>
                        <div class="social">
                        <a href="/"> Already an Account ?  Click here</a>
                        </div>
                        
                    
                    </form>
                </center>
                </>
            )
        }
}

export default withRouter(register)