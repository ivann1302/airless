import { useCallback, useEffect, useState } from 'react';
import repairPhoto from '../../repair.jpg';
import interiorPhoto from '../../photo.jpg';
import facadePhoto from '../../fasad.png';
import objectPhoto from '../../object-prom.png';
import './Gallery.css';

const galleryItems = [
  {
    src: repairPhoto,
    alt: 'Покраска жилого интерьера',
    title: 'Жилой интерьер',
    caption: 'Качественная покраска стен и потолков в квартире',
  },
  {
    src: interiorPhoto,
    alt: 'Покраска коммерческого пространства',
    title: 'Коммерческое помещение',
    caption: 'Равномерный слой без капель и следов',
  },
  {
    src: facadePhoto,
    alt: 'Покраска фасада здания',
    title: 'Фасадный проект',
    caption: 'Стойкое покрытие для внешних работ',
  },
  {
    src: objectPhoto,
    alt: 'Покраска объекта промышленного назначения',
    title: 'Промышленный объект',
    caption: 'Чёткая и чистая работа на сложных объектах',
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, closeModal]);

  return (
    <section className="section gallery-section" id="portfolio">
      <div className="section-header">
        <span className="eyebrow">Наши работы</span>
        <h2>Галерея выполненных объектов</h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <button
            key={item.alt}
            type="button"
            className="gallery-card"
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.src} alt={item.alt} />
            <div className="gallery-card-overlay">
              <div>
                <strong>{item.title}</strong>
                <p>{item.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <button type="button" className="gallery-modal-close" onClick={closeModal} aria-label="Закрыть" />
            <img
              src={galleryItems[activeIndex].src}
              alt={galleryItems[activeIndex].alt}
            />
            <div className="gallery-modal-text">
              <h3>{galleryItems[activeIndex].title}</h3>
              <p>{galleryItems[activeIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
