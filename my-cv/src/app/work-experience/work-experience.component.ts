import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  // a single work experience
  //experience1: string ="Workplace A";

  // list of experience
  experience: string[] = ["Workplace A",
                          "Workplace B",
                          "Workplace C"];


  constructor() { }

  ngOnInit(): void {
  }

}
