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

function App() {
  return (
    <div className="App">
          <BrowserRouter >
    <Switch>   
      <Route exact path="/register" component={Register}/>   
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/admin/home" component={AdminHome}/>
      <Route exact path="/admin/placement" component={AdminPlacement}/>
      <Route exact path="/placement" component={PlacementUser}/>
      <Route exact path="/info" component={Info}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
