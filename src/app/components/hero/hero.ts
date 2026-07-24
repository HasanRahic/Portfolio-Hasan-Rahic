import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID, NgZone, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
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
export class Hero implements OnInit, OnDestroy, AfterViewInit {
  showAnimation = false;
  cueHidden = false;

  /** Typewriter */
  typedText = '';
  private roles = ['Software Engineer', 'Full-Stack Developer', 'Angular + .NET'];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;

  /** Count-up stats */
  stats = [
    { value: 0, target: 5 },
    { value: 0, target: 3 },
    { value: 0, target: 2 },
  ];
  private reducedMotion = false;
  private countStarted = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.typedText = this.roles[0];
      this.stats.forEach((s) => (s.value = s.target));
      return;
    }

    this.observeAnimations();

    window.addEventListener('scroll', () => {
      this.cueHidden = window.scrollY > 80;
      const cue = document.querySelector('.hero-scroll-cue');
      if (cue) cue.classList.toggle('hidden-cue', this.cueHidden);
    }, { passive: true });

    this.startTypewriter();
    // count-up starts from setupPhotoDock once the hero content becomes visible
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupPhotoDock();
    }
  }

  private setupPhotoDock() {
    this.zone.runOutsideAngular(() => {
      const float = document.querySelector<HTMLElement>('.hero-photo-float');
      const pin = document.querySelector<HTMLElement>('.hero-pin-space');
      const caption = document.querySelector<HTMLElement>('.hero-intro-caption');
      const shell = document.querySelector<HTMLElement>('.hero-shell');
      const avatarWrap = document.querySelector<HTMLElement>('.hero-avatar-wrap');
      const avatar = document.querySelector<HTMLElement>('.hero-avatar');
      if (!float || !pin || !caption || !shell || !avatarWrap || !avatar) return;

      console.log('[photo-dock] initialised');
      let ticking = false;
      const frame = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const sr = pin.getBoundingClientRect();
        // progress through the pinned scroll distance (screen stays fixed,
        // only the photo and text morph into their final places)
        const range = sr.height - vh;
        const p = Math.min(Math.max(-sr.top / range, 0), 1);
        const e = 1 - Math.pow(1 - p, 3); // ease-out

        // intro caption fades out during the first third
        caption.style.opacity = String(Math.max(1 - p * 3, 0));
        caption.style.transform = `translateY(${p * 60}px)`;

        // hero content rises into place during the second half
        const s = Math.min(Math.max((p - 0.45) / 0.45, 0), 1);
        const se = 1 - Math.pow(1 - s, 3);
        shell.style.opacity = String(se);
        shell.style.transform = `translateY(${(1 - se) * 70}px)`;
        shell.style.pointerEvents = s > 0.5 ? 'auto' : 'none';

        if (s > 0.2 && !this.countStarted) {
          this.countStarted = true;
          this.startCountUp();
        }

        if (p >= 1) {
          float.style.display = 'none';
          avatarWrap.classList.remove('docking');
          return;
        }

        avatarWrap.classList.add('docking');
        float.style.display = 'block';

        // photo + caption are centered TOGETHER as one group, so there can
        // never be a gap between them regardless of screen size
        const navSafe = 84;
        const gap = 26;
        const capH = caption.offsetHeight;
        const avail = vh - navSafe;
        const B = Math.max(Math.min(avail - capH - gap - 24, vw * 0.78, 560), 160);
        const bigX = (vw - B) / 2;
        const bigY = navSafe + Math.max(0, (avail - (B + gap + capH)) / 2);
        caption.style.top = bigY + B + gap + 'px';

        const r = avatar.getBoundingClientRect();

        float.style.left = bigX + (r.left - bigX) * e + 'px';
        float.style.top = bigY + (r.top - bigY) * e + 'px';
        float.style.width = B + (r.width - B) * e + 'px';
        float.style.height = B + (r.height - B) * e + 'px';
      };

      const schedule = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { frame(); ticking = false; });
      };

      window.addEventListener('scroll', schedule, { passive: true });
      document.addEventListener('scroll', schedule, { passive: true, capture: true });
      window.addEventListener('resize', schedule);
      frame();
      window.addEventListener('load', frame);
      setTimeout(frame, 500);
      setTimeout(frame, 1500);
    });
  }

  ngOnDestroy() {
    if (this.typeTimer) clearTimeout(this.typeTimer);
  }

  private startTypewriter() {
    this.zone.runOutsideAngular(() => {
      const tick = () => {
        const word = this.roles[this.roleIndex];
        let delay = this.deleting ? 40 : 80;

        if (!this.deleting) {
          this.charIndex++;
          if (this.charIndex === word.length) {
            this.deleting = true;
            delay = 1600; // pause on full word
          }
        } else {
          this.charIndex--;
          if (this.charIndex === 0) {
            this.deleting = false;
            this.roleIndex = (this.roleIndex + 1) % this.roles.length;
            delay = 300;
          }
        }

        this.zone.run(() => {
          this.typedText = word.slice(0, this.charIndex);
          this.cdr.detectChanges();
        });
        this.typeTimer = setTimeout(tick, delay);
      };
      this.typeTimer = setTimeout(tick, 1100); // start after entrance animation
    });
  }

  private startCountUp() {
    this.zone.runOutsideAngular(() => {
      let start: number | null = null;
      const duration = 1400;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        this.zone.run(() => {
          this.stats.forEach((s) => (s.value = Math.round(s.target * eased)));
          this.cdr.detectChanges();
        });
        if (p < 1) requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 200);
    });
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

    const section = document.querySelector('#hero');
    if (section) observer.observe(section);
  }
}
