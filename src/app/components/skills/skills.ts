import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, NgZone, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
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
export class Skills {
  showAnimation = false;
  barsVisible = false;

  bars = [
    { label: 'Angular / .NET', level: 90, delay: 0 },
    { label: 'JavaScript / React', level: 75, delay: 150 },
    { label: 'SQL / Databases', level: 70, delay: 300 },
    { label: 'Flutter', level: 60, delay: 450 },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observeAnimations();
    } else {
      this.barsVisible = true;
    }
  }

  private observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.showAnimation = true;
          this.barsVisible = true;
          // IntersectionObserver callbacks run outside Angular's zone,
          // so trigger change detection manually or the UI never updates.
          this.cdr.detectChanges();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);
  }
}
