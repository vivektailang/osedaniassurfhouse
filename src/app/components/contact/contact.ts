import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BookingForm {
  name: string;
  email: string;
  arrival: string;
  departure: string;
  guests: string;
  room: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <p class="section-tag">Get in Touch</p>
            <h2>Book Your<br>Surf Getaway</h2>
            <p class="lead">
              Ready to ride legendary waves? Fill out the form and we'll get back to you
              within 24 hours to confirm your reservation.
            </p>

            <div class="info-items">
              <div class="info-item">
                <span class="info-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Lagundri Bay, Nias Selatan<br>Sumatera Utara, Indonesia</p>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>hello&#64;osedaniassurfhouse.com</p>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">📞</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>+62 812 3456 7890</p>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">🕐</span>
                <div>
                  <strong>Check-in / Check-out</strong>
                  <p>14:00 / 11:00</p>
                </div>
              </div>
            </div>

            <div class="surf-season">
              <h4>🌊 Best Surf Season</h4>
              <p>April – October brings the most consistent swells to Nias. We welcome surfers year-round
                 and have great conditions outside of peak season too.</p>
            </div>
          </div>

          <div class="contact-form-wrap">
            <div class="form-card" *ngIf="!submitted">
              <h3>Reserve Your Stay</h3>
              <form (ngSubmit)="onSubmit()" #bookingForm="ngForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Full Name *</label>
                    <input type="text" id="name" name="name" [(ngModel)]="form.name" required placeholder="John Doe" />
                  </div>
                  <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" [(ngModel)]="form.email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="arrival">Arrival Date *</label>
                    <input type="date" id="arrival" name="arrival" [(ngModel)]="form.arrival" required />
                  </div>
                  <div class="form-group">
                    <label for="departure">Departure Date *</label>
                    <input type="date" id="departure" name="departure" [(ngModel)]="form.departure" required />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="guests">Number of Guests *</label>
                    <select id="guests" name="guests" [(ngModel)]="form.guests" required>
                      <option value="">Select guests</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4+">4+ people</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="room">Room Type *</label>
                    <select id="room" name="room" [(ngModel)]="form.room" required>
                      <option value="">Select a room</option>
                      <option value="dorm">Surf Dorm</option>
                      <option value="garden">Garden Bungalow</option>
                      <option value="suite">Ocean View Suite</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">Message / Special Requests</label>
                  <textarea id="message" name="message" [(ngModel)]="form.message" rows="4"
                    placeholder="Tell us about your surf experience, dietary needs, or any special requests..."></textarea>
                </div>
                <button type="submit" class="btn-submit" [disabled]="bookingForm.invalid">
                  Send Booking Request 🏄
                </button>
              </form>
            </div>

            <div class="success-card" *ngIf="submitted">
              <div class="success-icon">🎉</div>
              <h3>Request Sent!</h3>
              <p>Thanks, <strong>{{ form.name }}</strong>! We've received your booking request
                 and will get back to you at <strong>{{ form.email }}</strong> within 24 hours.</p>
              <p class="success-tagline">Get ready to ride some legendary waves! 🌊</p>
              <button class="btn-reset" (click)="reset()">Send Another Request</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: #fff;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: start;
    }

    .contact-info {
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
        font-size: 1rem;
        line-height: 1.8;
        color: #666;
        margin-bottom: 36px;
      }
    }

    .info-items {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 32px;
    }

    .info-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;

      .info-icon {
        font-size: 1.3rem;
        width: 44px;
        height: 44px;
        background: rgba(0, 119, 182, 0.08);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      strong {
        display: block;
        font-size: 0.88rem;
        color: #1a1a2e;
        margin-bottom: 2px;
      }

      p {
        font-size: 0.85rem;
        color: #777;
        line-height: 1.5;
        margin: 0;
      }
    }

    .surf-season {
      background: linear-gradient(135deg, #0077b6, #48cae4);
      border-radius: 16px;
      padding: 24px;
      color: #fff;

      h4 {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        margin-bottom: 8px;
      }

      p {
        font-size: 0.85rem;
        line-height: 1.7;
        opacity: 0.9;
      }
    }

    .form-card {
      background: #f8f9fa;
      border-radius: 20px;
      padding: 36px;

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        color: #1a1a2e;
        margin-bottom: 24px;
      }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .form-group {
      margin-bottom: 18px;

      label {
        display: block;
        font-size: 0.82rem;
        font-weight: 700;
        color: #555;
        margin-bottom: 6px;
        letter-spacing: 0.3px;
      }

      input, select, textarea {
        width: 100%;
        padding: 12px 14px;
        border: 1.5px solid #e0e0e0;
        border-radius: 8px;
        font-family: 'Lato', sans-serif;
        font-size: 0.9rem;
        color: #333;
        background: #fff;
        transition: border-color 0.2s, box-shadow 0.2s;
        outline: none;

        &:focus {
          border-color: #0077b6;
          box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.1);
        }

        &::placeholder {
          color: #bbb;
        }
      }

      textarea {
        resize: vertical;
      }
    }

    .btn-submit {
      width: 100%;
      padding: 14px;
      background: #f4a261;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-family: 'Lato', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;

      &:hover:not(:disabled) {
        background: #e07b3a;
        transform: translateY(-1px);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .success-card {
      background: linear-gradient(135deg, #f8f9fa, #e8f4f8);
      border-radius: 20px;
      padding: 48px 36px;
      text-align: center;

      .success-icon {
        font-size: 3.5rem;
        margin-bottom: 16px;
      }

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.8rem;
        color: #1a1a2e;
        margin-bottom: 16px;
      }

      p {
        font-size: 0.95rem;
        color: #666;
        line-height: 1.7;
        margin-bottom: 12px;
      }

      .success-tagline {
        font-size: 1.1rem;
        color: #0077b6;
        font-weight: 600;
      }
    }

    .btn-reset {
      margin-top: 24px;
      padding: 12px 28px;
      background: #0077b6;
      color: #fff;
      border: none;
      border-radius: 50px;
      font-family: 'Lato', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #005f8e;
      }
    }

    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 48px;
      }
    }

    @media (max-width: 560px) {
      .form-row {
        grid-template-columns: 1fr;
      }

      .form-card {
        padding: 24px;
      }
    }
  `]
})
export class ContactComponent {
  form: BookingForm = {
    name: '',
    email: '',
    arrival: '',
    departure: '',
    guests: '',
    room: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  reset() {
    this.submitted = false;
    this.form = {
      name: '',
      email: '',
      arrival: '',
      departure: '',
      guests: '',
      room: '',
      message: ''
    };
  }
}
