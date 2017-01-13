/*
All reducers are passed two arguments:
1. the current state, and
2. an action (since reducers are only called when an action occurs)

State argument is NOT application state; it's only the state the reducer is responsible for

We write a switch statement to "match up" the ActionCreator to the appropriate reducer via the
action.type property.

We always need a default value. Redux doesn't allow us to return 'undefined' and in the case of a
user first booting up an app, state would be thus -- so we want to initialize the value to default
to null.
*/

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
