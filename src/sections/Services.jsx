import './Services.css';

const services = [
  {
    title: 'Покраска фасадов',
    description: 'Безвоздушное нанесение краски на фасады любой сложности. Равномерное покрытие, высокая производительность — до 1 500 м² в день.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="28" height="16" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 18L20 7L36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="15" y="26" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.75"/>
        <rect x="10" y="21" width="5" height="4" rx="0.75" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="25" y="21" width="5" height="4" rx="0.75" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Окраска промышленных объектов',
    description: 'Цеха, склады, производственные здания. Работаем с антикоррозийными, огнезащитными и специальными составами под ключ.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="20" width="30" height="14" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 20V15L13 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 20V13L21 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="25" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M29 12V8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <rect x="9" y="24" width="5" height="10" rx="0.75" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="18" y="24" width="5" height="10" rx="0.75" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Покраска кровли и металлоконструкций',
    description: 'Профессиональная обработка металлических поверхностей: кровля, фермы, резервуары. Долговечное покрытие с гарантией.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Скаты кровли */}
        <path d="M4 23L20 7L36 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Карниз */}
        <path d="M4 23H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Стены */}
        <path d="M7 23V35H33V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Горизонтальные швы металлочерепицы (рассчитаны по наклону скатов) */}
        <path d="M14 13H26" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M10 17H30" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M6 21H34" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        {/* Малярный валик (вне треугольника кровли, сверху справа) */}
        <rect x="25" y="5" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M33 7L36 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Косметический ремонт помещений',
    description: 'Стены и потолки офисов, торговых центров, жилых комплексов. Чистота, скорость, минимальное время простоя.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="7" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 14H33" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M14 14V33" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M23 22L27 18L31 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 24L21 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="25" r="1.25" fill="currentColor"/>
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__header">
          <span className="eyebrow">Что мы делаем</span>
          <h2>Наши услуги</h2>
        </div>
        <ul className="services__list">
          {services.map((service, i) => (
            <li className="services__item" key={i}>
              <div className="services__icon">{service.icon}</div>
              <div className="services__text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <img
        src="/airless/airlessservice.png"
        alt=""
        className="services__deco"
        aria-hidden="true"
      />
    </section>
  );
}
