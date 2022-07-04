import React, {Component } from 'react'
import { Container ,Navbar,NavDropdown,Nav} from 'react-bootstrap';
import logo from './logo.png'
import './Styles/placement.css'
import Backbutton from './Backbutton';
import {Link} from 'react-scroll'

function Navbar1(props) {

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* <img src={logo} alt="logo" width="50" height="40" /> */}
            <span className="navbar-brand">Student Portal</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto order-0" style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                <li className="nav-item">{props.place && <Link  to="place" spy={true}  className="nav-link active" aria-current="page" >Placement</Link>}</li>
                <li className="nav-item">{props.preplace && <Link  to="preplace" spy={true} className="nav-link active" aria-current="page" >Pre-Placement</Link>}</li>
                <li className="nav-item">{props.higher && <Link  to="higher" spy={true} className="nav-link active" aria-current="page" >Higher Education</Link>}</li>

                  {props.user != 'Admin' && <span className="nav-link active" aria-current="page" >Your CGPI is {props.acgpi.toFixed(2)}</span>}
              </ul>
                <ul className="navbar-nav ms-auto order-5">
                <span className="nav-link active" aria-current="page" >Signed in as: {props.user}</span>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/logout">Logout</a></li>
                    {/* <li className="nav-item "><Backbutton back={props.pre}/></li> */}
                </ul>
            </div>
          </div>
        </nav>
      </div>
  );
  }

export default Navbar1;
