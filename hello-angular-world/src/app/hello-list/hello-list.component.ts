import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.css']
})
export class HelloListComponent implements OnInit {
  message: string = "5 o'clock somewhere!";

  constructor() { }

  ngOnInit(): void {
  }

}
