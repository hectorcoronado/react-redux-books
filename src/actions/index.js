/*
An action creator needs to be wired up to Redux, so that it can propagate through our reducers.

We do this by binding the selectBook action to the BookList component.

An action creator (roughly speaking) always has a similar signature:
- it's going to return a JS object with:
  - a type key -- this is ALWAYS NECESSARY
  - a payload: another key with further information to describe an event -- this is not required,
    but often the case
*/

export function selectBook(book) {
  /*
  selectBook is an ActionCreator; it needs to return an action, which is an object, with a 'type'
  property

  the type should describe the kind of action that is being performed

  the payload should describe the data that is being used or manipulated
  */
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
