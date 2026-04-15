import './Cta.css';
import { MAX_LINK, PHONE_LINK, PHONE_DISPLAY } from '../config/siteConfig';

export function Cta() {
  return (
    <section className="section cta-section">
      <div className="cta-card-v2">
        <div className="cta-text">
          <span>Готовы начать?</span>
          <h2>Получите бесплатный расчёт прямо сейчас</h2>
          <p>Заполните короткую форму или напишите нам — ответим в течение 30 минут.</p>
        </div>

        <div className="cta-actions">
          <a className="cta-btn-write" href={MAX_LINK} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Написать
          </a>

          <a className="cta-btn-phone" href={PHONE_LINK}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
