import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

/*
This is a container component because it must be aware of our application's state.

A container is a normal React component that is 'bonded' to the  application state by way of the
connnect function which we imported from react-redux and to which we passed our mapStateToProps
function below.

mapStateToProps returns an object that represents our application's state and makes it available
to our component in 'this.props'

Whenever our application's state changes, our container component will re-render.
*/

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        // this.props.selectBook() is available to us via mapDispatchToProps
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.books);
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  /*
  Anything returned from mapStateToProps will be available as props on the BookList container -- as
  this.props.books, which will give us access to the application's state value assigned to the
  'books' key in the combineReducers function (which in turn makes use of the reducer-books to
  obtain the value assigned to it)


  This function is the 'glue' between Redux and React
  */
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  /*
  Anything returned from mapDispatchToProps will be available as props on the BookList container --
  as this.props.selectBook, so we can call our action creator.

  Basically: selectBook is a JS function, returns a JS object; bindActionCreators simply assures
  that the returned object is 'passed around' to all our reducers.

  whenever selectBook is called, the result should be passed to ALL of our reducers

  This is what bindActionCreators does with the dispatch argument. Dispatch receives all our actions
  and funnels them to all our different reducers in our app.
  */
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

/*
connect function promotes BookList to a container component, giving it access to dispatch method,
selectBook action.
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
