import React, { useReducer } from 'react';

const MARK = 'MARK';

const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
        item: 'Learn More about reducers',
        completed: false,
        id: 3892987580
      }
];

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}