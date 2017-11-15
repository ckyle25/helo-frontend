import React, { Component } from 'react';
import '../reset.css'
import './Home.css';
import Navbar from '../navbar/navbar.js'
import axios from 'axios'

class Home extends Component {
componentDidMount() {
  axios.get('http://localhost:3005/auth/me')
    .then(res => {
      // res.data === 'Log in required' ? window.location.replace('http://localhost:3000/') : ''
      console.log(res) 
    }) 
}

  render() {
    return (
      <div>
          <Navbar />
          <div>Home</div>
      </div>
    );
  }
}

export default Home;
