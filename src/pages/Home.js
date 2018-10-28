import React, { Component, Fragment } from 'react';
import DashboardMenu from '../components/DashboardMenu';
import AddBookmark from '../components/AddBookmark';
import EditBookmark from '../components/EditBookmark';
import Group from '../components/Group';
import mockData from "../data/data.js";

export default class Home extends Component {
  render() {
    return (
      <Fragment>

        <AddBookmark />

        <EditBookmark />

        <DashboardMenu />

        <div className="row">
          <ul className="nav col-lg-12">
            
            <Group />

            <li className="nav-item group col-lg-12">
              <a className="nav-link d-inline-block" href="#collapseExample2" data-toggle="collapse" aria-expanded="true" aria-controls="collapseExample2">Group 1</a>
              <a className="d-inline-block" href="#"><i className="fas fa-pen"></i></a>

              <div className="collapse" id="collapseExample2">
                <div className="row">
                  
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

            <li className="nav-item group col-lg-12">
              <a className="nav-link d-inline-block" href="#collapseExample3" data-toggle="collapse" aria-expanded="true" aria-controls="collapseExample3">Group 3</a>
              <a className="d-inline-block" href="#"><i className="fas fa-pen"></i></a>

              <div className="collapse" id="collapseExample3">
                <div className="row">
                  
                  <div className="col-sm-12">
                    <div className="card bg-light">
                      <div className="card-body text-center">
                        
                          <p className="card-text">There is no Bookmark</p>
                                                 
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </li>
          </ul>
        </div>

      </Fragment>
    )
  }
}
