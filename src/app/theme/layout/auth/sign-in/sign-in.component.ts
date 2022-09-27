import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/theme/shared/services/auth.service';
import { UtilService } from 'src/app/theme/shared/services/util.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  sessionData: { Authorization: any; };
  loginForm: FormGroup;
  showLoader: boolean;

  constructor(private fb: FormBuilder, public util: UtilService, public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      sEmail: ['', Validators.compose([Validators.required])],
      sPassword: ['', Validators.compose([Validators.required])]
    });
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  goTodashboard() {
    this.router.navigate(['/components/crm/dashboard']);
  }

  public submit() {
    this.showLoader = true;
    this.authService.login(this.loginForm.value).subscribe((data: HttpResponse<any>) => {
      this.showLoader = false;
      this.util.notifySuccess(data.body.msg);
      // 
      console.log(data.body);

      this.sessionData = {
        Authorization: data.body.payload.sAccessToken,
      };
      // 

      this.router.navigate(['components/dashboard']);
      localStorage.setItem('accessToken', JSON.stringify(this.sessionData));
      localStorage.setItem('bIsSuperAdmin', JSON.stringify(data.body.payload.bIsSuperAdmin));
      // localStorage.setItem('admintype', btoa(data.body.data.eUserType));
      // localStorage.removeItem('agentToken');

    }, error => {


      this.util.notifyError(error.error.msg)
      this.showLoader = false;
    });
  }


}
