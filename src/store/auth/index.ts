import { IUser } from '../../models';

import { AuthAction, AuthActionsTypesEnum, IAuthState } from './types';

const initialState: IAuthState = {
  isAuthenticated: false,
  error: '',
  isLoading: false,
  user: {} as IUser,
};

export const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionsTypesEnum.SET_IS_AUTHENTICATED: {
      return { ...state, isAuthenticated: action.payload };
    }
    case AuthActionsTypesEnum.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case AuthActionsTypesEnum.SET_ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case AuthActionsTypesEnum.SET_USER: {
      return { ...state, user: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};
