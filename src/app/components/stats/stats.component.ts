import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/Skill';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() goBack!: () => void;
  @Input() stats!: Skill;

  constructor() {}

  ngOnInit(): void {
    console.log(this.stats);
  }
}
