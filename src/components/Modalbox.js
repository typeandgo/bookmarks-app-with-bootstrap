import React, { Component } from 'react'

export default class Modalbox extends Component {
  render() {
    const { title, modalName } = this.props;

    return (
      <div className="modal fade" id={ modalName } tabIndex="-1" role="dialog" aria-labelledby={ `aria-${modalName}` } aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title" id={ `aria-${modalName}` }>{ title }</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            
            <div className="modal-body">

              { this.props.children }

            </div>
          </div>
        </div>
      </div>
    )
  }
}
