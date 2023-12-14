import cellsReducer from './cells.reducer';
import bundlesReducer from './bundels.reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  cells: cellsReducer,
  bundles: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
