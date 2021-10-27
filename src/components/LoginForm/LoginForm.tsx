import { Button, Form, Input } from 'antd';
import React, { useCallback, useState } from 'react';
import { useActions } from '../../hooks/useActions';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getRequiredRules } from '../../util';

import styles from './styles.module.scss';

export const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, error } = useTypedSelector((store) => store.auth);
  const { loginUser } = useActions();

  const onLoginChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value),
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value),
    [],
  );

  const onSubmit = useCallback(() => loginUser(login, password), [login, password, loginUser]);

  return (
    <Form name="basic" className={styles['form-container']}>
      {!!error && <div className={styles['form-error']}>{error}</div>}
      <Form.Item label="Login" name="login" rules={[getRequiredRules('Please input your login!')]}>
        <Input value={login} onChange={onLoginChange} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[getRequiredRules('Please input your password!')]}
      >
        <Input.Password value={password} onChange={onPasswordChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
