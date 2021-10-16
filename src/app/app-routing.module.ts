import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component'
import { AllUserComponent } from './User/all-user/all-user.component';
import { HomeComponent } from './home/home.component';
import {TeamComponent} from './User/team/team.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { Observable, from } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router'

@Injectable()
class CanActivateUser implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let actualRoute = route.url[0].path;
    let token = Cookie.get('AuthToken');
    let isAdmin = null;
    if (Cookie.get('IS_ADMIN')) {
      isAdmin = JSON.parse(Cookie.get('IS_ADMIN'));
    }
    let userId = Cookie.get('userId');
    if (actualRoute === "signup" || actualRoute === "login") {
      if (token) {
        if (isAdmin) {
          this.router.navigate(['/all-user']);
          return false;
        }
        else {
          this.router.navigate(['/dashboard'], { queryParams: { "userId": userId } });
          return false;
        }
      }
      return true;
    } else {
      if (!token) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    return true;
  }
}

const routes: Routes = [
  { path: 'home', component: LandingPageComponent  },
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [CanActivateUser] },
  { path: 'signup', component: SignupComponent,  canActivate: [CanActivateUser] },
  { path: 'dashboard', component: DashboardComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [CanActivateUser] },
  { path: 'all-user', component: AllUserComponent  },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [CanActivateUser] },
  { path: 'team', component:TeamComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [CanActivateUser],
  exports: [RouterModule]
})
export class AppRoutingModule { }
