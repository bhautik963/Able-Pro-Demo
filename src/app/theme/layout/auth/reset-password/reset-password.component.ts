import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/theme/shared/services/auth.service';
import { UtilService } from 'src/app/theme/shared/services/util.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  showLoader: boolean;
  token: any;
  // public token = localStorage.getItem('verification')

  constructor(private fb: FormBuilder, public route: ActivatedRoute, private util: UtilService,
    public authService: AuthService, public router: Router) {
    this.route.paramMap.subscribe((params) => {
      this.token = params.get('token');
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.resetForm = this.fb.group({
      sPassword: ['', Validators.compose([Validators.required, Validators.pattern(this.util.passwordRegex)])],
      sConfirmPassword: ['', Validators.compose([Validators.required, Validators.pattern(this.util.passwordRegex)])]
    });
  }

  isValidInput(fieldName): boolean {
    return this.resetForm.controls[fieldName].invalid &&
      (this.resetForm.controls[fieldName].dirty || this.resetForm.controls[fieldName].touched);
  }

  submit() {
    if (this.resetForm.value.sPassword !== this.resetForm.value.sConfirmPassword) return this.util.notifyError('enter correct confirm password.')
    this.showLoader = true;
    this.authService.resetPassword(this.resetForm.value, this.token).subscribe((result: any) => {
      this.showLoader = false;
      this.router.navigate(['/']);
      this.util.notifySuccess(result.message);
    }, error => {
      this.showLoader = false;
    });
  }

}
