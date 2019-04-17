import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGaurdService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthentificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn()) {
      return false;
    }

    this.router.navigate(['home']);
    return true;

  }

}
