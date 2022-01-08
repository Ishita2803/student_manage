import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import PlacementUser from './PlacementUser'
import PrePlacementUser from './PrePlacementUser'

export class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }
    componentWillMount = () => {
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
    render() {
        const {users}= this.state
        return (
            <div style={{ color: "white"}}>
                <h4>Hi, {users.name}</h4>
                {users.placement && <PlacementUser/>}
                {users.preplacement && <PrePlacementUser/>}
            </div>
        )
    }
}

export default withRouter(Info)
