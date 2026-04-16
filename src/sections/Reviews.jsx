import { useEffect, useRef, useState } from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Алексей Воронов',
    role: 'Собственник квартиры, 94 м²',
    text: 'Покрасили всю квартиру за три дня — без запаха, без пыли, идеально ровно. Раньше думал, что такое возможно только в рекламе. Стены как бархат. Рекомендую всем, кто ценит своё время.',
    rating: 5,
  },
  {
    name: 'Марина Соколова',
    role: 'Дизайнер интерьеров',
    text: 'Работаю с командой уже на третьем объекте. Точность нанесения краски безупречная — даже сложные стыки и откосы выходят идеально. Клиенты всегда в восторге от результата.',
    rating: 5,
  },
  {
    name: 'Игорь Петрашев',
    role: 'Управляющий ТЦ «Меридиан»',
    text: 'Красили торговые площади 400 м² в выходные, чтобы не мешать арендаторам. Уложились в срок, убрали за собой, качество отличное. Работаем только с ними.',
    rating: 5,
  },
  {
    name: 'Светлана Кузьмина',
    role: 'Загородный дом, 180 м²',
    text: 'Заказали покраску фасада и всех внутренних помещений. Цена оказалась ниже, чем у конкурентов, а качество — выше. Приятно удивила аккуратность: ни одного пятна на полу.',
    rating: 5,
  },
  {
    name: 'Дмитрий Лапин',
    role: 'Прораб строительной компании',
    text: 'Безвоздушное нанесение — это совсем другой уровень. Работал с обычными малярами 10 лет, теперь подрядчик по покраске один. Скорость и равномерность покрытия несопоставимы.',
    rating: 5,
  },
  {
    name: 'Ольга Фёдорова',
    role: 'Владелец кафе',
    text: 'Перекрасили зал 120 м² за ночь — утром открылись без каких-либо запахов. Цвет лег ровно, точно в оттенок, как по брендбуку. Очень профессиональный подход.',
    rating: 5,
  },
];

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const showSlide = index => {
    setActiveIndex((index + reviews.length) % reviews.length);
  };

  const getPos = index => {
    const prev = (activeIndex - 1 + reviews.length) % reviews.length;
    const next = (activeIndex + 1) % reviews.length;
    if (index === activeIndex) return 'active';
    if (index === prev) return 'prev';
    if (index === next) return 'next';
    return 'hidden';
  };

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = e => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      showSlide(activeIndex + (diff > 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-inner page">
        <div className="section-header">
          <span className="eyebrow">Отзывы</span>
          <h2>Что говорят наши клиенты</h2>
        </div>
      </div>

      <div className="reviews-stage">
        <button
          className="reviews-arrow"
          onClick={() => showSlide(activeIndex - 1)}
          aria-label="Предыдущий отзыв"
        >
          ‹
        </button>

        <div
          className="reviews-track"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className={`review-card review-card--${getPos(index)}`}
            >
              <div className="review-stars">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <blockquote className="review-text">«{review.text}»</blockquote>
              <footer className="review-author">
                <span className="review-name">{review.name}</span>
                <span className="review-role">{review.role}</span>
              </footer>
            </article>
          ))}
        </div>

        <button
          className="reviews-arrow"
          onClick={() => showSlide(activeIndex + 1)}
          aria-label="Следующий отзыв"
        >
          ›
        </button>
      </div>

      <div className="reviews-dots page">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`reviews-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => showSlide(index)}
            type="button"
            aria-label={`Отзыв ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
