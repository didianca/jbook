import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { ActionType } from './action-types';

export const store = configureStore({
  reducer,
});

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'code',
  },
});

console.log(store.getState());
