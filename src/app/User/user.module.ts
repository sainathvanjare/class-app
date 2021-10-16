import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllUserComponent } from './all-user/all-user.component';
import { TeamComponent } from './team/team.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from "../shared-module/shared.module";


@NgModule({
  declarations: [
    SignupComponent,
     LoginComponent,     
     ForgotPasswordComponent,
      AllUserComponent,
      TeamComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[SignupComponent,LoginComponent]
})
export class UserModule { }
