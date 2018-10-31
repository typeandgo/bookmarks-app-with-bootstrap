import React, { Component } from 'react'

export default class BookmarkMenu extends Component {
  render() {
    return (
      <div className="dropdown d-inline-block float-right bookmark-menu">
        
        <a className="d-inline-block dropdown-toggle" title="Menu" role="button" href="javascript:;" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-h"></i>
        </a>

        <div className="dropdown-menu dropdown-menu-right bookmark-menu-list" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#"><i className="fas fa-trash-alt"></i> Delete</a>
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#editBookmark"><i className="fas fa-pen"></i> Edit</a>
        </div>
        
      </div>
    )
  }
}
