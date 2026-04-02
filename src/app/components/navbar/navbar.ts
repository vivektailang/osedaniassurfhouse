import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled" [class.open]="menuOpen">
      <div class="navbar-container">
        <a class="logo" href="#home">
          <span class="logo-icon">🏄</span>
          <span class="logo-text">Oseda Nias <strong>Surfhouse</strong></span>
        </a>

        <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen">
          <span></span><span></span><span></span>
        </button>

        <ul class="nav-links" [class.open]="menuOpen">
          <li><a href="#home" (click)="closeMenu()">Home</a></li>
          <li><a href="#about" (click)="closeMenu()">About</a></li>
          <li><a href="#rooms" (click)="closeMenu()">Rooms</a></li>
          <li><a href="#activities" (click)="closeMenu()">Activities</a></li>
          <li><a href="#gallery" (click)="closeMenu()">Gallery</a></li>
          <li><a href="#contact" (click)="closeMenu()" class="nav-cta">Book Now</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;
      background: transparent;
    }

    .navbar.scrolled {
      background: rgba(0, 10, 30, 0.95);
      backdrop-filter: blur(10px);
      padding: 12px 0;
      box-shadow: 0 2px 20px rgba(0,0,0,0.3);
    }

    .navbar-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      text-decoration: none;
    }

    .logo-icon {
      font-size: 1.6rem;
    }

    .logo-text {
      font-family: 'Lato', sans-serif;
      font-size: 1.1rem;
      font-weight: 300;
      letter-spacing: 0.5px;
      strong {
        font-weight: 700;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;

      li a {
        color: rgba(255,255,255,0.85);
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.3px;
        transition: color 0.2s;
        text-decoration: none;

        &:hover {
          color: #fff;
        }
      }

      li a.nav-cta {
        background: #f4a261;
        color: #fff;
        padding: 10px 24px;
        border-radius: 50px;
        font-weight: 700;
        transition: background 0.2s, transform 0.2s;

        &:hover {
          background: #e07b3a;
          transform: translateY(-1px);
        }
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: #fff;
        border-radius: 2px;
        transition: all 0.3s;
      }
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }

      .nav-links {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 10, 30, 0.97);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        z-index: -1;

        &.open {
          display: flex;
        }

        li a {
          font-size: 1.4rem;
        }
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
