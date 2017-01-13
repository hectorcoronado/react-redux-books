import { combineReducers } from 'redux';

import BooksReducer from './reducer-books';
import ActiveBook from './reducer-active-book';

/*
Our global application state is given the key of 'books' -- the value is whatever gets returned by
our BooksReducer.

All of our reducers get combined in the combineReducers function below, and actions can be easily
propagated through all of them. For each key we assign one reducer, and that reducer is responsible
for the creation of that particular aspect of state.
*/

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
