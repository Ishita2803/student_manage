import React, { Component, useState } from 'react'
import { Container ,Navbar,NavDropdown,Nav} from 'react-bootstrap';
import logo from './logo.png'
import './Styles/placement.css'

function Navbar1(props) {

  const [name]=useState(props.user);
  console.log(name);

  return (
                // <Navbar className='nav' bg="light" expand="lg" >
                //   <Navbar.Brand href="#home">
                //   <img src={logo} alt="logo" width="50" height="40" />
                //     Student Portal
                //     </Navbar.Brand>
                //     <Navbar.Collapse className="justify-content-end">
                //     <Navbar.Text style={{padding:"20px"}}>
                //       Signed in as: {name}
                //     </Navbar.Text>
                //     </Navbar.Collapse>
                // </Navbar>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img src={logo} alt="logo" width="50" height="40" />
            <span className="navbar-brand">Student Portal</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item" >
                  <span className="nav-link active" aria-current="page" >Signed in as: {name}</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}


// export class Navbar1 extends Component {
//     render() {
//         return (
//           <Navbar className='nav' bg="light" expand="lg" >
//             <Navbar.Brand href="#home">
//             <img src={logo} alt="logo" width="50" height="40" />
//               Student Portal
//               </Navbar.Brand>
//               <Navbar.Collapse className="justify-content-end">
//               <Navbar.Text>
//                 {/* Signed in as: <a href="#">{this.props.user}</a>&nbsp;&nbsp;&nbsp; */}
//               </Navbar.Text>
//               </Navbar.Collapse>
//           </Navbar>
//         )
//     }
// }

export default Navbar1;
