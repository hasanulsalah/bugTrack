import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindetail',
  templateUrl: './admindetail.component.html',
  styleUrls: ['./admindetail.component.css'],
})
export class AdmindetailComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  public Topage(): void {
    this.route.navigate(['/admindetail']);
  }
}
