// persist.ts
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import reducers, { RootState } from './reducers';
import { applyMiddleware, createStore, Reducer } from 'redux';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<RootState>(
  persistConfig,
  reducers as unknown as Reducer<RootState, any>
);

export const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default persistedReducer;
