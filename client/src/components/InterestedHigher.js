import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import ReactToExcel from 'react-html-table-to-excel'
import './Styles/table.css'

class InterestedHigher extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            iusers:[],
            topic:''
        }
    }

    componentDidMount(){
        axios.get(`/api/interested/view`)
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
        let srn=0
        const current = new Date();
        const filename = `${this.state.topic}/Interested/${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
        return(
            <>
            <div className='tablediv'>
            <div style={{color:"white" , marginBottom:"10px"} } >
                <h6>Students interested in :  
                <select onChange={this.handleOnChange} name='topic' value={this.state.topic}>
                <option selected>Select the session</option>
                {topics.map(user=><option key={user._id} >{user.topic}</option>)}
                </select>
                </h6>
            </div>
            
                <table id="table-to-xls" className='tablebox'>
                        <thead style={{color:"white"}}>
                            <tr>
                                <th className='thi'>Sr. No</th>
                                <th className='thi'>Prn No.</th>
                                <th className='thi'>Name</th>
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                        {this.state.iusers.filter(user => user.topic === this.state.topic).map(user=>
                            <tr key={user._id}>
                                <td className='tdi'>{++srn}</td>
                                <td className='tdi'>{user.prn}</td>
                                <td className='tdi'>{user.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            
            <ReactToExcel
                className="buttonstyle3"
                table="table-to-xls"
                filename={filename}
                sheet="sheet 1"
                buttonText="Download(.xls)"
            />
            </div>
            </>
        )
    }
}

export default withRouter(InterestedHigher);
