import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
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
export class Projects {
  showAnimation = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observeAnimations();
      this.setupTilt();
    }
  }

  /** 3D tilt: project cards lean toward the cursor (pointer devices only). */
  private setupTilt() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    setTimeout(() => {
      document.querySelectorAll<HTMLElement>('#projects .grid > div').forEach((card) => {
        card.addEventListener('mousemove', (ev: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const rx = ((ev.clientY - r.top) / r.height - 0.5) * -6;
          const ry = ((ev.clientX - r.left) / r.width - 0.5) * 6;
          card.style.transform =
            `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }, 0);
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

    const section = document.querySelector('#projects');
    if (section) observer.observe(section);
  }
}
