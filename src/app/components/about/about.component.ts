import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  timelineItems = [
    {
      title: 'U.S. Navy Service',
      date: 'Mar 2012 - Apr 2017',
      description: 'Served as a Hospital Corpsman, providing essential medical support to service members and optimizing patient care workflows. Gained valuable experience in teamwork, adaptability, and problem-solving under high-pressure environments. Developed leadership qualities and a strong foundation in responsibility, communication, and mentoring.',
      position: 'left'
    },
    {
      title: 'Computer Science Degree',
      date: 'Aug 2017 - May 2022',
      description: 'Earned a B.S. in Computer Science from California State University, Northridge. Built a strong foundation in software development, data structures, and algorithms while engaging in hands-on projects that reinforced problem-solving and coding proficiency.',
      position: 'right'
    },
    {
      title: 'Snap Engineering Academy',
      date: 'Jun 2021 - Aug 2021',
      description: 'Selected as one of 15 scholars from over 100 applicants for demonstrating a commitment to continuous learning and software development. Worked on a cross-functional team to design and implement a socially impactful Snap feature using full-stack technologies like GitHub, p5.js, ml5.js, and Firebase. Gained hands-on experience in agile development, collaborative coding, and industry best practices while enhancing technical and problem-solving skills.',
      position: 'left'
    },
    {
      title: 'Job Market Challenges',
      date: 'Jan 2023 - Dec 2024',
      description: 'Since early 2023, navigating the job market has been a significant challenge, with the tech industry experiencing downturns, hiring freezes, and increased competition. Despite the difficulties, I have remained persistent, continuously upskilling and refining my approach to stand out in an evolving landscape. While conditions have improved slightly, the journey remains demanding. As a result, I leveraged freelancing and later MSSA to upskill in cloud technologies, strengthening my expertise in modern development practices.',
      position: 'right'
    },
    {
      title: 'Full-Stack Freelancer',
      date: 'Jan 2024 - Present',
      description: 'As a freelance full-stack engineer, I have worked on multiple projects, including the development of Melee Academy, a subscription-based learning platform leveraging AWS and serverless technologies. In addition to this personal project, I collaborated with a colleague to enhance their front-end application, providing development support, debugging, and improving overall UI functionality. These experiences have allowed me to refine my technical expertise in React, Node.js, and cloud-based architectures while delivering high-quality solutions tailored to project needs.',
      position: 'left'
    },
    {
      title: 'MSSA',
      date: 'Sep 2024 - Jan 2025',
      description: 'Selected for and completed Microsoft Software & Systems Academy (MSSA) Cloud Application Development program, gaining hands-on experience with .NET, C#, and Microsoft Azure. Developed cloud-native applications, worked with RESTful APIs, and deepened my understanding of scalable backend solutions. This program solidified my transition into cloud-based software development. Earned Azure certifications (AZ-900 and AI-900), with plans to pursue additional certifications in the future.',
      position: 'right'
    },
    {
      title: 'Seeking New Roles',
      date: 'Present',
      description: "Actively seeking new opportunities where I can leverage my full-stack and cloud expertise to drive innovation and build impactful solutions. Primarily focused on full-stack front-end and back-end roles, while utilizing my cloud knowledge to enhance modern development workflows. If you're looking for a developer who can bridge software engineering with cloud technologies, let’s connect!",
      position: 'left'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // window.addEventListener("scroll", this.reveal, true);
  }

  reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

}
