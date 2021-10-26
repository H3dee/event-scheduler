import axios from 'axios';
import { IUser } from '../../models';

import { AppDispatch } from '../index';

import {
  AuthActionsTypesEnum,
  SetErrorAction,
  SetIsAuthenticatedAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';

const setUser = (payload: IUser): SetUserAction => ({
  type: AuthActionsTypesEnum.SET_USER,
  payload,
});

const setIsLoading = (payload: boolean): SetIsLoadingAction => ({
  type: AuthActionsTypesEnum.SET_IS_LOADING,
  payload,
});

const setError = (payload: string): SetErrorAction => ({
  type: AuthActionsTypesEnum.SET_ERROR,
  payload,
});

const setIsAuthenticated = (payload: boolean): SetIsAuthenticatedAction => ({
  type: AuthActionsTypesEnum.SET_IS_AUTHENTICATED,
  payload,
});

const loginUser = (login: string, password: string) => (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));

    setTimeout(async () => {
      const response = await axios.get<IUser[]>('../../data/users.json');
      const users = response.data;

      const matchingUser = users.find((user) => user.login === login && user.password === password);

      if (!!matchingUser) {
        localStorage.setItem('userName', matchingUser.login);
        localStorage.setItem('auth', 'true');

        dispatch(setUser(matchingUser));
        dispatch(setIsAuthenticated(true));

        return;
      }

      dispatch(setError('Incorrect login or password'));
    }, 1500);
  } catch (error) {
    dispatch(setError('Unknown error occurred during login'));
  }
};

const logoutUser = () => (dispatch: AppDispatch) => {
  try {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');

    dispatch(setUser({} as IUser));
    dispatch(setIsAuthenticated(false));
  } catch (err) {
    dispatch(setError('Unknown error occurred during logout'));
  }
};

export const authActionCreators = {
  setUser,
  setError,
  setIsAuthenticated,
  setIsLoading,
  loginUser,
  logoutUser,
};
