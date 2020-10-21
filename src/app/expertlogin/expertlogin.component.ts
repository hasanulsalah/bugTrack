import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { userPrivilege } from 'src/shared/constants/common.constants';
@Component({
  selector: 'app-expertlogin',
  templateUrl: './expertlogin.component.html',
})
export class ExpertloginComponent implements OnInit {
  public userPrivilege = userPrivilege.Expert;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  public submit(): void{
    this.route.navigate(['/expertpanel']);
  }
}
