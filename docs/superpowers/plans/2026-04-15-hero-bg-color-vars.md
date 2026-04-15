# Hero Background + CSS Color Variables Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Подключить `hero-airless.png` как фон Hero-секции и вынести все цвета проекта в CSS-переменные.

**Architecture:** Создать `public/` для статики, определить 19 CSS-переменных в `:root` в `styles.css`, заменить все хардкод-цвета во всех 5 CSS-файлах. JSX не трогаем — `var(--hero-bg-image)` уже прописан в `.hero-section`.

**Tech Stack:** Vite + React, чистый CSS (без препроцессоров)

---

## Files

| Файл | Действие |
|------|----------|
| `public/hero-airless.png` | Создать (копировать из корня) |
| `src/styles.css` | Добавить переменные в `:root`, заменить цвета |
| `src/sections/WhyUs.css` | Заменить цвета |
| `src/sections/Services.css` | Заменить цвета |
| `src/sections/StatsBar.css` | Заменить цвета |
| `src/sections/Header.css` | Заменить цвета |

---

### Task 1: Подключить фоновое изображение Hero

**Files:**
- Create: `public/hero-airless.png`

- [ ] **Step 1: Скопировать изображение в public/**

```bash
mkdir -p public
cp hero-airless.png public/hero-airless.png
```

Ожидаемый результат: файл `public/hero-airless.png` существует.

- [ ] **Step 2: Проверить, что файл на месте**

```bash
ls -lh public/hero-airless.png
```

Ожидаемый результат: файл есть, размер > 0.

- [ ] **Step 3: Commit**

```bash
git add public/hero-airless.png
git commit -m "feat: add hero-airless.png to public/"
```

---

### Task 2: Добавить CSS-переменные в :root

**Files:**
- Modify: `src/styles.css:1-7`

- [ ] **Step 1: Заменить блок `:root` на версию с переменными**

Заменить весь `:root { ... }` (строки 1–7) на:

```css
:root {
  color-scheme: light;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;

  /* Hero */
  --hero-bg-image: url('/hero-airless.png');

  /* Brand */
  --clr-brand: #1A56DB;
  --clr-primary: #2563eb;
  --clr-accent: #93b4ff;

  /* Dark tones */
  --clr-hero-bg: #0f1f4a;
  --clr-heading: #0D1B2A;

  /* Text */
  --clr-text: #111827;
  --clr-text-dark: #0f172a;
  --clr-text-slate: #1e293b;
  --clr-text-mid: #334155;
  --clr-text-muted: #475569;
  --clr-text-gray: #4B5563;
  --clr-text-subtle: #64748b;

  /* Backgrounds */
  --clr-bg: #f6f7fb;
  --clr-bg-surface: #F1F5F9;
  --clr-bg-input: #f8fafc;
  --clr-bg-hover: #f0f5ff;
  --clr-white: #ffffff;

  /* Borders */
  --clr-border: #e2e8f0;
  --clr-border-input: #cbd5e1;

  background: var(--clr-bg);
  color: var(--clr-text);
}
```

- [ ] **Step 2: Запустить dev-сервер и убедиться, что страница не сломалась**

```bash
npm run dev
```

Открыть `http://localhost:5173` — фон hero должен показывать фото (затемнённое оверлеем).

- [ ] **Step 3: Commit**

```bash
git add src/styles.css
git commit -m "feat: add CSS color variables and hero bg image to :root"
```

---

### Task 3: Заменить хардкод-цвета в styles.css

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Заменить цвета в body, header, кнопках, hero, карточках, форме, футере**

Применить все замены ниже (порядок не важен, все в одном файле):

**body (строка ~16):**
```css
body {
  margin: 0;
  min-height: 100vh;
  background: var(--clr-bg);
}
```

**`.site-header` (~строка 40):**
```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--clr-brand);
  width: 100%;
}
```

**`.logo` (~строка 57):**
```css
.logo {
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: 0.06em;
  color: var(--clr-white);
}
```

**`.header-cta` (~строка 63):**
```css
.header-cta {
  background: var(--clr-white);
  color: var(--clr-brand) !important;
  font-weight: 700;
  font-size: 0.9rem;
  min-height: 40px;
  padding: 0 20px;
  border-radius: 999px;
  white-space: nowrap;
}

.header-cta:hover {
  background: var(--clr-bg-hover);
  transform: none;
}
```

