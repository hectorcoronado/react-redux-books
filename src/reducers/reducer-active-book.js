/*
All reducers are passed two arguments:
1. the current state, and
2. an action (since reducers are only called when an action occurs)

State argument is NOT application state; it's only the state the reducer is responsible for

*/

export default function(state, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
