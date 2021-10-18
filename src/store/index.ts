import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export type AppStore = ReturnType<typeof store.getState>;
export type useTypedDispatch = typeof store.dispatch;
