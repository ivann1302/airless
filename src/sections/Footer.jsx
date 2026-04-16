import './Footer.css';
import { BRAND_NAME, PHONE_LINK, PHONE_DISPLAY, MAX_LINK, FOOTER_NOTE } from '../config/siteConfig';
import footerHero from '../../footer-hero.png';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo">{BRAND_NAME}</span>
          <p>Безвоздушная по Москве и Московской области.</p>
        </div>

        <div className="footer-links">
          <a href={PHONE_LINK}>Телефон: {PHONE_DISPLAY}</a>
          <a href={MAX_LINK} target="_blank" rel="noreferrer">
            Написать в MAX
          </a>
        </div>
      </div>
      <p className="footer-note">{FOOTER_NOTE}</p>
      <img src={footerHero} alt="" className="footer-hero-img" />
    </footer>
  );
}
