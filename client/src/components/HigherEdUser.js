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
    render() {
        return (
            <div>
                <h2>Higher Education Opportunities</h2>
                {this.state.contents.reverse().map(content=>
                <div key={content._id}>
                    <p>Topic : {content.sname}</p>
                    <p>Topic : {content.speaker}</p>
                    <p>Topic : {content.platform}</p>
                    <p>Topic : {content.date}</p>
                    <p>Topic : {content.duration}</p>
                    <p>Topic : {content.duration}</p>
                    <p>Topic : {content.link}</p>
                </div>

                )}
            </div>
        )
    }
}

export default withRouter(HigherEdUser)
