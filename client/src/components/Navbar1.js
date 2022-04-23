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
                {/* <li className="nav-item navbar-right" >
                  {props.user != 'Admin' && <a className="nav-link active" aria-current="page" href="./upload" >Upload</a>}
                </li>  */}

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
    
//                 // <Navbar className='nav' bg="light" expand="lg" >
//                 //   <Navbar.Brand href="#home">
//                 //   <img src={logo} alt="logo" width="50" height="40" />
//                 //     Student Portal
//                 //     </Navbar.Brand>
//                 //     <Navbar.Collapse className="justify-content-end">
//                 //     <Navbar.Text style={{padding:"20px"}}>
//                 //       Signed in as: {names}
//                 //     </Navbar.Text>
//                 //     </Navbar.Collapse>
//                 // </Navbar>

                
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <img src={logo} alt="logo" width="50" height="40" />
//             <span className="navbar-brand">Student Portal</span>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li className="nav-item navbar-right" >
//                   <span className="nav-link active" aria-current="page" >Signed in as: {props.name}</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//   )
// }


// export class Navbar1 extends Component {
//     render() {
//         return (

//           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Container>
//             <img src={logo} alt="logo" width="50" height="40" />
//             <Navbar.Brand href="#home">SIES GRADUATE SCHOOL OF TECNOLOGY</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="#features">Features</Nav.Link>
//                 <Nav.Link href="#pricing">Home</Nav.Link>
//                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                   {this.props.place && <NavDropdown.Item href="#action/3.1">Preplacement</NavDropdown.Item>}
//                   {this.props.higher && <NavDropdown.Item href="#action/3.2">Higher Education</NavDropdown.Item>}
//                   {this.props.preplace && <NavDropdown.Item href="#action/3.3">Preplacement</NavDropdown.Item>}
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="/">Logout</NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//               <Nav>
//                 <Nav.Link href="#deets">Signed in as:</Nav.Link>
//                 <Nav.Link eventKey={2} href="#memes">
//                   {this.props.user}
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//             </Container>
//         </Navbar>

          // <Navbar className='nav' bg="light" expand="lg" >
          //   <Navbar.Brand href="#home">
          //   <img src={logo} alt="logo" width="50" height="40" />
          //     Student Portal
          //     </Navbar.Brand>
          //     <Navbar.Collapse className="justify-content-end">
          //     <Navbar.Text>
          //        Signed in as: <a href="#">{this.props.user}</a>&nbsp;&nbsp;&nbsp; 
          //     </Navbar.Text>
          //     </Navbar.Collapse>
          // </Navbar>
//         )
//     }
// }

export default Navbar1;
