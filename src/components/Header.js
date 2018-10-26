import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <a className="navbar-brand" href="#">BOOKMARKS</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item active">
              <a className="nav-link" href="#">Dashboard 1</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard 2</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard 3</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard 4</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard 5</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">+ Add Dashboard</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Bookmark" aria-label="Search" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}
