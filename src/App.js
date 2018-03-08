import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Submit from './Submit';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      // <div className="App">
      <Router>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <NavLink className="navbar-brand" to="/">Top navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="activeNav" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/submit" activeClassName="activeNav" className="nav-link">Submit</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Home} />
                <Route path="/submit" component={Submit} history={history}/>
                <div>
                  footer
                </div>
            </div>
        </Router>
        
      // </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>,document.getElementById('root'));
