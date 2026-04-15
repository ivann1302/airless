import './WhyUs.css';

const ITEMS = [
  {
    icon: '🖌️',
    title: 'Технология airless',
    text: 'Безвоздушное распыление без следов кисти и валика — идеально ровное покрытие на любой поверхности.',
  },
  {
    icon: '🧹',
    title: 'Чистый объект',
    text: 'Защитная плёнка на полу и мебели, минимум пыли и грязи. Уборка после работ включена в стоимость.',
  },
  {
    icon: '📅',
    title: 'Реальный срок',
    text: 'Дата выезда и окончание работ фиксируются в договоре. Никаких «позвоним, когда освободимся».',
  },
  {
    icon: '📜',
    title: 'Гарантия качества',
    text: 'Даём письменную гарантию на материалы и работы. При любых замечаниях — бесплатно устраняем.',
  },
];

export function WhyUs() {
  return (
    <section id="whyus" className="whyus-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="eyebrow">Наши приемущества</span>
          <h2>Почему выбирают нас</h2>
        </div>
        <div className="whyus-grid">
          {ITEMS.map((item) => (
            <article key={item.title} className="whyus-card">
              <div className="whyus-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
