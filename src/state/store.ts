import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
// import { ActionType } from './action-types';

export const store = configureStore({
  reducer,
});

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: { id: null, type: 'code' },
// });
//
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: { id: null, type: 'text' },
// });
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: { id: null, type: 'code' },
// });
//
// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: { id: null, type: 'text' },
// });
