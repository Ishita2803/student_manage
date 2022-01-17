import React, { Component } from 'react'

export class AdminPreplace extends Component {
    render() {
        return (
            <div>
                <>
            <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
            </div>

            <center>
            
                <form style={{height: "820px", width: "1000px"}} className='mainform extra' onSubmit={this.handleSubmit}>
                <h3 className="align">New Pre Placement Update</h3>
                <div>
                    <label className='labelStyle'>Company Name : </label>
                    <input className='inputStyle' type="text" 
                    name="company"
                    />
                </div>
                <div>
                    <label className='labelStyle'>Company Description : </label>
                    <textarea rows="4" cols="50"
                    name="companydescription"
                    className='inputStyle'
                    />
                </div>
                <div>
                    <label className='labelStyle'>Location : </label>
                    <input type="text" 
                    className='inputStyle'
                    name="location"
                   />
                </div>
                <div>
                    <label className='labelStyle'>End Date : </label>
                    <input type="date" 
                    className='inputStyle'
                    name="enddate"
                    />
                </div>
                <div>
                    <label className='labelStyle'>Job Description : </label>
                    <textarea rows="4" cols="50"
                    className='inputStyle'
                    name="jobdescription"
                   />
                </div>
                <div>
                    <label className='labelStyle'>Cgpa:</label>
                    <input type="number"
                    name="cgpa" 
                    className='inputStyle'
                    />
                </div>
                <div>
                    <label className='labelStyle'>Branch:</label>
                    <input type="text" 
                    className='inputStyle'
                    name="branch"
                    />
                </div>
                <div>
                    <label className='labelStyle'>Link:</label>
                    <input type="text" 
                    className='inputStyle'
                    name="link"
                   />
                </div>
                <div>
                    <button className="buttonstyle" type="submit">Post</button>
                </div>
            </form>
            </center>
            </>
            </div>
        )
    }
}

export default AdminPreplace
