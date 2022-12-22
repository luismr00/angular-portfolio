import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/Skill';
import { SKILLS } from 'src/app/skills-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // greetings = ["hello", "world", "and", "blah", "blah", "blah"];
  skills: Skill[] = SKILLS;

  constructor() {}

  ngOnInit(): void {
    console.log(this.skills);
  }
}
