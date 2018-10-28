import React, { Component } from 'react'

export default class FormBookmark extends Component {
  render() {
    return (
      <form action="javascript:void(0);">
        
        <div className="form-group row">
          <label htmlFor="input1" className="col-sm-3 col-form-label">Link</label>
          <div className="col-sm-9">
            <input type="link" className="form-control" id="input1" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="input2" className="col-sm-3 col-form-label">Title</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="input2" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="input3" className="col-sm-3 col-form-label">Description</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="input3" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="input4" className="col-sm-3 col-form-label">Dashboard</label>
          <div className="col-sm-9">
            <select className="form-control" id="input4">
              <option>Dashboard 1</option>
              <option>Dashboard 2</option>
              <option>Dashboard 3</option>
              <option>Dashboard 4</option>
              <option>Dashboard 5</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="input5" className="col-sm-3 col-form-label">Group</label>
          <div className="col-sm-9">
            <select className="form-control" id="input5">
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
              <option>Group 4</option>
            </select>
          </div>
        </div>
        
        <div className="form-group row">
          <div className="col-sm-12 text-right">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>

      </form>
    )
  }
}
