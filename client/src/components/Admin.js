import React, { Component } from 'react'
import './form.css'


export class Admin extends Component {
    render() {
        return (
            <><div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div><form style={{ height: "350px", width: "500px" }}>
                    <h3 className="align">Hello Admin</h3>


                    <label>Email ID: </label>
                    <input type="email"
                         />

                    <label>Password: </label>
                    <input type="password"
                        />
                    <br />
                    <button type="submit">Login</button>
                    

                </form>
                </>
            
        )
    }
}

export default Admin
