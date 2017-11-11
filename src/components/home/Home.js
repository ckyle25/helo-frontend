import React, { Component } from 'react';
import '../reset.css'
import './Home.css';
import Navbar from '../navbar/navbar.js'

class Home extends Component {
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
