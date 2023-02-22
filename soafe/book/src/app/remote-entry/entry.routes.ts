import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const remoteRoutes: Route[] = [
  { path: '', component: NxWelcomeComponent },
];
