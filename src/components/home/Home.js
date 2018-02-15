import React, { Component } from 'react';
import '../reset.css'
import './Home.css';
import Navbar from '../navbar/navbar.js'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../redux/appStateManage.js'
import axios from 'axios'

class Home extends Component {
componentDidMount() {
  this.props.getCurrentUser()
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps,{getCurrentUser})(Home);
