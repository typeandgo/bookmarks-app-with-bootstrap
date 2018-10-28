import React, { Component, Fragment } from 'react';
import Modalbox from './Modalbox';
import FormBookmark from './FormBookmark';

export default class ModalBookmark extends Component {
  render() {
    return (
      <Fragment>

        <footer className="footer fixed-bottom bottom-20">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <button type="button" className="btn btn-success btn-add-bookmark" data-toggle="modal" data-target="addBookmark"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        </footer>

        <Modalbox title="Add Bookmark" modalName="addBookmark">
          <FormBookmark actionType="ADD" />
        </Modalbox>

      </Fragment>
      
    )
  }
}
