import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { authActionCreators } from '../store/auth/actionCreators';

const actionCreators = { ...authActionCreators };

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
