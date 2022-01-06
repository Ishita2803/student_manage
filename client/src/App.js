import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Admin from './components/Admin';
import AdminHome from './components/AdminHome';
import Placement from './components/Placement';
import PlacementUser from './components/PlacementUser';

function App() {
  return (
    <div className="App">
          <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/admin/home" component={AdminHome}/>
      <Route exact path="/admin/placement" component={Placement}/>
      <Route exact path="/placement" component={PlacementUser}/>

    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
