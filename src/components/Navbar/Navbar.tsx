import { Layout, Row } from 'antd';
import { FC } from 'react';

import Button from '../Button';

import styles from './styles.module.scss';

export const Navbar: FC = () => {
  const isAuthenticated = false;

  return (
    <Layout.Header>
      <Row justify="end" style={{ height: '100%' }}>
        <nav className={styles['nav-menu']}>
          <div className={styles['nav-menu__user-name']}>
            <span>Alex</span>
          </div>
          {isAuthenticated ? (
            <Button value="Выйти" clickHandler={() => {}} styles={styles['nav-menu__logout-btn']} />
          ) : (
            <Button value="Логин" clickHandler={() => {}} styles={styles['nav-menu__login-btn']} />
          )}
        </nav>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
