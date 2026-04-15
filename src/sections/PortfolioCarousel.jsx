import { useEffect, useRef, useState } from 'react';
import './PortfolioCarousel.css';

const slides = [
  {
    title: 'Покраска квартиры в Москве',
    subtitle: 'Классика в светлых тонах',
    details: '87 м² · 4 комнаты · 3 дня',
  },
  {
    title: 'Офисы в бизнес-центре',
    subtitle: 'Серый и белый интерьер',
    details: '160 м² · open space · 5 дней',
  },
  {
    title: 'Фасад жилого дома',
    subtitle: 'Яркий акцентный фасад',
    details: '220 м² · фасадная краска · 6 дней',
  },
];

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const showSlide = index => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const handleTouchStart = e => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = e => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showSlide(activeIndex + 1);
      } else {
        showSlide(activeIndex - 1);
      }
    }
  };

  return (
    <section className="portfolio-carousel-section">
      <div className="portfolio-carousel-inner page">
        <div className="section-header">
          <span className="eyebrow">Наши работы</span>
          <h2>Примеры выполненных проектов</h2>
        </div>

        <div
          className="carousel"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-arrow carousel-arrow--left" onClick={() => showSlide(activeIndex - 1)} aria-label="Previous slide">
            ‹
          </button>

          {slides.map((slide, index) => (
            <article key={slide.title} className={`carousel-card ${index === activeIndex ? 'active' : ''}`}>
              <div className="carousel-visual" />
              <div className="carousel-copy">
                <p className="carousel-label">{slide.subtitle}</p>
                <h3>{slide.title}</h3>
                <p>{slide.details}</p>
              </div>
            </article>
          ))}

          <button className="carousel-arrow carousel-arrow--right" onClick={() => showSlide(activeIndex + 1)} aria-label="Next slide">
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-dot`}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => showSlide(index)}
              type="button"
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
