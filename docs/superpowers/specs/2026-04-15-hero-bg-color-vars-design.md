# Hero Background + CSS Color Variables

**Date:** 2026-04-15

## Goals

1. Подключить `hero-airless.png` как фон секции Hero
2. Вынести все цвета проекта в CSS-переменные

---

## Hero Background

`.hero-section` в `styles.css` уже использует `var(--hero-bg-image)` — переменная есть, но не определена.

**Решение:**
- Скопировать `hero-airless.png` → `public/hero-airless.png`
- Добавить в `:root` в `styles.css`: `--hero-bg-image: url('/hero-airless.png')`

Оверлей (`rgba(10, 22, 60, 0.72)`) уже есть — фото будет затемнено как надо.

---

## CSS Color Variables

Добавить в `:root` в `styles.css`, затем заменить все хардкод-цвета во всех 5 файлах.

```css
/* Бренд */
--clr-brand: #1A56DB;
--clr-primary: #2563eb;
--clr-accent: #93b4ff;

/* Тёмные тона */
--clr-hero-bg: #0f1f4a;
--clr-heading: #0D1B2A;

/* Текст */
--clr-text: #111827;
--clr-text-dark: #0f172a;
--clr-text-mid: #334155;
--clr-text-muted: #475569;
--clr-text-gray: #4B5563;
--clr-text-subtle: #64748b;

/* Фоны */
--clr-bg: #f6f7fb;
--clr-bg-surface: #F1F5F9;
--clr-bg-input: #f8fafc;
--clr-bg-hover: #f0f5ff;
--clr-white: #ffffff;

/* Границы */
--clr-border: #e2e8f0;
--clr-border-input: #cbd5e1;
```

`rgba()`-значения с прозрачностью не меняем — они уже читаемы.

---

## Затронутые файлы

| Файл | Действие |
|------|----------|
| `src/styles.css` | Добавить переменные в `:root`, заменить все цвета |
| `src/sections/WhyUs.css` | Заменить цвета на переменные |
| `src/sections/Services.css` | Заменить цвета на переменные |
| `src/sections/StatsBar.css` | Заменить цвета на переменные |
| `src/sections/Header.css` | Заменить цвета на переменные |
| `public/` | Создать папку, скопировать `hero-airless.png` |
