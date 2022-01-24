import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import './Styles/placement.css'
import ReactReadMoreReadLess from "react-read-more-read-less";

export class PlacementUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contents:[]
        }
    }

    componentWillMount(){
        axios.get(`http://localhost:5000/api/placement/view`)
        .then(res=>{
            const contents=res.data
            this.setState({contents})
        })
    } 

    handleDescription=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <div className='container'>
                <h2>Placement Opportunities</h2>
                <p>{this.props.acgpi}</p>
                <div className="row">
                {this.state.contents.filter(content=> content.cgpa <= this.props.acgpi).reverse().map(content=>
                <div key={content._id} className="card card-1">
                        <h3 className='card-title'>{content.company}</h3>
                        {/* <p>{content.companydescription.length>20?content.companydescription.substring(0,20)+"...":content.companydescription} </p> */}
                        {/* <ReadMoreReact text={content.companydescription} /> */}
                        {/* <p>{content.companydescription}</p> */}
                        {/* {content.companydescription.length>20?<ReadMore content={content.companydescription} />:content.companydescription} */}
                        {/* <ReadMore content={content.companydescription} /> */}
                        <ReactReadMoreReadLess charLimit={100} readMoreText={"Read more ▼"} readLessText={"Read less ▲"} readMoreStyle={{color:"grey"}} readLessStyle={{color:"grey"}}>
                            {content.companydescription}
                        </ReactReadMoreReadLess>
                        <table>
                            <tr>
                                <td>Location:</td>
                                <td>{content.location}</td>
                            </tr>
                            <tr>
                                <td>Start date:</td>
                                <td>{content.startdate.toString().substring(0,10)}</td>
                            </tr>
                            <tr>
                                <td>End date:</td>
                                <td> {content.enddate.toString().substring(0,10)}</td>
                            </tr>
                            <tr>
                                <td>Job Description:</td>
                                <td><ReactReadMoreReadLess charLimit={150} readMoreText={"Read more ▼"} readLessText={"Read less ▲"} readMoreStyle={{color:"grey"}} readLessStyle={{color:"grey"}}>
                            {content.jobdescription}
                        </ReactReadMoreReadLess></td>
                            </tr>
                            <tr> 
                                <td>Minimum CGPA:</td>
                                <td>{content.cgpa}</td>
                            </tr>
                            <tr>
                                <td>Branch: </td>
                                <td>{content.branch}</td>
                            </tr>
                            <tr></tr>
                            
                        </table>
                        <br></br>
                        <a href={content.link} className="card__link">Register</a>
                        </div>
                    )}
                    </div>
            </div>
        )
    }
}

export default withRouter(PlacementUser)