**`.hero-section` (~строка 77):**
```css
.hero-section {
  position: relative;
  width: 100%;
  background-color: var(--clr-hero-bg);
  background-image: var(--hero-bg-image);
  background-size: cover;
  background-position: center;
}
```

**`.eyebrow` (~строка 107):**
```css
.eyebrow {
  display: inline-flex;
  margin-bottom: 16px;
  color: var(--clr-accent);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
```

**`.hero-section h1` (~строка 117):**
```css
.hero-section h1 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.08;
  color: var(--clr-white);
}
```

**`.button.primary` (~строка 154):**
```css
.button.primary {
  background: var(--clr-primary);
  color: var(--clr-white);
}
```

**`.button.ghost` (~строка 159):**
```css
.button.ghost {
  background: transparent;
  color: var(--clr-text-slate);
  border-color: rgba(30, 41, 59, 0.16);
}
```

**`.card-label` (~строка 184):**
```css
.card-label {
  margin: 0 0 16px;
  display: inline-block;
  color: var(--clr-accent);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

**`.card-value` (~строка 194):**
```css
.card-value {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.45;
  color: var(--clr-white);
}
```

**`.hero-card li::before` (~строка 215):**
```css
.hero-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--clr-accent);
  font-weight: 700;
}
```

**`.section-alt` (~строка 229):**
```css
.section-alt {
  background: var(--clr-white);
  padding: 40px 32px;
  border-radius: 24px;
}
```

**`.cta-card` (~строка 242):**
```css
.cta-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 32px;
  border-radius: 24px;
  background: var(--clr-primary);
  color: var(--clr-white);
}
```

**`.about-text` (~строка 259):**
```css
.about-text {
  margin: 0 0 28px;
  max-width: 760px;
  color: var(--clr-text-mid);
}
```

**`.card, .feature, .contact-card` (~строка 274):**
```css
.card,
.feature,
.contact-card {
  padding: 24px;
  border-radius: 22px;
  background: var(--clr-white);
  border: 1px solid var(--clr-border);
}
```

**`.card p, .feature p, .contact-card p` (~строка 289):**
```css
.card p,
.feature p,
.contact-card p {
  margin: 0;
  color: var(--clr-text-muted);
}
```

**`label` (~строка 311):**
```css
label {
  display: grid;
  gap: 10px;
  color: var(--clr-text-dark);
  font-weight: 600;
}
```

**`input, textarea` (~строка 318):**
```css
input,
textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--clr-border-input);
  background: var(--clr-bg-input);
  color: var(--clr-text-dark);
}
```

**`.footer` (~строка 332):**
```css
.footer {
  margin: 64px 0 20px;
  text-align: center;
  color: var(--clr-text-subtle);
}
```

- [ ] **Step 2: Убедиться, что страница не сломалась визуально**

В браузере (`http://localhost:5173`) проверить: header синий, hero с фото, кнопки на месте, карточки белые.

- [ ] **Step 3: Commit**

```bash
git add src/styles.css
git commit -m "refactor: replace hardcoded colors with CSS variables in styles.css"
```

---

### Task 4: Заменить хардкод-цвета в CSS секций

**Files:**
- Modify: `src/sections/WhyUs.css`
- Modify: `src/sections/Services.css`
- Modify: `src/sections/StatsBar.css`
- Modify: `src/sections/Header.css`

- [ ] **Step 1: Обновить WhyUs.css**

Заменить содержимое файла:

```css
.whyus-section {
  background: var(--clr-white);
  padding: 72px 24px;
}

.whyus-section .section-inner {
  max-width: 1180px;
  margin: 0 auto;
}

.whyus-section .section-header {
  margin-bottom: 48px;
}

.whyus-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.whyus-card {
  background: var(--clr-bg-surface);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.whyus-icon {
  width: 48px;
  height: 48px;
  background: var(--clr-brand);
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--clr-white);
}

.whyus-card h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--clr-heading);
}

.whyus-card p {
  margin: 0;
  color: var(--clr-text-muted);
  line-height: 1.65;
}

@media (max-width: 768px) {
  .whyus-section {
    padding: 48px 16px;
  }

  .whyus-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .whyus-card {
    padding: 24px;
  }
}
```

- [ ] **Step 2: Обновить Services.css**

