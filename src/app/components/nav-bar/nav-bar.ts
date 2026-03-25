import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

type NavItem = {
  id: string;
  label: string;
};

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit, AfterViewInit {
  navItems: NavItem[] = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection = 'hero';
  isMobileMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // No-op: active section is resolved after view init.
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.updateActiveSectionByViewport();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.updateActiveSectionByViewport();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }

  private updateActiveSectionByViewport(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const viewportTarget = window.innerHeight * 0.32;
    let bestSectionId = this.activeSection;
    let bestDistance = Number.POSITIVE_INFINITY;

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (!section) {
        continue;
      }

      const rect = section.getBoundingClientRect();
      const isTargetInsideSection = rect.top <= viewportTarget && rect.bottom >= viewportTarget;

      if (isTargetInsideSection) {
        bestSectionId = item.id;
        break;
      }

      const distance = Math.abs(rect.top - viewportTarget);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestSectionId = item.id;
      }
    }

    this.activeSection = bestSectionId;

    // Keep Home active when very near the top.
    if (window.scrollY < 40) {
      this.activeSection = 'hero';
    }
  }

}
