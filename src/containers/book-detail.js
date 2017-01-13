import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    /*
    When we first boot up our app, this.props.activeBook is undefined; in that case, we return early
    and render the following:
    */
    if (!this.props.activeBook) {
      return <div>Select a book to get started.</div>
    }


    /*
    Once a user clicks on a book, this.props.activeBook is no longer undefined, and this runs:
    */
    return (
      // this.props.activeBook is available through mapStateToProps below
      <div>
        <h4>Details for:</h4>
        <div>{this.props.activeBook.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // makes state available as props, via this.props.activeBook
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
