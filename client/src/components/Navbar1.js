import React, { Component } from 'react'
import { Container ,Navbar,NavDropdown,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import './Styles/placement.css'


export class Navbar1 extends Component {
    render() {
        return (
          <Navbar className='nav' bg="light" expand="lg" >
            <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width="50" height="40" />
              Student Portal
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#">{this.props.user}</a>&nbsp;&nbsp;&nbsp;
              </Navbar.Text>
              </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Navbar1
