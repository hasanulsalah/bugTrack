import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userPrivilege } from 'src/shared/constants/common.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() privilege;
  @Output() submitted = new EventEmitter();

  public userPrivileges = userPrivilege;

  constructor() {}

  ngOnInit(): void {
  }
}
