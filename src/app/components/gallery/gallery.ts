import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  image: string;
  caption: string;
  span?: 'wide' | 'tall';
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  template: `
    <section class="gallery" id="gallery">
      <div class="container">
        <div class="section-title">
          <p class="section-tag">Memories</p>
          <h2>Life at the Surfhouse</h2>
          <p>A glimpse of the experiences, waves, and moments that make Oseda Nias Surfhouse special.</p>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item" *ngFor="let item of gallery" [class.wide]="item.span === 'wide'" [class.tall]="item.span === 'tall'">
            <img [src]="item.image" [alt]="item.caption" loading="lazy" />
            <div class="overlay">
              <p>{{ item.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery {
      background: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      margin-bottom: 48px;

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

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 220px;
      gap: 16px;
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      cursor: pointer;

      &.wide {
        grid-column: span 2;
      }

      &.tall {
        grid-row: span 2;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
        display: flex;
        align-items: flex-end;
        padding: 16px;
        opacity: 0;
        transition: opacity 0.3s;

        p {
          color: #fff;
          font-size: 0.85rem;
          font-weight: 500;
        }
      }

      &:hover {
        img {
          transform: scale(1.06);
        }

        .overlay {
          opacity: 1;
        }
      }
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 180px;
      }

      .gallery-item.wide {
        grid-column: span 2;
      }
    }

    @media (max-width: 480px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        grid-auto-rows: 200px;
      }

      .gallery-item.wide,
      .gallery-item.tall {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  `]
})
export class GalleryComponent {
  gallery: GalleryItem[] = [
    {
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
      caption: 'Perfect barrels at Lagundri Bay',
      span: 'wide'
    },
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      caption: 'Pristine Nias coastline',
      span: 'tall'
    },
    {
      image: 'https://images.unsplash.com/photo-1599686301896-ba05e63de66e?w=400&q=80',
      caption: 'Early morning surf session'
    },
    {
      image: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&q=80',
      caption: 'Sunset at the surfhouse'
    },
    {
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
      caption: 'Underwater world of Nias'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      caption: 'Mountain backdrop, ocean in front',
      span: 'wide'
    },
    {
      image: 'https://images.unsplash.com/photo-1474978528675-4a50a4508dc6?w=400&q=80',
      caption: 'Our ocean view bungalow'
    }
  ];
}
