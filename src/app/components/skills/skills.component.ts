import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // title = "HTML";
  // subtitle = "80%";

  displayElement = true;
  // id = 'some id number'

  @Input() id = 0;
  @Input() specialty = '';
  @Input() mastery = '';
  @Input() percent = 0;
  @Input() showMore!: (args: number) => void;

  constructor() {}

  ngOnInit(): void {
  }

  // showMore() {
  //   if(this.displayElement) 
  //     this.displayElement = false;
  //   else
  //     this.displayElement = true;
  // }

}
