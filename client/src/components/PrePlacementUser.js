import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

export default class PrePlacementUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contents:[],
        }
    }

    componentWillMount(){
        axios.get(`/api/preplacement/view`)
        .then(res=>{
            const contents=res.data
            this.setState({contents})
        })
    } 
    handleOnClick=(topicname,event)=>{
        const user={
            domain:"Pre-Placement",
            topic:topicname,
            name:this.props.name,
            prn:this.props.prn,
        }
        axios.post(`/api/interested/user`,user)
        .then(res=>{
                console.log(res);
                alert(res.data.message)
            }
            ).catch(err=> alert(err))
    }

    render() {
        var g1 = new Date();
        return (
            <div className='container' id="preplace">
                <h2>Pre-Placement Opportunities</h2>
                <div class="row">
                    {this.state.contents.filter(content=>  g1.getTime() <= new Date(content.date)).reverse().map(content=>
                        <div key={content._id} class="card card-1">
                            <h3 className='card-title'>Topic : {content.sname}</h3>
                            <table>
                                <tr>
                                    <td>Speaker : </td>
                                    <td>{content.speaker}</td>
                                </tr>
                                <tr>
                                    <td>Platform : </td>
                                    <td>{content.platform}</td>
                                </tr>
                                <tr>
                                    <td>When : </td>
                                    <td>{content.date.toString().substring(0,10)}</td>
                                </tr>
                                <tr>
                                    <td>Time : </td>
                                    <td>{content.duration}</td>
                                </tr>
                                <tr>
                                    <td>Registration Link : </td>
                                    <td class="card__link"><a href={content.link}>{content.link}</a></td>
                                </tr>
                            </table>
                            <button onClick={()=>this.handleOnClick(content.sname)} className="buttonstyle3" >Interested</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
