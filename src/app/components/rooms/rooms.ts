import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Room {
  name: string;
  description: string;
  price: number;
  capacity: string;
  features: string[];
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  template: `
    <section class="rooms" id="rooms">
      <div class="container">
        <div class="section-title">
          <p class="section-tag">Where You'll Stay</p>
          <h2>Accommodations</h2>
          <p>Wake up to the sound of waves. All rooms offer a serene tropical escape
             with modern comforts and stunning ocean views.</p>
        </div>

        <div class="rooms-grid">
          <div class="room-card" *ngFor="let room of rooms">
            <div class="room-image">
              <img [src]="room.image" [alt]="room.name" />
              <span class="room-badge" *ngIf="room.badge">{{ room.badge }}</span>
            </div>
            <div class="room-body">
              <div class="room-header">
                <h3>{{ room.name }}</h3>
                <div class="room-price">
                  <span class="price">{{ room.price | currency:'USD':'symbol':'1.0-0' }}</span>
                  <span class="per-night">/ night</span>
                </div>
              </div>
              <p class="room-capacity">👥 {{ room.capacity }}</p>
              <p class="room-desc">{{ room.description }}</p>
              <ul class="room-features">
                <li *ngFor="let feat of room.features">
                  <span class="check">✓</span> {{ feat }}
                </li>
              </ul>
              <a href="#contact" class="btn-book">Book This Room</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .rooms {
      background: #fff;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      margin-bottom: 56px;

      .section-tag {
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #f4a261;
        margin-bottom: 10px;
      }

      h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        color: #1a1a2e;
        margin-bottom: 12px;
      }

      p {
        color: #888;
        font-size: 1rem;
        max-width: 560px;
        margin: 0 auto;
        line-height: 1.7;
      }
    }

    .rooms-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    .room-card {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      transition: transform 0.3s, box-shadow 0.3s;
      background: #fff;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 48px rgba(0,0,0,0.14);
      }
    }

    .room-image {
      position: relative;
      overflow: hidden;
      height: 220px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .room-badge {
      position: absolute;
      top: 16px;
      left: 16px;
      background: #f4a261;
      color: #fff;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .room-body {
      padding: 24px;
    }

    .room-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 6px;

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.25rem;
        color: #1a1a2e;
        flex: 1;
        margin-right: 12px;
      }
    }

    .room-price {
      text-align: right;
      flex-shrink: 0;

      .price {
        font-family: 'Playfair Display', serif;
        font-size: 1.4rem;
        font-weight: 700;
        color: #0077b6;
      }

      .per-night {
        display: block;
        font-size: 0.75rem;
        color: #aaa;
      }
    }

    .room-capacity {
      font-size: 0.82rem;
      color: #999;
      margin-bottom: 10px;
    }

    .room-desc {
      font-size: 0.88rem;
      color: #777;
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .room-features {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-bottom: 20px;

      li {
        font-size: 0.82rem;
        color: #666;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .check {
        color: #0077b6;
        font-weight: 700;
      }
    }

    .btn-book {
      display: block;
      text-align: center;
      padding: 12px;
      background: #f4a261;
      color: #fff;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;

      &:hover {
        background: #e07b3a;
        transform: translateY(-1px);
      }
    }

    @media (max-width: 960px) {
      .rooms-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .rooms-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class RoomsComponent {
  rooms: Room[] = [
    {
      name: 'Surf Dorm',
      description: 'Perfect for budget-conscious surfers. Share the stoke in our clean, social dormitory rooms with fellow wave riders.',
      price: 25,
      capacity: '1–4 guests per room',
      badge: 'Budget Pick',
      features: ['Bunk beds', 'Shared bathroom', 'Lockers', 'Fan & AC', 'Surf rack', 'Free WiFi'],
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80'
    },
    {
      name: 'Garden Bungalow',
      description: 'A private tropical retreat nestled in lush greenery, just a short walk from the beach and surf breaks.',
      price: 75,
      capacity: '2 guests',
      badge: 'Most Popular',
      features: ['King bed', 'Private bathroom', 'Garden view', 'AC & fan', 'Hammock', 'Free WiFi'],
      image: 'https://images.unsplash.com/photo-1470290378698-263fa7ca60ed?w=600&q=80'
    },
    {
      name: 'Ocean View Suite',
      description: 'Our premium suite with panoramic ocean views. Fall asleep to the sound of waves and wake up to stunning sunrises.',
      price: 140,
      capacity: '2 guests',
      badge: 'Premium',
      features: ['King bed', 'Ocean view', 'Private terrace', 'Ensuite bath', 'AC & fan', 'Free WiFi'],
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
    }
  ];
}
