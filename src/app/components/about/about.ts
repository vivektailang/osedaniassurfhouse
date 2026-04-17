import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section class="about" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-images">
            <div class="img-main">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" alt="Nias beach" />
            </div>
            <div class="img-secondary">
              <img src="https://images.unsplash.com/photo-1599686301896-ba05e63de66e?w=400&q=80" alt="Surfing Nias" />
            </div>
            <div class="experience-badge">
              <span class="badge-num">15</span>
              <span class="badge-text">Years of<br>Excellence</span>
            </div>
          </div>
          <div class="about-content">
            <p class="section-tag">Our Story</p>
            <h2>A Surfer's Paradise<br>on Nias Island</h2>
            <p class="lead">
              Nestled along the pristine coastline of Nias Island, Oseda Nias Surfhouse has been
              welcoming wave riders from around the globe since 2009.
            </p>
            <p>
              Our surf house sits just steps from some of the world's most legendary breaks.
              Whether you're chasing perfect barrels at Lagundri Bay or learning your first pop-up
              on mellow beach breaks, we provide everything you need for an unforgettable surf
              adventure.
            </p>
            <p>
              From our comfortable bungalows and fresh local cuisine to expert surf guiding and
              equipment rental, we've created a complete surf retreat that feels like home.
            </p>
            <div class="features">
              <div class="feature">
                <div class="feature-icon">🌊</div>
                <div>
                  <h4>World-Class Waves</h4>
                  <p>Access to legendary breaks including Lagundri Bay</p>
                </div>
              </div>
              <div class="feature">
                <div class="feature-icon">🏡</div>
                <div>
                  <h4>Comfortable Stay</h4>
                  <p>Tropical bungalows with ocean views and modern amenities</p>
                </div>
              </div>
              <div class="feature">
                <div class="feature-icon">🍜</div>
                <div>
                  <h4>Local Cuisine</h4>
                  <p>Fresh, authentic Indonesian and international meals daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .about-images {
      position: relative;
    }

    .img-main {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);

      img {
        width: 100%;
        height: 420px;
        object-fit: cover;
        display: block;
      }
    }

    .img-secondary {
      position: absolute;
      bottom: -40px;
      right: -30px;
      width: 220px;
      border-radius: 12px;
      overflow: hidden;
      border: 4px solid #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);

      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
      }
    }

    .experience-badge {
      position: absolute;
      top: -20px;
      left: -20px;
      background: #f4a261;
      color: #fff;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 8px 24px rgba(244,162,97,0.4);

      .badge-num {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1;
      }

      .badge-text {
        font-size: 0.65rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        line-height: 1.3;
      }
    }

    .about-content {
      padding-bottom: 40px;

      .section-tag {
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #f4a261;
        margin-bottom: 12px;
      }

      h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.4rem;
        line-height: 1.2;
        color: #1a1a2e;
        margin-bottom: 20px;
      }

      .lead {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #444;
        font-weight: 500;
        margin-bottom: 16px;
      }

      p {
        font-size: 0.95rem;
        line-height: 1.8;
        color: #666;
        margin-bottom: 16px;
      }
    }

    .features {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .feature {
      display: flex;
      gap: 16px;
      align-items: flex-start;

      .feature-icon {
        font-size: 1.8rem;
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 119, 182, 0.1);
        border-radius: 12px;
      }

      h4 {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        color: #1a1a2e;
        margin-bottom: 4px;
      }

      p {
        font-size: 0.85rem;
        color: #888;
        margin: 0;
        line-height: 1.5;
      }
    }

    @media (max-width: 900px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 80px;
      }

      .img-secondary {
        right: 0;
      }
    }
  `]
})
export class AboutComponent {}
