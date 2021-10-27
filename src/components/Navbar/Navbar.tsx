import { Layout, Row } from 'antd';
import { FC, useCallback } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Button from '../Button';

import styles from './styles.module.scss';

export const Navbar: FC = () => {
  const {
    isAuthenticated,
    user: { login: userLogin },
  } = useTypedSelector((store) => store.auth);
  const { logoutUser } = useActions();

  const onLogout = useCallback(() => logoutUser(), [logoutUser]);

  return (
    <Layout.Header>
      <Row justify="end" style={{ height: '100%' }}>
        <nav className={styles['nav-menu']}>
          {isAuthenticated ? (
            <>
              <div className={styles['nav-menu__user-login']}>
                <span>{userLogin}</span>
              </div>
              <Button
                value="Выйти"
                clickHandler={onLogout}
                styles={styles['nav-menu__logout-btn']}
              />
            </>
          ) : (
            <Button value="Логин" clickHandler={() => {}} styles={styles['nav-menu__login-btn']} />
          )}
        </nav>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
