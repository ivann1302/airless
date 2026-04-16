import { useState, useMemo } from 'react';
import { MAX_LINK } from '../config/siteConfig';
import './Calculator.css';
import { PRICE } from '../config/siteConfig';
import calculatemanImg from '../assets/calculateman.png';

const PRICE_PER_SQM = PRICE;
const SPEED_PER_HOUR = 45;
const HOURS_PER_DAY = 8;
const MIN_AREA = 10;
const MAX_AREA = 5000;
const SLIDER_STEP = 10;
// eslint-disable-next-line no-unused-vars
const SPEED_PER_DAY = SPEED_PER_HOUR * HOURS_PER_DAY; // 360 м²/день

function pluralizeDays(n) {
  const abs = Math.abs(n);
  if (abs % 100 >= 11 && abs % 100 <= 14) return `${n} дней`;
  switch (abs % 10) {
    case 1: return `${n} день`;
    case 2:
    case 3:
    case 4: return `${n} дня`;
    default: return `${n} дней`;
  }
}

function calcResult(area) {
  const effectiveArea = Math.max(Number(area) || MIN_AREA, MIN_AREA);
  const totalCost = Math.round(effectiveArea * PRICE_PER_SQM);
  const totalHours = effectiveArea / SPEED_PER_HOUR;
  const totalDays = totalHours / HOURS_PER_DAY;

  const timeString = pluralizeDays(Math.max(1, Math.ceil(totalDays)));

  return { totalCost, timeString };
}

export function Calculator() {
  const [area, setArea] = useState(100);

  const handleSlider = (e) => setArea(Number(e.target.value));

  const handleInput = (e) => {
    const val = e.target.value;
    if (val === '') { setArea(''); return; }
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) setArea(num);
  };

  const handleBlur = () => {
    const num = Number(area);
    if (!area || num < MIN_AREA) setArea(MIN_AREA);
    else if (num > MAX_AREA) setArea(MAX_AREA);
  };

  const { totalCost, timeString } = useMemo(() => calcResult(area), [area]);

  const sliderValue = Math.min(Math.max(Number(area) || MIN_AREA, MIN_AREA), MAX_AREA);
  const sliderPct = ((sliderValue - MIN_AREA) / (MAX_AREA - MIN_AREA)) * 100;

  return (
    <section id="calculator" className="calculator-section">
      <div className="section-inner">
        <div className="calculator-layout">
        <div className="section-header">
          <span className="eyebrow">Калькулятор</span>
          <h2>Рассчитайте стоимость покраски</h2>
        </div>

        <div className="calculator-card">
          <div className="calculator-input">
            <label className="calculator-label" htmlFor="calc-range">
              Площадь поверхности, м²
            </label>
            <div className="calculator-field-row">
              <input
                id="calc-range"
                type="range"
                min={MIN_AREA}
                max={MAX_AREA}
                step={SLIDER_STEP}
                value={sliderValue}
                onChange={handleSlider}
                className="calculator-slider"
                style={{ '--slider-pct': `${sliderPct}%` }}
              />
              <input
                type="number"
                value={area}
                min={MIN_AREA}
                max={MAX_AREA}
                onChange={handleInput}
                onBlur={handleBlur}
                className="calculator-number"
                aria-label="Площадь, м²"
              />
            </div>
            <div className="calculator-range-hints">
              <span>{MIN_AREA} м²</span>
              <span>{MAX_AREA.toLocaleString()} м²</span>
            </div>
          </div>

          <div className="calculator-results">
            <div className="calc-result-card">
              <div className="calc-result-label">Стоимость работ</div>
              <div className="calc-result-value">{totalCost.toLocaleString()} ₽</div>
              <div className="calc-result-hint">{PRICE_PER_SQM} ₽/м²</div>
            </div>
            <div className="calc-result-card">
              <div className="calc-result-label">Срок выполнения</div>
              <div className="calc-result-value">{timeString}</div>
            </div>
          </div>

          <a href={MAX_LINK}  className="button primary calculator-cta">
            Оставить заявку
          </a>
        </div>
        <img src={calculatemanImg} alt="" className="calculator-deco" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
