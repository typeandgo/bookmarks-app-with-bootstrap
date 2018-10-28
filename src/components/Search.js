import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form className="search-bar form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search Bookmark" aria-label="Search" />
        <button className="btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    )
  }
}
