import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../Login'
import CreateAccount from '../CreateAccount'
import Home from '../Home'
//import Images from '../../components/images'
import './style.css'

class Main extends Component {
  render() {
    return (
      <div className="body">
        <Router>
          <Route path="/sigin" component={Login} />
          <Route path="/signup" component={CreateAccount} />
          <Route path="/home" component={Home} />
        </Router>
      </div>
    )
  }
}

export default Main
