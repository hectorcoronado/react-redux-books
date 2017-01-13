/*
Reducer must be a pure function:
 - it doesn't rely on global scope or variables outside of its own scope
 - given the same inputs, it will always return the same output (in this rudimentary case, we
   are not passing any inputs to our reducer function)
 - the returned array of objects will be assigned to the key 'books' in our combineReducers function
   found in reducers/index.js
*/

export default function() {
  return [
    { title: 'The Waves' },
    { title: 'Ulysses' },
    { title: 'Moby Dick' },
    { title: 'JR' }
  ]
}
