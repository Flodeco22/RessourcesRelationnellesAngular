import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.estConnecte()) {
        switch (this.router.getCurrentNavigation()?.extractedUrl.toString()) {
          case '/connexion' :
            this.router.navigateByUrl("/");
            return false;
        }     
      }
      else {
        switch (this.router.getCurrentNavigation()?.extractedUrl.toString()) {
          case '/connexion' :
            return true;
          case '/parametres' :
            this.router.navigateByUrl("/");
            return false;  
        }
      }

      return this.authService.estConnecte();
  }

}