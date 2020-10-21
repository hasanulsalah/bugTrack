import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reportbug',
  templateUrl: './reportbug.component.html',
  styleUrls: ['./reportbug.component.css']
})
export class ReportbugComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.route.navigate(['/viewbugstatus']);
    }
}
