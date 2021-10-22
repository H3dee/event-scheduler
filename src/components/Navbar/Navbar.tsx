import { Layout, Row } from 'antd';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <Layout.Header>
      <Row justify="end">
        <div>menu</div>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
