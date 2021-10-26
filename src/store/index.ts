import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { authReducer } from './auth';

const rootReducer = combineReducers({
  authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
