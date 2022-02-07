import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import PlacementUser from './PlacementUser'
import PrePlacementUser from './PrePlacementUser'
import HigherEdUser from './HigherEdUser'
import Navbar1 from './Navbar1'

export class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],
            acgpi:0
        }
    }
    componentWillMount = () => {
        const {state} = this.props.location
        axios.get(`/api/users/register/${state}`)
        .then(res=>{
            const users=res.data;
            console.log(users);
            this.setState({
                users
            })
            let avgcgpi=0
            let i=0
            this.state.users.marks.forEach(mark => {
                if(mark !== null){
                    avgcgpi+= mark
                    i++
                }
            });
            avgcgpi=avgcgpi/i
            this.setState({
                acgpi:avgcgpi
            })
        })
    }
    
    handleSubmit= event=> {
        event.preventDefault()
        this.props.history.push({
            pathname:"./upload",
            state: this.state.users._id
        })
    }


    render() {
        const {users}= this.state
        return (
            <div style={{ color: "white"}} >
                <Navbar1 user={users.name} place={users.placement} higher={users.higherstudies} preplace={users.preplacement}/>
                <br></br>
                {users.placement && <PlacementUser acgpi={this.state.acgpi}/>}
                <br></br>
                {users.preplacement && <PrePlacementUser/>}
                <br></br>
                {users.higherstudies && <HigherEdUser name={users.name} prn={users.prn} />}
                <button onClick={this.handleSubmit}>Upload</button>
            </div>
        )
    }
}

export default withRouter(Info)
