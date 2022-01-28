import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

export class HigherEdUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contents:[]
        }
    }

    componentWillMount(){
        axios.get(`http://localhost:5000/api/higherStudies/view`)
        .then(res=>{
            const contents=res.data
            this.setState({contents})
        })
    } 
    handleOnClick=(topicname,event)=>{
        const user={
            topic:topicname,
            name:this.props.name,
            prn:this.props.prn,
        }
        axios.post(`http://localhost:5000/api/interested/higher`,user)
        .then(res=>{
                console.log(res);
            }
            ).catch(err=> alert(err))
    }

    render() {
        return (
            <div className='container'>
                <h2>Higher Education Opportunities</h2>
                <div class="row">
                    {this.state.contents.reverse().map(content=>
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
                                    <td>{content.date}</td>
                                </tr>
                                <tr>
                                    <td>Time : </td>
                                    <td>{content.duration}</td>
                                </tr>
                                <tr>
                                    <td>Link : </td>
                                    <td class="card__link">{content.link}</td>
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

export default withRouter(HigherEdUser)
