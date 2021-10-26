import { FC } from 'react';

import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({ value, clickHandler, disabled = false, styles }) => (
  <button className={styles} onClick={clickHandler} disabled={disabled}>
    {value}
  </button>
);

export default Button;
