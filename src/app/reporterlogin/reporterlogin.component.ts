import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { userPrivilege } from 'src/shared/constants/common.constants';
@Component({
  selector: 'app-reporterlogin',
  templateUrl: './reporterlogin.component.html'
})
export class ReporterloginComponent implements OnInit {

  public userPrivilege = userPrivilege.Reporter;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  public submit():void{
    this.route.navigate(['/reporterpanel'])
  }
}
