import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: SignInComponent
      },
      {
        path: 'sign-in',
        canActivate: [AuthGuard],
        component: SignInComponent
      },
      {
        path: 'reset-password/:token',
        component: ResetPasswordComponent
      },
      {
        path: 'forgot-password',
        canActivate: [AuthGuard],
        component: ForgotPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
