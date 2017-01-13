import { combineReducers } from 'redux';

import BooksReducer from './reducer-books';

/*
Our global application state is given the key of 'books' -- the value is whatever gets returned by
our BooksReducer.
*/

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
