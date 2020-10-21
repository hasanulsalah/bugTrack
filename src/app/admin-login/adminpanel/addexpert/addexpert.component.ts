import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyValidation } from '../../../my.validation';
import { ConfirmPasswordValidator } from '../../../../../confirm-password.validator';

@Component({
  selector: 'app-addexpert',
  templateUrl: './addexpert.component.html',
  styleUrls: ['./addexpert.component.css'],
})
export class AddexpertComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

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

        name: ['', Validators.required, Validators.minLength(5)],

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
  }
}
