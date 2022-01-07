import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Checkbox from "./Checkbox";


const items = ["Pre-Placement", "placement", "Higher Studies"];

export class Home extends Component {
    componentWillMount = () => {
        const {state} = this.props.location
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
