import { useState } from 'react';
import './Header.css';
import { BRAND_NAME, PHONE_LINK, PHONE_DISPLAY, MAX_LINK } from '../config/siteConfig';
import airlessmanImg from '../assets/airlessman.png';

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#hero">
          <img className="logo-icon" src={airlessmanImg} alt="" />
          {BRAND_NAME}
        </a>

        <nav className={`nav-list${open ? ' nav-list--open' : ''}`}>
          <a href="#services" onClick={close}>Услуги</a>
          <a href="#howwework" onClick={close}>Как работаем</a>
          <a href="#portfolio" onClick={close}>Портфолио</a>
          <a href="#reviews" onClick={close}>Отзывы</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a className="nav-cta-mobile" href={PHONE_LINK} onClick={close}>{PHONE_DISPLAY}</a>
          <a className="nav-cta-mobile nav-cta-max-mobile" href={MAX_LINK} onClick={close}>Написать в MAX</a>
        </nav>

        <a className="button header-cta header-cta--max header-cta--desktop" href={MAX_LINK}>Написать в MAX</a>
        <a className="button header-cta header-cta--desktop" href={PHONE_LINK}>{PHONE_DISPLAY}</a>

        <button
          className={`burger${open ? ' burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
