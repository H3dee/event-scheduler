import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../../router';

export const AppRouter: FC = () => {
  const isAuthenticated = true;

  const renderPublicRoutes = () => publicRoutes.map((publicRoute) => <Route {...publicRoute} />);

  const renderPrivateRoutes = () =>
    privateRoutes.map((privateRoute) => <Route {...privateRoute} />);

  return isAuthenticated ? (
    <Switch>
      {renderPrivateRoutes()}
      <Redirect to="/events" />
    </Switch>
  ) : (
    <Switch>
      {renderPublicRoutes()}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
