import { Button, Form, Input } from 'antd';

import styles from './styles.module.scss';

export const LoginForm = () => {
  return (
    <Form name="basic" className={styles['form-container']}>
      <Form.Item
        label="Login"
        name="login"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
