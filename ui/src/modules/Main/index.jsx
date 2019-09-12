import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../Login'
import CreateAccount from '../CreateAccount'
//import Images from '../../components/images'
import './style.css'

class Main extends Component {
  render() {
    return (
      <div className="body">






        <Router>
          <Route path="/sign" component={Login} />
          <Route path="/signup" component={CreateAccount} />
        </Router>
      </div>
    )
  }
}

export default Main
