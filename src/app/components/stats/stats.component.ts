import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/Skill';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  @Input() goBack!: () => void;
  @Input() stats!: Skill;
}
