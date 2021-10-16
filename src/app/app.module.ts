import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './User/user.module';
import { HomeModule } from './home/home.module';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from "./shared-module/shared.module";
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { SharedModuleComponent } from './shared-module/shared-module.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { PdfViewerComponent } from 'ng2-pdf-viewer'; 



@NgModule({
  declarations: [
    AppComponent,
    SharedModuleComponent,
    LandingPageComponent ,  
    // PdfViewerComponent 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule,
    HomeModule,
    FormsModule,
    DashboardModule,
    NgbModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
