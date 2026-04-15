import './StatsBar.css';

const stats = [
  { value: '200+', label: 'объектов сдано' },
  { value: '8', label: 'лет опыта' },
  { value: '1 500', label: 'м² в день' },
  { value: '150+', label: 'довольных клиентов' },
];

export function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__inner">
        {stats.map((stat, i) => (
          <div className="stats-bar__item" key={i}>
            <span className="stats-bar__value">{stat.value}</span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
