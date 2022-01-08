import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Checkbox from "./Checkbox";
import axios from 'axios'


const items = ["Pre-Placement", "Placement", "Higher Studies"];

export class Home extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
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
        for (const checkbox of this.selectedCheckboxes) {
            
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
        })
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
        return (
        <div>
                <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes()}
                <button className="btn btn-light" type="submit">Save</button>
                </form>
        </div>
        );
    }
    }


export default withRouter(Home)
