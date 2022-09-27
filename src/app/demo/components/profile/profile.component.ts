import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/theme/shared/services/profile.service';
import { UtilService } from 'src/app/theme/shared/services/util.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  @ViewChild('editModel') editModel: any;
  public activeTab: string;
  public editOtherInfo: boolean;
  public editOtherInfoIcon: string;
  public editContact: boolean;
  public editContactIcon: string;
  public editProfile: boolean;
  public editProfileIcon: string;
  public editEmail: boolean;
  public editEmailIcon: string;
  public sEmail: string;
  public sContact: string;
  public showVerify = false;
  public showLoader = false;

  public profileData: any;
  public editForm: FormGroup;
  public passwordForm: FormGroup;
  id: any;
  sAvatar: any;
  sAvatarBlob: any;
  selectedOption;
  gender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unspecified', label: 'Unspecified' },
  ];

  constructor(public profileService: ProfileService,
    public sanitizer: DomSanitizer, public fb: FormBuilder, public router: Router, public util: UtilService) {
    this.activeTab = 'home';

    this.editProfile = false;
    this.editProfileIcon = 'icon-edit';

    this.editEmail = false;
    this.editEmailIcon = 'icon-edit';

    this.editContact = false;
    this.editContactIcon = 'icon-edit';

    this.editOtherInfo = false;
    this.editOtherInfoIcon = 'icon-edit';

    this.editForm = this.fb.group({
      sFullName: [''],
      eGender: [''],
    });
    this.passwordForm = this.fb.group({
      sPassword: ['', Validators.compose([Validators.pattern(util.passwordRegex)])],
      sNewPassword: ['', Validators.compose([Validators.pattern(util.passwordRegex)])],
      sConfirmPassword: ['', Validators.compose([Validators.pattern(util.passwordRegex)])]
    })
    this.edit();
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe(data => {
      this.profileData = data.data;
      this.id = this.profileData._id;
      this.editForm.setValue({
        sFullName: this.profileData.sFullName || '',
        eGender: this.profileData.eGender || '',
      })
      this.sEmail = this.profileData.sEmail || ''
      this.sContact =  this.profileData.sMobile?.slice(3) || ''
    });
    
  }

  readUrl(e) {
    if (e.target.files.length >= 0) {
      const filesAmount = e.target.files.length;
      const allowedExtensions = ['jpg', 'png', 'jpeg'];
      for (let i = 0; i < filesAmount; i++) {
        const fileExt = e.target.files[i].name.split('.').pop();
        if (allowedExtensions.includes(fileExt)) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            const imageObj = new Image();
            imageObj.src = evt.target.result as string;
            imageObj.onload = (ev) => {
              this.sAvatar = this.sanitizer.bypassSecurityTrustResourceUrl(
                URL.createObjectURL(e.target.files[i])
              );
              this.sAvatarBlob = e.target.files[i];
              this.onChange(this.sAvatarBlob);
            };
          };
          reader.readAsDataURL(e.target.files[i]);
        } else {
          this.fileInput.nativeElement.value = null;
          this.util.notifyError('Image Format should be jpg,png,jpeg.');
        }
      }
    }

  }

  edit() {
    this.profileService.getProfile().subscribe((data: any) => {
      const dataVal = data.data;
    });
  }

  updateEmail() {
    this.profileData.isEmailVerified = false;
    this.profileService.changeEmail({sEmail: this.sEmail}).subscribe((sData: any) => {
      this.util.notifySuccess('edited');
    });
  }

  updateContact() {
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(this.sContact)) {
      return this.util.notifyError('Enter valid mobile no.')
    }
    this.profileData.isMobileVerified = false;
  
    this.profileService.changeMobile({ sMobile: this.sContact }).subscribe((sData: any) => {
      this.showVerify = true
      Swal.fire({
        input: 'textarea',
        inputPlaceholder: 'Type OTP here...',
        inputAttributes: {
          'aria-label': 'Type OTP here'
        },
        inputValidator: (value) => {
          if (!value) {
            return 'Please Enter OTP!';
          }
        },
        title: 'Verify OTP',
        text: 'Please Enter OTP to verify your contact no.',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Verify',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {
          const data = {
            sMobile: this.sContact,
            nOTP: Number(result.value)
          };
          this.profileService.verifyOTP(data).subscribe((result: any) => {
            this.showVerify = false
            this.profileData.isMobileVerified = true
            this.util.notifySuccess('Contact no. verified successfully.');
          });
        }
      }); 
      this.util.notifySuccess('edited');
    });
  }


  isValidInput(fieldName): boolean {
    return this.passwordForm.controls[fieldName].invalid &&
      (this.passwordForm.controls[fieldName].dirty || this.passwordForm.controls[fieldName].touched);
  }

  onPassChange() {
    const data = this.passwordForm.value
    if (data.sNewPassword !== data.sConfirmPassword) {
      return this.util.notifyError('Please Enter valid password')
    }
    this.showLoader = true
    this.profileService.changePassword(data).subscribe(oData =>{
      this.util.notifySuccess('Password Has been changed')
      this.editModel.hide()
    }, error => {
      this.util.notifyError(error.error.message)
      this.showLoader = false
      this.passwordForm.reset()
    })

    
 }
  verifyOTP(e) {
    this.showVerify = false
    Swal.fire({
      input: 'textarea',
      inputPlaceholder: 'Type OTP here!',
      inputAttributes: {
        'aria-label': 'Type OTP here'
      },
      inputValidator: (value) => {
        if (!value) {
          return 'Please Enter OTP!';
        }
      },
      title: 'Verify OTP',
      text: 'Please Enter OTP to verify your contact no.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Verify',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const data = {
          sMobile: this.sContact,
          nOTP: Number(result.value)
        };
        this.profileService.verifyOTP(data).subscribe((result: any) => {
          this.profileData.isMobileVerified = true
          
          this.util.notifySuccess('Contact no. verified successfully.');
        });
      }
    });
  }
  editSubmit() {
    this.profileService.updateProfile(this.editForm.value).subscribe((sData: any) => {
      this.util.notifySuccess('edited');
      
    });
  }

  close() {
    this.editModel.hide();
  }

  onChange(img) {
    const formData = new FormData();
    formData.append('sAvatar', img);
    this.profileService.updateProfile(formData).subscribe((result) => {
      this.util.notifySuccess(result.message);
      this.router.navigate(['/components/crm/dashboard']);
    });
  }
}
