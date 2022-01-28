import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

class InterestedHigher extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            iusers:[],
            topic:''
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/api/interested/view`)
        .then(res=>{
            const users=res.data
            this.setState({iusers:res.data})
            
            console.log(users);
        }).catch(err=>console.log(err))
    } 
    handleOnChange=(event)=>{
        this.setState({
            topic:event.target.value
        });
    }

    render() {
        const topics = [...new Map(this.state.iusers.map(item =>
            [item['topic'], item])).values()];
        return(
            <>
            <div style={{color:"white"}} >
                <select onChange={this.handleOnChange} name='topic' value={this.state.topic}>
                <option selected >Select the session</option>
                {topics.map(user=><option key={user._id} >{user.topic}</option>)}
                </select>
            </div>
            <table>
                <tbody style={{color:"white"}}>
                    {this.state.iusers.filter(user => user.topic === this.state.topic).map(user=>
                        <tr key={user._id}>
                            <td>{user.topic}</td>
                            <td>{user.prn}</td>
                            <td>{user.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </>
        )
    }
}

export default withRouter(InterestedHigher);
