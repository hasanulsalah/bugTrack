import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { userPrivilege } from 'src/shared/constants/common.constants';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent implements OnInit {
  public userPrivilege = userPrivilege.Admin;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  public submit(): void {
    this.route.navigate(['/adminpanel']);
  }
}
