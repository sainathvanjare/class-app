import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Cookie } from 'ng2-cookies';

// import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
 public pdfSrc= "http://www.africau.edu/images/default/sample.pdf"
  constructor(private router: Router) {
   }

  ngOnInit() {
    
  }

  register(){

    this.router.navigate(["team"]);
  }

}
