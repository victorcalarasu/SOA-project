import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'book',
    loadChildren: () => import('book/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('customer/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
