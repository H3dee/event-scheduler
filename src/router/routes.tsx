import EventsCalendarPage from '../pages/EventsCalendar';
import { LoginPage } from '../pages/Login';
import { IRoute } from './types';

enum Routes {
  LOGIN = '/login',
  EVENTS = '/events',
}

export const publicRoutes: IRoute[] = [{ path: Routes.LOGIN, component: LoginPage, exact: true }];

export const privateRoutes: IRoute[] = [
  { path: Routes.EVENTS, component: EventsCalendarPage, exact: true },
];
