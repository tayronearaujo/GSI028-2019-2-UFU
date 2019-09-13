import React, { Component } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from '../../components/Navbar'


class Home extends Component {
  render() {
    return (
      <div className="body">

          <div class="col-md-6 mb-4">

          <h2 class="my-5 h2">With shadow</h2>

          <img class="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
            data-holder-rendered="true"/>

          </div>

      </div>
    )
  }
}

export default Home
