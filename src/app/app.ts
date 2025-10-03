import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Courses } from './components/courses/courses';
import { NavBar } from './components/nav-bar/nav-bar';
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Hero,
    About,
    Skills,
    Experience,
    Education,
    Projects,
    Courses,
    NavBar,
    Contact
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Hasan Rahic';
}