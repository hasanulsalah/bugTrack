import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-expertcomment',
  templateUrl: './expertcomment.component.html',
  styleUrls: ['./expertcomment.component.css']
})
export class ExpertcommentComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public Topage(): void {
    this.route.navigate(['/expertcomment']);
  }

}
