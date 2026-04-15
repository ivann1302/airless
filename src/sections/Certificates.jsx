import { useCallback, useEffect, useState } from 'react';
import cert1 from '../../cert1.jpg';
import cert2 from '../../cert2.jpg';
import cert3 from '../../cert3.jpg';
import cert4 from '../../cert4.jpg';
import './Certificates.css';

const certificates = [
  { src: cert1, alt: 'Сертификат 1', title: 'Сертификат качества' },
  { src: cert2, alt: 'Сертификат 2', title: 'Сертификат безопасности' },
  { src: cert3, alt: 'Сертификат 3', title: 'Сертификат соответствия' },
  { src: cert4, alt: 'Сертификат 4', title: 'Сертификат гарантий' },
];

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = event => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, closeModal]);

  return (
    <section className="section certificates-section">
      <div className="section-header">
        <span className="eyebrow">Сертификаты</span>
        <h2>Надёжность подтверждена документами</h2>
      </div>

      <div className="certificates-grid">
        {certificates.map((item, index) => (
          <button
            key={item.alt}
            type="button"
            className="certificate-card"
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.src} alt={item.alt} />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="certificate-modal-content" onClick={e => e.stopPropagation()}>
            <button className="certificate-modal-close" type="button" onClick={closeModal} aria-label="Закрыть" />
            <img src={certificates[activeIndex].src} alt={certificates[activeIndex].alt} />
          </div>
        </div>
      )}
    </section>
  );
}
