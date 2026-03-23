import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

type CourseItem = {
  title: string;
  period?: string;
  location?: string;
  issuer: string;
  githubUrl?: string;
  certificateImage: string;
};

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class Courses {
  showAnimation = false;
  selectedCertificate: CourseItem | null = null;
  imageLoadError = false;

  courses: CourseItem[] = [
    {
      title: 'JavaScript',
      issuer: 'King Fahd Cultural Center',
      period: '01/2024 - 03/2024',
      location: 'Mostar',
      certificateImage: '/assets/certificates/javascript-kralj-fahd.jpg',
    },
    {
      title: 'Build an app with ASPNET Core and Angular from scratch',
      issuer: 'Udemy',
      period: '08/2025',
      githubUrl: 'https://github.com/HasanRahic/angular-.net-course',
      certificateImage: '/assets/certificates/udemy-angular-dotnet.jpg',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observeAnimations();
    }
  }

  openCertificate(course: CourseItem) {
    this.selectedCertificate = course;
    this.imageLoadError = false;
  }

  closeCertificate() {
    this.selectedCertificate = null;
    this.imageLoadError = false;
  }

  onCertificateImageError() {
    this.imageLoadError = true;
  }

  private observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.showAnimation = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('#courses'); 
    if (section) observer.observe(section);
  }
}
