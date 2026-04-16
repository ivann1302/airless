import './HowWeWork.css';
import howWeWorkBg from '../../how-we-work.png';

const steps = [
  {
    number: '01',
    title: 'Заявка',
    text: 'Оставляете заявку — мы быстро свяжемся и уточним задачу.',
  },
  {
    number: '02',
    title: 'Замер',
    text: 'Приедем на объект, сделаем замеры и подготовим точный расчёт.',
  },
  {
    number: '03',
    title: 'Покраска',
    text: 'Выполняем безвоздушную покраску быстро, чисто и в оговоренные сроки.',
  },
  {
    number: '04',
    title: 'Сдача',
    text: 'Проверяем результат, убираем и передаём объект в идеальном состоянии.',
  },
];

export function HowWeWork() {
  return (
    <section id="howwework" className="howwework-section" style={{ '--howwework-bg-image': `url(${howWeWorkBg})` }}>
      <div className="howwework-overlay" />
      <div className="howwework-inner page">
        <div className="howwework-header">
          <p className="eyebrow">Как мы работаем</p>
          <h2>Простой порядок работы от заявки до сдачи</h2>
        </div>

        <div className="howwework-grid">
          {steps.map(step => (
            <article key={step.number} className="howwework-card">
              <span className="howwework-step">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
