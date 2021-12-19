import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';

import Register from './components/Register';

function App() {
  return (
    <div className="App">
          <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Register}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
