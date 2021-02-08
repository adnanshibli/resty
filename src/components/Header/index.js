import React from 'react';
import './Header.scss';
import {NavLink } from 'react-router-dom'
class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>RESTy</h1>
        <nav>
          <ul>
            <li><NavLink id="linav" exact to="/">Home</NavLink></li>
            <li><NavLink id="linav" to='/history'>History</NavLink></li>
            <li><NavLink id="linav" to='/help'>Help</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;