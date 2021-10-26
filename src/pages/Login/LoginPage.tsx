import { Card } from 'antd';
import { FC } from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './styles.module.scss';

export const LoginPage: FC = () => {
  return (
    <div className={styles['container']}>
      <Card>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
