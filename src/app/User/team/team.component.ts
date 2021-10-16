import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from "../../app.service";
import { Router} from "@angular/router"
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder, private appService: AppService,
    private router: Router, private toastr: ToastrService
    ) { 
      this.registerForm = this.formBuilder.group({
        teamId: ['', Validators.required],
        teamName: ['', Validators.required],
        teamList: ['', Validators.required]
    });
    }
    dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  userlist=[];
  ngOnInit() {
    this.getAllUsers();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'email',
      textField: 'email',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  
  }

  async getAllUsers(){
    await this.appService.getUsers()
    .subscribe(response=>{
      console.log(response)
      this.userlist=response;
    })
  }

  
onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {

    console.log(items);
  }
  cancelBtn() {
    
    this.router.navigate(['/home']);
  }

  async creatTeam( formData) {
  this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        await this.appService.createTeam(formData.value)
    .subscribe(response=>{
      console.log(response);
      if(response.status===200){
        this.toastr.toastrConfig.timeOut=5000;
        this.toastr.success('Account succesfully created');
        this.router.navigate(['/login']);
       
     }
     });
        // this.userService.register(this.registerForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
  

}
