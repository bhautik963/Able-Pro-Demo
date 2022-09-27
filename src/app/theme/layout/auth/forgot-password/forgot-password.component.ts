import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/theme/shared/services/auth.service';
import { UtilService } from 'src/app/theme/shared/services/util.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  showLoader: boolean;
  token: any;

  constructor(private fb: FormBuilder, private util: UtilService, public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.forgotForm = this.fb.group({
      sEmail: ['', Validators.compose([Validators.required, Validators.pattern(this.util.emailRegex)])]
    });
  }

  isValidInput(fieldName): boolean {
    return this.forgotForm.controls[fieldName].invalid &&
      (this.forgotForm.controls[fieldName].dirty || this.forgotForm.controls[fieldName].touched);
  }

  submit() {
    this.showLoader = true;
    this.authService.forgotPassword(this.forgotForm.value).subscribe((result: any) => {
      this.showLoader = false;
      this.token = result.data;
      this.router.navigate(['/auth/reset-password' + '/' + this.token]);
      this.util.notifySuccess(result.message);
    }, error => {
      this.showLoader = false;
    });
  }
}
