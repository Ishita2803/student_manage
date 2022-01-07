import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Checkbox from "./Checkbox";
import axios from 'axios'


const items = ["preplacement", "placement", "higherstudies"];

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
    
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        for (const checkbox of this.selectedCheckboxes) {
            
        console.log(checkbox, 'is selected.');
        const {state} = this.props.location
        user={
            checkbox:true
        }
        axios.put(`http://localhost:5000/api/users/register/${state}`,user)
        .then(res=>{
            console.log(res.data);
            } ).catch(err=> alert(err))
        }
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
