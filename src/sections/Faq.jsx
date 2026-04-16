import { useState } from 'react';
import './Faq.css';

const faqItems = [
  {
    question: 'Сколько времени занимает покраска помещения?',
    answer:
      'Время зависит от площади и сложности объекта. Обычно квартиры до 100 м² окрашиваются за 2-3 дня, коммерческие помещения — за 4-6 дней с учётом подготовки и вентиляции.',
  },
  {
    question: 'Нужно ли готовить объект перед работой?',
    answer:
      'Мы берём на себя уборку и подготовку: закрываем мебель, защищаем полы и поверхности, выполняем грунтовку там, где это необходимо.',
  },
  {
    question: 'Можно ли заказать покраску на выходных?',
    answer:
      'Да, мы работаем по договорённости и можем выполнять работы в удобное для вас время, включая вечерние смены и выходные.',
  },
  {
    question: 'Опасен ли пыльный туман при работе airless?',
    answer:
      'Нет. Airless-технология минимизирует разбрызгивание и грязный туман, поэтому поверхность остаётся чистой, а расход материалов контролируется.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-header">
        <span className="eyebrow">Частые вопросы</span>
        <h2>Ответы на основные вопросы клиентов</h2>
      </div>

      <div className="faq-list">
        {faqItems.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question} className={`faq-item ${open ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq-toggle">{open ? '−' : '+'}</span>
              </button>
              <div className="faq-answer" style={{ maxHeight: open ? '240px' : '0' }}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
