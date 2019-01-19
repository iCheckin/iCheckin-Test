import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.scss']
})
export class ConsolePageComponent implements OnInit {
  courses = [
    {name:"In4matix 115", id:1},
    {name:"CompSci 161", id:2},
    {name:"CompSci 123", id:3}
  ]

  constructor() { }

  ngOnInit() {
  }

}
