import { Component, AfterViewInit, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
export class AppComponent implements AfterViewInit {
  title = 'Hasan Rahic';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.setupScrollReveal();
      this.setupScrollProgress();
    });
  }

  /** Cards fade-up one by one (40ms stagger) when they scroll into view. */
  private setupScrollReveal() {
    const selectors = [
      '#about .space-y-6 > p',
      '#skills .grid > div',
      '#experience .space-y-8 > div',
      '#education .container > div',
      '#projects .grid > div',
      '#courses .space-y-4 > button',
      '#contact .container > *',
      'section[id] h2',
    ];
    const els = document.querySelectorAll<HTMLElement>(selectors.join(','));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('reveal-in');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach((el) => {
      el.classList.add('reveal');
      // stagger within the same parent (30–50ms per item)
      const siblings = Array.from(el.parentElement?.children ?? []).filter(
        (c) => c.classList.contains('reveal')
      );
      const i = siblings.indexOf(el);
      el.style.transitionDelay = `${Math.min(i, 6) * 40}ms`;
      io.observe(el);
    });
  }

  /** Thin gradient progress bar at the very top of the page. */
  private setupScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
        ticking = false;
      });
    }, { passive: true });
  }
}
