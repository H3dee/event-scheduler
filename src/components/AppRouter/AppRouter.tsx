import { FC } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../../router';

export const AppRouter: FC = () => {
  const isAuthenticated = false;

  const renderPublicRoutes = () => publicRoutes.map((publicRoute) => <Route {...publicRoute} />);

  const renderPrivateRoutes = () =>
    privateRoutes.map((privateRoute) => <Route {...privateRoute} />);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Switch>
          {renderPrivateRoutes()}
          <Redirect to="/events" />
        </Switch>
      ) : (
        <Switch>
          {renderPublicRoutes()}
          <Redirect to="/login" />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
