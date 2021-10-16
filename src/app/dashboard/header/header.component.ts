import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router, Route } from '@angular/router';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // public isAdmin: boolean = JSON.parse(Cookie.get('IS_ADMIN'));
  constructor(private router: Router) {

  }

  isLogedIn: boolean;

  ngOnInit() {
    let token = Cookie.get('AuthToken');
    this.isLogedIn = token? true: false; 
  }
  signOff() {
    Cookie.delete('AuthToken');
    Cookie.delete('userId');
    this.router.navigate(['/login']);
  }

  login(){
    this.router.navigate(["login"]);
  }

  signup(){
    this.router.navigate(["signup"]);
  }
}
