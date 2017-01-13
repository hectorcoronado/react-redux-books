import { combineReducers } from 'redux';

import BooksReducer from './reducer-books';
import ActiveBook from './reducer-active-book';

/*
Our global application state is given the key of 'books' -- the value is whatever gets returned by
our BooksReducer.
*/

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
