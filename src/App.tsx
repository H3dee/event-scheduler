import { Layout } from 'antd';
import { Provider } from 'react-redux';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { store } from './store';
import './global.css';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Navbar />
        <Layout.Content className="page">
            <AppRouter />
        </Layout.Content>
      </Layout>
    </Provider>
  );
}

export default App;
