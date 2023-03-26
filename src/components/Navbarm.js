import React, { Component } from 'react'

export default class Navbarm extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Coding Contest</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className=" navbar-nav ml-auto mb-2 mb-lg-50 margin-end: 64rem;">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contests</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    
      </div>
    )
  }
}
