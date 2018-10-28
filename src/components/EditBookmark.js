import React, { Component } from 'react';
import Modalbox from './Modalbox';
import FormBookmark from './FormBookmark';

export default class EditBookmark extends Component {
  render() {
    const { modalName } = this.props;

    return (
      <Modalbox title="Edit Bookmark" modalName="editBookmark">
        <FormBookmark actionType="EDIT" />
      </Modalbox>
    )
  }
}
