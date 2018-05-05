import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return ( 
    <div >
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
          <a href="/" className="navbar-brand"> Lancer </a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="/login"><a className="nav-link">Login</a></Link></li>
              <li className="nav-item"><Link to="/register"><a className="nav-link">Sign Up</a></Link></li>
            </ul>
          </div>
        </nav>
    </div>
    )
  }
}

export default Navbar;
