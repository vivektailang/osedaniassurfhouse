import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="logo">
                <span class="logo-icon">🏄</span>
                <span class="logo-text">Oseda Nias <strong>Surfhouse</strong></span>
              </div>
              <p>Your ultimate surf retreat on the legendary shores of Nias Island, Indonesia.
                 World-class waves, warm hospitality, and unforgettable memories.</p>
              <div class="social-links">
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="YouTube">▶️</a>
                <a href="#" aria-label="WhatsApp">💬</a>
              </div>
            </div>

            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#rooms">Accommodations</a></li>
                <li><a href="#activities">Activities</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Book Now</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Surf Info</h4>
              <ul>
                <li><a href="#">Lagundri Bay Guide</a></li>
                <li><a href="#">Best Surf Season</a></li>
                <li><a href="#">Surf Equipment Rental</a></li>
                <li><a href="#">Beginner Guide</a></li>
                <li><a href="#">Wave Forecast</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Contact</h4>
              <ul class="contact-list">
                <li>📍 Lagundri Bay, Nias Selatan<br>Sumatera Utara, Indonesia</li>
                <li>📧 hello&#64;osedaniassurfhouse.com</li>
                <li>📞 +62 812 3456 7890</li>
                <li>🕐 Check-in: 14:00 | Check-out: 11:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p>© {{ year }} Oseda Nias Surfhouse. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0a1628;
      color: rgba(255,255,255,0.75);
    }

    .footer-top {
      padding: 72px 24px 48px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 48px;
    }

    .footer-brand {
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #fff;
        margin-bottom: 16px;

        .logo-icon {
          font-size: 1.6rem;
        }

        .logo-text {
          font-family: 'Lato', sans-serif;
          font-size: 1.1rem;
          font-weight: 300;

          strong {
            font-weight: 700;
          }
        }
      }

      p {
        font-size: 0.88rem;
        line-height: 1.8;
        color: rgba(255,255,255,0.55);
        margin-bottom: 24px;
        max-width: 300px;
      }
    }

    .social-links {
      display: flex;
      gap: 12px;

      a {
        width: 40px;
        height: 40px;
        background: rgba(255,255,255,0.08);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        text-decoration: none;
        transition: background 0.2s;

        &:hover {
          background: rgba(255,255,255,0.15);
        }
      }
    }

    .footer-col {
      h4 {
        font-family: 'Lato', sans-serif;
        font-size: 0.82rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #fff;
        margin-bottom: 20px;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li a {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: #f4a261;
          }
        }
      }
    }

    .contact-list {
      li {
        font-size: 0.85rem !important;
        color: rgba(255,255,255,0.55);
        line-height: 1.6;
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 20px 24px;

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      p {
        font-size: 0.82rem;
        color: rgba(255,255,255,0.4);
      }
    }

    .footer-links {
      display: flex;
      gap: 24px;

      a {
        font-size: 0.82rem;
        color: rgba(255,255,255,0.4);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: rgba(255,255,255,0.7);
        }
      }
    }

    @media (max-width: 960px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
      }

      .footer-brand {
        grid-column: span 2;
      }
    }

    @media (max-width: 560px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }

      .footer-brand {
        grid-column: span 1;
      }

      .footer-bottom .container {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
