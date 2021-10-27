import { FC } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { publicRoutes, privateRoutes } from '../../router';

export const AppRouter: FC = () => {
  const { isAuthenticated } = useTypedSelector((store) => store.auth);

  const renderPublicRoutes = () =>
    publicRoutes.map((publicRoute, index) => (
      <Route key={`public-route-${index}-${publicRoute.path}`} {...publicRoute} />
    ));

  const renderPrivateRoutes = () =>
    privateRoutes.map((privateRoute, index) => (
      <Route key={`public-route-${index}-${privateRoute.path}`} {...privateRoute} />
    ));

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
