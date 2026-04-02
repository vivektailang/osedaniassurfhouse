import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  icon: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

@Component({
  selector: 'app-activities',
  imports: [CommonModule],
  template: `
    <section class="activities" id="activities">
      <div class="activities-bg"></div>
      <div class="container">
        <div class="section-title light">
          <p class="section-tag">What We Offer</p>
          <h2>Activities & Experiences</h2>
          <p>From beginner surf lessons to advanced coaching and island exploration, 
             we have something for every type of adventurer.</p>
        </div>

        <div class="activities-grid">
          <div class="activity-card" *ngFor="let act of activities">
            <div class="activity-icon">{{ act.icon }}</div>
            <h3>{{ act.title }}</h3>
            <p>{{ act.description }}</p>
            <div class="activity-meta">
              <span class="meta-item">⏱ {{ act.duration }}</span>
              <span class="meta-item level">{{ act.level }}</span>
            </div>
          </div>
        </div>

        <div class="waves-banner">
          <div class="waves-content">
            <h3>Lagundri Bay – The Crown Jewel</h3>
            <p>
              Just 5 minutes from our surf house lies Lagundri Bay, one of the world's most
              consistently perfect right-hand point breaks. Rated among the top 10 surf spots
              globally, it breaks year-round with best conditions from April to October.
            </p>
            <a href="#contact" class="btn-waves">Plan Your Surf Trip</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .activities {
      position: relative;
      background: linear-gradient(135deg, #0a1628 0%, #1a4c7a 60%, #0077b6 100%);
      color: #fff;
    }

    .activities-bg {
      position: absolute;
      inset: 0;
      background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80');
      background-size: cover;
      background-position: center;
      opacity: 0.12;
    }

    .container {
      position: relative;
      z-index: 1;
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
        color: #fff;
        margin-bottom: 12px;
      }

      p {
        color: rgba(255,255,255,0.7);
        font-size: 1rem;
        max-width: 560px;
        margin: 0 auto;
        line-height: 1.7;
      }
    }

    .activities-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 48px;
    }

    .activity-card {
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 16px;
      padding: 28px 24px;
      transition: transform 0.3s, background 0.3s;

      &:hover {
        transform: translateY(-4px);
        background: rgba(255,255,255,0.13);
      }

      .activity-icon {
        font-size: 2.5rem;
        margin-bottom: 16px;
      }

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
        color: #fff;
        margin-bottom: 10px;
      }

      p {
        font-size: 0.88rem;
        color: rgba(255,255,255,0.7);
        line-height: 1.7;
        margin-bottom: 16px;
      }
    }

    .activity-meta {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .meta-item {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      background: rgba(255,255,255,0.1);
      padding: 4px 10px;
      border-radius: 20px;

      &.level {
        color: #48cae4;
        border: 1px solid rgba(72, 202, 228, 0.3);
        background: rgba(72, 202, 228, 0.1);
      }
    }

    .waves-banner {
      background: rgba(244,162,97,0.15);
      border: 1px solid rgba(244,162,97,0.3);
      border-radius: 16px;
      padding: 40px 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
    }

    .waves-content {
      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 10px;
      }

      p {
        font-size: 0.92rem;
        color: rgba(255,255,255,0.75);
        line-height: 1.7;
        max-width: 560px;
        margin-bottom: 20px;
      }
    }

    .btn-waves {
      display: inline-block;
      padding: 12px 28px;
      background: #f4a261;
      color: #fff;
      border-radius: 50px;
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
      white-space: nowrap;
      flex-shrink: 0;

      &:hover {
        background: #e07b3a;
        transform: translateY(-2px);
      }
    }

    @media (max-width: 960px) {
      .activities-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .waves-banner {
        flex-direction: column;
        padding: 28px 24px;
        text-align: center;
      }
    }

    @media (max-width: 600px) {
      .activities-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ActivitiesComponent {
  activities: Activity[] = [
    {
      icon: '🏄',
      title: 'Beginner Surf Lessons',
      description: 'Learn the fundamentals of surfing with our certified instructors on safe, beginner-friendly waves.',
      duration: '2 hours',
      level: 'All levels'
    },
    {
      icon: '🌊',
      title: 'Advanced Surf Coaching',
      description: 'Take your surfing to the next level with personalized video analysis and coaching at world-class breaks.',
      duration: '3 hours',
      level: 'Intermediate+'
    },
    {
      icon: '🚤',
      title: 'Boat Trips to Secret Spots',
      description: 'Discover hidden surf spots around Nias Island accessible only by boat, away from the crowds.',
      duration: 'Full day',
      level: 'Intermediate+'
    },
    {
      icon: '🧘',
      title: 'Yoga & Meditation',
      description: 'Morning yoga sessions on our ocean-view deck to stretch, strengthen, and center your mind before surfing.',
      duration: '1 hour',
      level: 'All levels'
    },
    {
      icon: '🤿',
      title: 'Snorkeling & Diving',
      description: 'Explore the spectacular coral reefs and marine life surrounding Nias Island in crystal-clear waters.',
      duration: '3–4 hours',
      level: 'All levels'
    },
    {
      icon: '🌴',
      title: 'Island & Cultural Tours',
      description: 'Explore Nias\'s fascinating megalithic culture, traditional villages, and breathtaking natural landscapes.',
      duration: 'Full day',
      level: 'All levels'
    }
  ];
}
