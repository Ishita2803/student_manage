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
import Info from './components/Info';
import AdminPreplace from './components/AdminPreplace'
import AdminHigherEd from './components/AdminHigherEd'
import InterestedHigher from './components/InterestedHigher'
import Upload from './components/Upload';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute'
import AdminPrivateRoute from './components/AdminPrivateRoute';

function App() {
  return (
    <div className="App">
          <BrowserRouter >
    <Switch>   
      <Route exact path="/register" component={Register}/>   
      <Route exact path="/" component={Login}/>
      <PrivateRoute exact path="/home" component={Home}/>
      <Route exact path="/admin" component={Admin}/>
      <AdminPrivateRoute path="/admin/home" component={AdminHome}/>
      <AdminPrivateRoute exact path="/admin/placement" component={AdminPlacement}/>
      <AdminPrivateRoute exact path="/admin/preplacement" component={AdminPreplace}/>
      <AdminPrivateRoute exact path="/admin/higherEducation" component={AdminHigherEd}/>
      <PrivateRoute exact path="/info" component={Info}/>
      <AdminPrivateRoute exact path="/admin/analytics" component={InterestedHigher}/>
      <PrivateRoute exact path="/upload" component={Upload}/>
      <PrivateRoute exact path="/logout" component={Logout}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
