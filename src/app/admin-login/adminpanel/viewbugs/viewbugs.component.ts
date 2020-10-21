import { Component, OnInit } from '@angular/core';
// import data from 'src/data.json';
@Component({
  selector: 'app-viewbugs',
  templateUrl: './viewbugs.component.html',
  styleUrls: ['./viewbugs.component.css'],
})
export class ViewbugsComponent implements OnInit {
  constructor() {}
  
  // public bugs = [];

  ngOnInit(): void {
    // this.bugs = data;
  }
}
