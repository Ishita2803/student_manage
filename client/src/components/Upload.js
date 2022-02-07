import React, { Component } from 'react';
import {withRouter,useHistory} from 'react-router-dom'
import axios from 'axios'

export class Upload extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            img: ''
        }
    }
    onFileChange(e) {
        this.setState({ img: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const {state} = this.props.location
        const formData = new FormData()
        formData.append('img', this.state.img)
        console.log(formData);
        axios.put(`http://localhost:5000/api/users/user-profile/${state}`, formData, {
        }).then(res => {
            alert('Successfully Uploaded')
        })
    }

  render() {
    return (
    <div>
         <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    )
  }
}

export default withRouter(Upload);
