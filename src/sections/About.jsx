import { BRAND_NAME } from '../config/siteConfig';
import directorPhoto from '../../director.jpg';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about-section section-alt leader-section">
      <div className="section-header">
        <span className="eyebrow">Красим как для себя</span>
        <h2>Мы делаем идеальную покраску так, как если бы речь шла о нашем собственном доме. Только для коммерческих помещений &mdash; в десять раз требовательнее.</h2>
      </div>

      <div className="leader-grid">
        <div className="leader-photo">
          <img src={directorPhoto} alt={`Руководитель ${BRAND_NAME}`} className="leader-photo-img" />
        </div>

        <div className="leader-quote">
          <p className="quote-mark">&ldquo;</p>
          <p className="leader-quote-text">
            Потому что в чужом ресторане или офисе мы не имеем права на ошибку. Наши мастера не оставляют пятен, разводов и пыли. Мы выбрали airless-технологию не ради моды, а ради трёх вещей: скорости, ровного слоя и отсутствия грязного тумана.
          </p>
          <p className="leader-quote-text">
            {BRAND_NAME} &mdash; значит красим для людей, которые ценят своё время и чистоту на объекте.
          </p>
          <p className="quote-mark-close">&rdquo;</p>
          <p className="leader-name">Никита Терентьев, руководитель {BRAND_NAME}</p>
        </div>
      </div>
    </section>
  );
}
