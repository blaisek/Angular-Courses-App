import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IdIsValidIdGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const id = Number(next.paramMap.get('id'));

      if (!isNaN(id) && id > 0) {
        console.log('AuthGuard#canActivate called');
        return true
      } else {
        this.router.navigateByUrl('/products')
        return false
      }
  }

}
