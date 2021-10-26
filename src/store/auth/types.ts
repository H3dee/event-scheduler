import { IUser } from '../../models';

export interface IAuthState {
  isAuthenticated: boolean;
  error: string;
  isLoading: boolean;
  user: IUser;
}

export enum AuthActionsTypesEnum {
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED',
}

export interface SetUserAction {
  type: AuthActionsTypesEnum.SET_USER;
  payload: IUser;
};

export interface SetIsLoadingAction {
  type: AuthActionsTypesEnum.SET_IS_LOADING;
  payload: boolean;
};

export interface SetErrorAction {
  type: AuthActionsTypesEnum.SET_ERROR;
  payload: string;
};

export interface SetIsAuthenticatedAction {
  type: AuthActionsTypesEnum.SET_IS_AUTHENTICATED;
  payload: boolean;
};

export type AuthAction =
  | SetUserAction
  | SetIsLoadingAction
  | SetErrorAction
  | SetIsAuthenticatedAction;