Заменить содержимое файла:

```css
.services {
  padding: 80px 0;
  background: var(--clr-white);
}

.services__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.services__header {
  text-align: center;
  margin-bottom: 56px;
}

.services__header h2 {
  margin-top: 8px;
}

.services__list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 0 16px;
}

.services__row {
  display: flex;
  align-items: stretch;
  gap: 0;
}

.services__row--reverse {
  flex-direction: row-reverse;
}

.services__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 56px 64px;
}

.services__text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--clr-heading);
  margin-bottom: 12px;
}

.services__text p {
  font-size: 1rem;
  color: var(--clr-text-gray);
  line-height: 1.7;
}

.services__visual {
  flex: 0 0 38%;
  min-height: 280px;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.services__visual-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .services {
    padding: 48px 0;
  }

  .services__row,
  .services__row--reverse {
    flex-direction: column;
  }

  .services__text {
    padding: 32px 24px;
  }

  .services__visual {
    width: 100%;
    min-height: 200px;
  }
}
```

- [ ] **Step 3: Обновить StatsBar.css**

Заменить содержимое файла:

```css
.stats-bar {
  background: var(--clr-bg-surface);
  padding: 40px 0;
}

.stats-bar__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-around;
  gap: 24px;
  flex-wrap: wrap;
}

.stats-bar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 140px;
}

.stats-bar__value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--clr-brand);
  line-height: 1;
}

.stats-bar__label {
  font-size: 0.95rem;
  color: var(--clr-text-gray);
  text-align: center;
}

@media (max-width: 768px) {
  .stats-bar__inner {
    gap: 32px;
  }

  .stats-bar__value {
    font-size: 2rem;
  }
}
```

- [ ] **Step 4: Обновить Header.css**

Заменить содержимое файла:

```css
/* ── Nav (desktop) ─────────────────────────────── */
.nav-list {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-list a {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  transition: color 0.15s;
}

.nav-list a:hover {
  color: var(--clr-white);
}

/* Кнопка "Позвонить" внутри nav — только в мобильном меню */
.nav-cta-mobile {
  display: none !important;
}

/* Кнопка "Позвонить" в хедере — только на десктопе */
.header-cta--desktop {
  display: inline-flex;
}

/* ── Burger ─────────────────────────────────────── */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s;
}

.burger:hover {
  background: rgba(255, 255, 255, 0.12);
}

.burger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--clr-white);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

.burger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger--open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.burger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile ─────────────────────────────────────── */
@media (max-width: 768px) {
  /* Бургер виден */
  .burger {
    display: flex;
  }

  /* Кнопка в строке хедера — скрыта */
  .header-cta--desktop {
    display: none !important;
  }

  /* Nav — скрыт по умолчанию, виден когда открыт */
  .nav-list {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: var(--clr-brand);
    padding: 8px 24px 24px;
    gap: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .nav-list--open {
    display: flex;
  }

  .nav-list a {
    padding: 14px 0;
    font-size: 1.05rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Кнопка "Позвонить" внутри открытого меню */
  .nav-list--open .nav-cta-mobile {
    display: flex !important;
    justify-content: center;
    margin-top: 16px;
    background: var(--clr-white);
    color: var(--clr-brand) !important;
    font-weight: 700;
    border-radius: 999px;
    padding: 14px 24px;
    border-bottom: none !important;
    min-height: 50px;
    align-items: center;
    text-align: center;
  }
}
```

- [ ] **Step 5: Проверить страницу визуально**

В браузере (`http://localhost:5173`) проверить все секции: header, hero (фото + оверлей), stats-bar, services, whyus, cta, footer, форма — ничего не должно измениться визуально по сравнению с исходным состоянием.

- [ ] **Step 6: Убедиться, что хардкод-цветов не осталось**

```bash
grep -r "#[0-9a-fA-F]\{3,6\}" src/sections/WhyUs.css src/sections/Services.css src/sections/StatsBar.css src/sections/Header.css src/styles.css
```

Ожидаемый результат: вывод пустой (или только `rgba(...)` значения, которые мы оставили намеренно).

- [ ] **Step 7: Commit**

```bash
git add src/sections/WhyUs.css src/sections/Services.css src/sections/StatsBar.css src/sections/Header.css
git commit -m "refactor: replace hardcoded colors with CSS variables in all section CSS files"
```
