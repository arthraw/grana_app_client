import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./feature/auth/auth.routes')
      .then(m => m.AUTH_ROUTES)
  },
  {
    path: 'my',
    loadChildren: () => import('./feature/planning/planning.routes')
      .then(m => m.PLANNING_ROUTES)
  },
];