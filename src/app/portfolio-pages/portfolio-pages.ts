import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio-pages',
  imports: [CommonModule],
  templateUrl: './portfolio-pages.html',
  styleUrl: './portfolio-pages.css',
})
export class PortfolioPages {


  projects = [
    {
      title: 'Timesheet',
      image: '../../assets/timesheet.png',
      domain: 'https://timesheet.wowfactory.app/login',
      content: 'In this project, I was responsible for designing the user interface and user experience for Naeram, a timesheet management application aimed at helping users easily track their work hours and tasks.',
    },
    {
      title: 'Wowfactory',
      image: '../../assets/wowfactory.png',
      domain: 'https://wowfactory.app/',
      content: "Developed a centralized login system for WowFactory using MEAN & MERN stack technologies, enabling secure authentication and seamless access management across multiple platforms. Focused on user authentication, role-based access control, API integration, session management."
    },
    {
      title: 'Site Audit',
      image: '../../assets/siteaudit.png',
      domain: 'https://siteaudit.wowfactory.app/login',
      content: "The Site Audit application is an industry-oriented checklist tool designed to ensure quality and compliance during site inspections. It allows users to create and manage project-specific checklists, visit sites, and systematically track pending tasks"
    },
    {
      title: 'Snag Point',
      image: '../../assets/snag.png',
      domain: 'https://seyal.app/login',
      content: "This project is designed to streamline the process of identifying, assigning, and resolving snags within a project workflow. Users can log snag points with detailed descriptions, assign them to responsible team members, and track their progress in real time."
    },
    {
      title: 'Aelam',
      image: '../../assets/aelam.png',
      domain: 'https://aelam.app/',
      content: "Aelam is a comprehensive Bill of Quantities (BOQ) management tool that simplifies project cost estimation and tracking. It allows users to create, manage, and update BOQs efficiently while maintaining accuracy and transparency."

    },
    {
      title: 'Arattai Hub',
      image: '../../assets/arattaihub.png',
      domain: 'https://arattaihub.com/',
      content: "Developed Arattai Hub, a design community-based platform focused on connecting creative professionals through challenges, seminars, and community engagement. Built using MEAN & MERN stack technologies, the platform enables users to participate in design challenge."
    }
  ];

  experiences = [
    {
      role: 'Mean stack Developer',
      company: 'Sunsmart Technologies, Nandhanam',
      date: 'Sep 2022',
      image: '../../assets/experience1.png',
      content:"Worked as a MEAN Stack Developer Intern for 3 months, contributing to the development of responsive web applications using MongoDB, Express.js, Angular, and Node.js. Collaborated with the development team to build user-friendly interfaces, integrate APIs, optimize backend functionality, and improve overall application performance. Gained hands-on experience in full-stack development, debugging, database management, and real-world project workflows."
    },
    {
      role: 'Mean stack Developer',
      company: 'Innowell engineering international Pvt Ltd',
      date: 'Jan 2023',
      image: '../../assets/experience2.png',
      content:"At Innowell Engineering International Pvt Ltd, I worked as a MEAN Stack Developer for 7 months, where I contributed to building responsive web applications and scalable backend systems. My work involved developing dynamic user interfaces using Angular, creating REST APIs with Node.js and Express.js, and managing databases with MongoDB. I collaborated with cross-functional teams to improve application performance, implement new features, and deliver seamless user experiences across multiple projects."
    },
    {
      role: 'Mean & Mern stack development',
      company: 'Teervu Technology',
      date: 'June 23 - Present',
      image: '../../assets/experience3.png',
      content:"With 2.5 years of experience at Teervu Technology, I specialize in MEAN & MERN stack development, building scalable web applications with modern frontend and backend technologies. Skilled in developing responsive user interfaces, REST APIs, database management, and full-stack application architecture, I focus on creating high-performance digital solutions with seamless user experiences."
    }
  ];

  downloadResume() {
  const link = document.createElement('a');
  link.href = '../../assets/santhosh-resume.pdf';
  link.download = 'Santhosh_Kumar_Resume.pdf';
  link.target = '_blank';
  link.click();
}

}
