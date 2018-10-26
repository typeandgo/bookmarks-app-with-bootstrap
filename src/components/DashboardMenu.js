import React, { Component } from 'react'

export default class DashboardMenu extends Component {
  render() {
    return (
      <ul className="nav dashboard-menu justify-content-center">
        <li className="nav-item padding-10">
          <button type="button" className="btn btn-primary">Dashboard 1</button>
        </li>
        <li className="nav-item padding-10">
          <button type="button" className="btn btn-primary">Dashboard 2</button>
        </li>
        <li className="nav-item padding-10">
          <button type="button" className="btn btn-primary">Dashboard 3</button>
        </li>
        <li className="nav-item padding-10">
          <button type="button" className="btn btn-primary">Dashboard 4</button>
        </li>
      </ul>
    )
  }
}
