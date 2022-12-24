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
  showSkills: boolean = true;
  stats!: Skill;


  constructor() {}

  ngOnInit(): void {
    // console.log(this.skills);
    window.addEventListener("scroll", this.reveal, true);
  }

  showMore = (id: number) => {
    console.log("clicked round progress chart with id: " + id);
    this.stats = this.skills[id];
    console.log(this.stats);
    this.showSkills = false;
  }

  goBack = () => {
    this.showSkills = true;
  }

  reveal() {
    var reveals = document.querySelectorAll(".reveal");
    // console.log(reveals);
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  }
}
