import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from 'src/app/feature/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.checkAuth().pipe(
      map(() => true), 

      catchError(() =>
        of(this.router.parseUrl('/auth/login'))
      )
    );
  }
}