import { PHONE_LINK, PHONE_DISPLAY } from '../config/siteConfig';
import './CallButton.css';

export function CallButton() {
  return (
    <a href={PHONE_LINK} className="call-btn" aria-label={`Позвонить: ${PHONE_DISPLAY}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
      </svg>
    </a>
  );
}
