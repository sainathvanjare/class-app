import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Meetings';
  constructor(public router:Router, private appService: AppService) { 
  }

  async ngOnInit(){
    let data = {
      firstName: "admin",
      lastName: "admin",
      mobileNumber: 1234567890,
      email: "admin@gmail.com",
      password: "Pa$$w0rd",
      isAdmin: true 
    }

    await this.appService.signUp(data)
    .subscribe(response=>{
      console.log(response);
      if(response.status===200){
        console.log("Admin Added")
      }
  })
}

}



