import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { DownloadTableExcel } from "react-export-table-to-excel";
import './Styles/table.css'

class InterestedHigher extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            iusers:[],
            topic:'',
            domain:'',
            branch:'',
            year:''
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
            [event.target.name]:event.target.value
        });
    }

    render() {
        const higheruser = this.state.iusers.filter(user => user.domain === this.state.domain)
        const topics = [...new Map(higheruser.map(item =>
            [item['topic'], item])).values()];
        let srn=0
        const current = new Date();
        const filename = `${this.state.topic}/Interested/${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
        return(
            <>
            <div className='tablediv'>
            <div style={{color:"white" , marginBottom:"10px"} } >
                <h6>Domain :  
                    <select onChange={this.handleOnChange} name='domain' value={this.state.domain}>
                    <option selected>Select the session</option>
                    <option value="Higher Education">Higher Education</option>
                    <option value="Pre-Placement">Pre-Placement</option>
                    </select>
                </h6>
                <h6>Students interested in :  
                <select onChange={this.handleOnChange} name='topic' value={this.state.topic}>
                <option selected>Select the session</option>
                {topics.map(user=><option key={user._id} >{user.topic}</option>)}
                </select>
                </h6>
                <h6>Branch :  
                    <select onChange={this.handleOnChange} name='branch' value={this.state.branch}>
                    <option selected>Select a branch</option>
                    <option value="CE">CE</option>
                    <option value="IT">IT</option>
                    <option value="Extc">Extc</option>
                    <option value="Mech">Mech</option>
                    <option value="Ppt">Ppt</option>
                    </select>
                </h6>

                <h6>Year :  
                    <select onChange={this.handleOnChange} name='year' value={this.state.year}>
                    <option selected>Select a branch</option>
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
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
                        {higheruser.filter(user => user.topic === this.state.topic && user.branch === this.state.branch && user.year === this.state.year).map(user=>
                            <tr key={user._id}>
                                <td className='tdi'>{++srn}</td>
                                <td className='tdi'>{user.prn}</td>
                                <td className='tdi'>{user.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            
            <DownloadTableExcel
                className="buttonstyle3"
                table="table-to-xls"
                filename={filename}
                sheet="sheet 1"
            >
            </DownloadTableExcel>
            </div>
            </>
        )
    }
}

export default withRouter(InterestedHigher);
