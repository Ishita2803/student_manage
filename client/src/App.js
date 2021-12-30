import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
          <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
