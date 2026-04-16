# Секция калькулятора покраски

**Дата:** 2026-04-16  
**Статус:** Approved

---

## Цель

Добавить интерактивную секцию-калькулятор на лендинг, которая позволяет клиенту самостоятельно прикинуть стоимость и сроки безвоздушной покраски по площади объекта.

---

## Расположение в странице

Вставить между `<WhyUs />` и `<About />` внутри `<div className="page">` в `App.jsx`.

---

## Файлы

- `src/sections/Calculator.jsx` — новый компонент
- `src/sections/Calculator.css` — стили
- `src/App.jsx` — импорт и вставка компонента

---

## Константы (заглушки, легко меняются)

| Константа        | Значение | Описание                        |
|------------------|----------|---------------------------------|
| `PRICE_PER_SQM`  | 230      | Стоимость работ, руб/м²         |
| `SPEED_PER_HOUR` | 45       | Производительность, м²/ч        |
| `HOURS_PER_DAY`  | 8        | Рабочих часов в день            |
| `MIN_AREA`       | 10       | Минимальная площадь заказа, м²  |
| `MAX_AREA`       | 5000     | Максимальная площадь слайдера   |
| `SLIDER_STEP`    | 10       | Шаг слайдера                    |

Производительность в день: `45 × 8 = 360 м²/день`.

---

## Компонент Calculator

### Состояние

```js
const [area, setArea] = useState(100); // number | ''
```

### Логика слайдера и поля ввода

- Слайдер `<input type="range" min={10} max={5000} step={10}>` и числовое поле синхронизированы двусторонне.
- При вводе в поле: разрешать пустую строку и числа ≥ 0.
- При `onBlur` числового поля: если значение пустое или < `MIN_AREA` — вернуть `MIN_AREA`; если > `MAX_AREA` — вернуть `MAX_AREA`.
- При изменении слайдера: напрямую устанавливать числовое значение (всегда в диапазоне).

### Вычисления (useMemo)

```js
const effectiveArea = Math.max(Number(area) || MIN_AREA, MIN_AREA);
const totalCost = Math.round(effectiveArea * PRICE_PER_SQM);

const totalHours = effectiveArea / SPEED_PER_HOUR;
const totalDays = totalHours / HOURS_PER_DAY;

// Отображение срока:
// < 1 дня → "~N ч" (округлить до целых часов)
// >= 1 дня → "N день/дня/дней" (склонение)
```

**Склонение «день»:**
- 1 → «день»
- 2–4 → «дня»
- 5+ (и 11–14) → «дней»

### JSX-структура

```
<section id="calculator" className="calculator-section">
  <div className="section-inner">
    <div className="section-header">
      <span className="eyebrow">Калькулятор</span>
      <h2>Рассчитайте стоимость покраски</h2>
    </div>
    <div className="calculator-card">
      <!-- Блок ввода -->
      <div className="calculator-input">
        <label>Площадь поверхности, м²</label>
        <div className="calculator-field-row">
          <input type="range" .../>
          <input type="number" .../>
        </div>
      </div>
      <!-- Результаты -->
      <div className="calculator-results">
        <div className="calc-result-card">
          <div className="calc-result-label">Стоимость работ</div>
          <div className="calc-result-value">{totalCost.toLocaleString()} ₽</div>
        </div>
        <div className="calc-result-card">
          <div className="calc-result-label">Срок выполнения</div>
          <div className="calc-result-value">{timeString}</div>
          <div className="calc-result-hint">из расчёта {SPEED_PER_HOUR} м²/ч</div>
        </div>
      </div>
      <!-- CTA -->
      <a href="#cta" className="button primary calculator-cta">Оставить заявку</a>
    </div>
  </div>
</section>
```

---

## Стили (Calculator.css)

- **Секция:** `background: var(--color-white)`, `padding: 72px 24px`
- **Карточка** `.calculator-card`: `background: var(--color-surface-muted)`, `border-radius: 20px`, `padding: 40px`, `max-width: 680px`, `margin: 0 auto`
- **Слайдер** `input[type=range]`: акцент `var(--color-accent)` для трека и thumb; `width: 100%`
- **Числовое поле**: `width: 90px`, выровнено по правому краю строки слайдера
- **Результаты** `.calculator-results`: `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 16px`, `margin-top: 32px`
- **Карточка результата** `.calc-result-card`: `background: var(--color-white)`, `border-radius: 16px`, `padding: 24px`, `border: 1px solid var(--color-border)`
- **Значение** `.calc-result-value`: `font-size: 2rem`, `font-weight: 700`, `color: var(--color-text-dark)`
- **CTA кнопка**: `display: block`, `width: fit-content`, `margin: 32px auto 0`, использует глобальный класс `.button.primary`

### Адаптив (≤ 600px)

- `.calculator-results` → `grid-template-columns: 1fr` (вертикальный стек)
- Числовое поле и слайдер — в колонку
- Паддинги карточки уменьшить до `24px`

---

## Интеграция в App.jsx

```jsx
import { Calculator } from './sections/Calculator';

// В <div className="page">:
<WhyUs />
<Calculator />   // ← вставить здесь
<About />
```

---

## Что не входит в скоуп

- Отправка данных калькулятора на сервер
- Учёт типа поверхности или материала
- Анимации при изменении значений
