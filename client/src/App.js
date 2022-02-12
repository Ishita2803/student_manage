import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';
import AdminPlacement from './components/AdminPlacement';
import PlacementUser from './components/PlacementUser';
import Info from './components/Info';
import AdminPreplace from './components/AdminPreplace'
import AdminHigherEd from './components/AdminHigherEd'
import InterestedHigher from './components/InterestedHigher'
import Upload from './components/Upload';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
          <BrowserRouter >
    <Switch>   
      <Route exact path="/register" component={Register}/>   
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/admin" component={Admin}/>
      <PrivateRoute exact path="/admin/home" component={AdminHome}/>
      <Route exact path="/admin/placement" component={AdminPlacement}/>
      <Route exact path="/admin/preplacement" component={AdminPreplace}/>
      <Route exact path="/admin/higherEducation" component={AdminHigherEd}/>
      <Route exact path="/placement" component={PlacementUser}/>
      <PrivateRoute exact path="/info" component={Info}/>
      <Route exact path="/admin/analytics" component={InterestedHigher}/>
      <Route exact path="/upload" component={Upload}/>
      <Route exact path="/logout" component={Logout}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
