import React, { Component } from 'react';
import Bookmark from './Bookmark';

export default class Group extends Component {
  render() {
    return (
      <li className="nav-item group col-lg-12">
        <a className="nav-link active d-inline-block" href="#collapseExample" data-toggle="collapse" aria-expanded="true" aria-controls="collapseExample">Group 1</a>
        <a className="d-inline-block" href="#"><i className="fas fa-pen"></i></a> 

        
        <div className="collapse show" id="collapseExample">
          <div className="row">
            
            <Bookmark />

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card bookmark">
                <div className="card-body">
                  <a href="#" className="card-link">
                    <h5 className="card-title">Bilyoner.com</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Türkiye'nin Bahis Sitesi</h6>
                  </a>
                  <a className="d-inline-block float-right" href="#"><i className="fas fa-ellipsis-h"></i></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card bookmark">
                <div className="card-body">
                  <a href="#" className="card-link">
                    <h5 className="card-title">Bilyoner.com</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Türkiye'nin Bahis Sitesi</h6>
                  </a>
                  <a className="d-inline-block float-right" href="#"><i className="fas fa-ellipsis-h"></i></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card bookmark">
                <div className="card-body">
                  <a href="#" className="card-link">
                    <h5 className="card-title">Bilyoner.com</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Türkiye'nin Bahis Sitesi</h6>
                  </a>
                  <a className="d-inline-block float-right" href="#"><i className="fas fa-ellipsis-h"></i></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card bookmark">
                <div className="card-body">
                  <a href="#" className="card-link">
                    <h5 className="card-title">Bilyoner.com</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Türkiye'nin Bahis Sitesi</h6>
                  </a>
                  <a className="d-inline-block float-right" href="#"><i className="fas fa-ellipsis-h"></i></a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card bookmark">
                <div className="card-body">
                  <a href="#" className="card-link">
                    <h5 className="card-title">Bilyoner.com</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Türkiye'nin Bahis Sitesi</h6>
                  </a>
                  <a className="d-inline-block float-right" href="#"><i className="fas fa-ellipsis-h"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
