import React, { Component } from 'react';
import queryString from "query-string";
import logo from './logo.svg';
import './App.css';





class App extends Component {

  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
            <a href="http://localhost:4500/auth/google" className="button">
              <div>
                <span className="button-label">Sign in with Google</span>
              </div>
            </a>
          
          
        </header>
      </div>
    );
  }
}

export default App;
