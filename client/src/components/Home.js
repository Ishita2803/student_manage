import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Checkbox from "./Checkbox";
import axios from 'axios'
import Navbar1 from './Navbar1'
import Marks from './Marks';

const items = ["Pre-Placement", "Placement", "Higher Studies"];

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }
    
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
            const {state} = this.props.location
        axios.get(`http://localhost:5000/api/users/register/${state}`)
        .then(res=>{
            const users=res.data;
            console.log(users);
            this.setState({
                users
            })
        })
    }
    
    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
        this.selectedCheckboxes.delete(label);
        } else {
        this.selectedCheckboxes.add(label);
        }
    }
    
    handleFormSubmit = async(formSubmitEvent) => {
        formSubmitEvent.preventDefault();
        const {state} = this.props.location
        if(this.selectedCheckboxes.size ===0){
            alert("Please select a field to proceed")
        }else
        {for (const checkbox of this.selectedCheckboxes) {
        console.log(checkbox, 'is selected.');
        let user
        if(checkbox==='Pre-Placement'){
            user={
            preplacement:true,
        }
        }
        else if(checkbox==='Placement'){
            user={
                placement:true
            }
        }
        else if(checkbox==='Higher Studies'){
            user={
                higherstudies:true
            }
        }
        await axios.put(`http://localhost:5000/api/users/${checkbox.toLowerCase().replace(/[^A-Z0-9]/ig, "")}/${state}`,user)
        .then(res=>{
            console.log(res.data);
            } ).catch(err=> alert(err))
        }
        this.props.history.push({
            pathname:"./info",
            state: state
        })}
    }
    
    createCheckbox = label => (
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
    )
    
    createCheckboxes = () => (
        items.map(this.createCheckbox)
    )
    
    render() {
        const {users}= this.state;
        return (
            <div>
            <Navbar1 user={users.name}/>
                <div className="mainform1">
                    <center>
                    <form onSubmit={this.handleFormSubmit} >
                    {this.createCheckboxes()}
                        <Marks id={this.props.location.state}/>
                        <button className="buttonstyle" type="submit">Save</button>
                    </form>
                    </center>
                </div>
            </div>
        );
    }
    }


export default withRouter(Home)
