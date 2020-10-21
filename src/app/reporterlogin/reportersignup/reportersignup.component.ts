import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyValidation } from '../../my.validation';
import { ConfirmPasswordValidator } from '../../../../confirm-password.validator';
@Component({
  selector: 'app-reportersignup',
  templateUrl: './reportersignup.component.html',
  styleUrls: ['./reportersignup.component.css']
})
export class ReportersignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder,private route: Router) {}

  // loginForm = new FormGroup({
  //   loginid: new FormControl(
  //     '',
  //     [Validators.required, MyValidation.containSpace],
  //     MyValidation.isDuplicate
  //   ),
  //   password: new FormControl('', Validators.required),

  //   confirmpassword: new FormControl('', Validators.required),

  //   username: new FormControl(
  //     '',
  //     [
  //       Validators.required,
  //       Validators.minLength(5),
  //       Validators.email,
  //       MyValidation.containSpace,
  //     ],
  //     MyValidation.isDuplicate
  //   ),
  // });
  // get loginid() {
  //   return this.loginForm.get('loginid');
  // }
  // get username() {
  //   return this.loginForm.get('username');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {

        loginid: ['', Validators.required],

        password: ['', Validators.required],

        confirmPassword: ['', Validators.required],

        name: ['', Validators.required],

        email: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.email,
            MyValidation.containSpace,
          ],
        ],
      },

      {
        validator: ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.route.navigate(['/reporter']);
    } else {
      alert('Enter the details in correct Format');
    }
  }

}
