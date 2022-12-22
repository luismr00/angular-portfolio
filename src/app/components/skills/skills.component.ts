import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // title = "HTML";
  // subtitle = "80%";

  @Input() language = '';
  @Input() mastery = '';
  @Input() percent = 0;
}
