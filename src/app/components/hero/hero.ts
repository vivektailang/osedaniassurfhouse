import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="hero" id="home">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-subtitle">Nias Island, Indonesia</p>
        <h1 class="hero-title">Oseda Nias<br><span>Surfhouse</span></h1>
        <p class="hero-desc">
          Experience world-class waves, breathtaking sunsets, and warm Indonesian hospitality.
          Your ultimate surf retreat awaits on the legendary shores of Nias.
        </p>
        <div class="hero-actions">
          <a href="#rooms" class="btn btn-primary">View Rooms</a>
          <a href="#contact" class="btn btn-outline">Book Your Stay</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">15+</span>
            <span class="stat-label">Years of Experience</span>
          </div>
          <div class="divider"></div>
          <div class="stat">
            <span class="stat-num">500+</span>
            <span class="stat-label">Happy Surfers</span>
          </div>
          <div class="divider"></div>
          <div class="stat">
            <span class="stat-num">12</span>
            <span class="stat-label">Surf Spots Nearby</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Scroll Down</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #0a1628 0%, #1a4c7a 40%, #0077b6 70%, #48cae4 100%);
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80');
        background-size: cover;
        background-position: center;
        opacity: 0.35;
      }
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(0,10,30,0.5) 0%, rgba(0,10,30,0.2) 50%, rgba(0,10,30,0.7) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 24px 80px;
      color: #fff;
    }

    .hero-subtitle {
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #f4a261;
      margin-bottom: 16px;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 400;
      line-height: 1.05;
      margin-bottom: 24px;

      span {
        color: #48cae4;
        font-style: italic;
      }
    }

    .hero-desc {
      font-size: 1.15rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.85);
      max-width: 560px;
      margin-bottom: 40px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 60px;

      .btn {
        display: inline-block;
        padding: 14px 36px;
        border-radius: 50px;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        border: none;
        transition: all 0.3s ease;
        letter-spacing: 0.5px;
        text-decoration: none;

        &-primary {
          background: #f4a261;
          color: #fff;
          box-shadow: 0 4px 16px rgba(244,162,97,0.4);

          &:hover {
            background: #e07b3a;
            transform: translateY(-2px);
          }
        }

        &-outline {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.8);

          &:hover {
            background: rgba(255,255,255,0.1);
            border-color: #fff;
            transform: translateY(-2px);
          }
        }
      }
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 32px;
      flex-wrap: wrap;
    }

    .stat {
      display: flex;
      flex-direction: column;
    }

    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 700;
      color: #fff;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.65);
      letter-spacing: 0.5px;
      margin-top: 4px;
    }

    .divider {
      width: 1px;
      height: 40px;
      background: rgba(255,255,255,0.25);
    }

    .hero-scroll {
      position: absolute;
      bottom: 40px;
      right: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      color: rgba(255,255,255,0.5);
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      writing-mode: vertical-rl;
      z-index: 2;
    }

    .scroll-line {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
    }

    @media (max-width: 768px) {
      .hero-scroll { display: none; }
      .hero-stats { gap: 20px; }
    }
  `]
})
export class HeroComponent {}
