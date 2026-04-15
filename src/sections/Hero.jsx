import { BRAND_NAME } from '../config/siteConfig';
import heroBg from '../../airless-hero.jpeg';

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ '--hero-bg-image': `url(${heroBg})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
          <span className="eyebrow">{BRAND_NAME}</span>
          <h1>Безвоздушная покраска от 200 р/м²</h1>
          <p>
            Быстрая покраска стен и потолков по технологии распыления airless. Идеально для жилых и
            коммерческих объектов, где важны скорость и минимальная уборка.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Заказать расчёт</a>
            <a className="button ghost hero-ghost" href="#whyus">Почему мы</a>
          </div>
        </div>

      </div>
    </section>
  );
}
