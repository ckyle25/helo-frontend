import React, { Component } from 'react';
import '../reset.css'
import './navbar.css';
import home from '../../assets/home.png'
import search from '../../assets/search.png'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar-main-container'>
          <div className='navbar-content-container'>
            <div className='navbar-left'>
                <div className='text-style'>Helo</div>
                <img src={home} className='img-style'></img>
                <img src={search} className='img-style'></img>
            </div>
            <div className='text-style'>Dashboard</div>
            <a href="http://localhost:3005/auth/logout"><div className='text-style'>Logout</div></a>
        </div>
      </div> 
    );
  }
}

export default Navbar;
