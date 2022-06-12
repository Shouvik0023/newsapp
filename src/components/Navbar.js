import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from "../images/logo.jpg"


export default class Navbar extends Component {

  
  render() {
    return (
      <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary "  >
  <div className="container-fluid">
    <img src={logo}  alt=""  style={{height: "2vw",width: "2vw",borderRadius: "2vw"}}/>
    <a className="navbar-brand mx-2" href='/'>Global-News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/home">Home</a>
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/general" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.props.category}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/general">General</Link></li>
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
          </ul>
        </li>
        <Link className="nav-link active" to="/about">About</Link>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
