// auth.guard.ts
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class PermissionService {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is logged in based on localStorage
    const isLogin = localStorage.getItem('isLogin');

    if (isLogin === 'true') {
      return true; // User is logged in, allow access to the route
    } else {
      // User is not logged in, redirect to the login page
      this.router.navigate(['/feature1/login']);
      return false;
    }
  }

  
  
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionService).canActivate(next, state);
  }
