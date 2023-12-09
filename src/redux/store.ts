import {AnyAction, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {rootReducer} from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;