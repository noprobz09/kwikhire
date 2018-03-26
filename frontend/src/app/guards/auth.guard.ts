import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { UserService } from "../services/user.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private userService: UserService
    ){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // console.log("Auth Guard can activate");
        // return true;
        if( this.userService.isAuthenticated() ){
            console.log('authenticated');    
            return true;
        
        }
        // console.log('unauthenticated');
        // return false;
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

    canActivateChild() { 
        console.log("Auth Guard can activate child");
        return true;
    }
}
