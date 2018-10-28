import React, { Component } from 'react';
import BookmarkMenu from './BookmarkMenu';

export default class Bookmark extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card bookmark">
          <div className="card-body">
            
            <a href="#" className="card-link">
              <h5 className="card-title">Bilyoner.com</h5>
              <h6 className="card-subtitle mb-2 text-muted">Türkiye'nin Bahis Sitesi</h6>
            </a>

            <BookmarkMenu />
          </div>
        </div>
      </div>
    )
  }
}
