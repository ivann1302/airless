# Vite + React Landing Starter — Шаблон проекта

Этот файл описывает архитектуру и инфраструктуру проекта. Используй его как промпт для создания лендинга/сайта-визитки с другим контентом.

---

## Вопросы перед стартом

Перед генерацией кода обязательно спроси:

1. **Тематика бизнеса** — влияет на шрифт, цветовую палитру и набор секций
2. **Нужна ли форма → Telegram?** — если да, уточни поля формы
3. **Какие секции нужны?** — см. каталог секций ниже
4. **Есть ли фотографии / логотип?** — если нет, использовать placeholder
5. **Есть ли готовые тексты?** — если нет, генерировать по тематике

---

## Стек технологий

| Категория   | Технология                                    |
| ----------- | --------------------------------------------- |
| Сборщик     | Vite 6                                        |
| Framework   | React 19                                      |
| Язык        | TypeScript 5, строгий режим                   |
| Стили       | SCSS Modules + глобальные переменные/миксины  |
| Архитектура | Модульная — компонент и стили в одной папке   |
| Формы       | React Hook Form + Zod (только если нужно)     |
| Линтинг     | ESLint 9 + Prettier + Stylelint               |
| Уведомления | Telegram Bot API (только если нужна форма)    |
| Деплой      | GH Pages (`vite-plugin-gh-pages`)             |

---

## Структура проекта

```
src/
  config/
    siteConfig.ts         ← бренд, контакты, тексты (заполняется первым)
  sections/
    Header/
      Header.tsx
      Header.module.scss
    Hero/
      Hero.tsx
      Hero.module.scss
    About/
      About.tsx
      About.module.scss
    Services/
      Services.tsx
      Services.module.scss
    WhyUs/
      WhyUs.tsx
      WhyUs.module.scss
    StatsBar/
      StatsBar.tsx
      StatsBar.module.scss
    HowWeWork/
      HowWeWork.tsx
      HowWeWork.module.scss
    Reviews/
      Reviews.tsx
      Reviews.module.scss
    Gallery/
      Gallery.tsx
      Gallery.module.scss
    FAQ/
      FAQ.tsx
      FAQ.module.scss
    CTA/
      CTA.tsx
      CTA.module.scss
    Footer/
      Footer.tsx
      Footer.module.scss
  shared/
    ui/
      Button/
        Button.tsx
        Button.module.scss
      Card/
        Card.tsx
        Card.module.scss
      SectionTitle/
        SectionTitle.tsx
        SectionTitle.module.scss
    styles/
      _variables.scss     ← цвета, типографика, отступы
      _mixins.scss        ← breakpoints, flex-helpers, container
      _reset.scss         ← сброс стилей
    types.ts              ← PropsWithClassName и общие типы
  App.tsx
  main.tsx
  styles.scss             ← глобальный импорт (_reset, _variables)
```

---

## Конфиг: siteConfig.ts

Первый файл который нужно заполнить под проект:

```ts
// src/config/siteConfig.ts
export const BRAND_NAME = 'Название компании'
export const TAGLINE = 'Короткий слоган'
export const PHONE_DISPLAY = '+7 (999) 000-00-00'
export const PHONE_LINK = 'tel:+79990000000'
export const WHATSAPP_LINK = 'https://wa.me/79990000000'
export const ADDRESS = 'г. Москва, ул. ...'
export const FOOTER_NOTE = `© 2026 ${BRAND_NAME}. Все права защищены.`
```

Все тексты, телефоны и ссылки берутся только отсюда — не хардкодить в компонентах.

---

## Каталог секций

| Секция       | Обязательна    | Описание                                  |
| ------------ | -------------- | ----------------------------------------- |
| Header       | да             | логотип + телефон + кнопка CTA            |
| Hero         | да             | главный экран: заголовок, подзаголовок, CTA |
| About        | да             | о компании / услуге                       |
| Services     | рекомендуется  | список услуг, карточки с ценами           |
| WhyUs        | рекомендуется  | преимущества, буллеты, иконки             |
| StatsBar     | рекомендуется  | цифры: лет опыта, проектов, клиентов      |
| HowWeWork    | опционально    | этапы работы по шагам                     |
| Reviews      | рекомендуется  | отзывы клиентов, карточки или слайдер     |
| Gallery      | опционально    | фотогалерея работ                         |
| FAQ          | опционально    | частые вопросы / аккордеон                |
| CTA          | да             | призыв к действию + форма или кнопки      |
| Footer       | да             | контакты, копирайт                        |

Сразу создавай все нужные секции папками-заглушками.

---

## vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/repo-name/',  // имя репозитория для GH Pages
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/variables" as *; @use "@/shared/styles/mixins" as *;`,
      },
    },
  },
})
```

> Переменные и миксины доступны глобально во всех SCSS модулях — не нужно импортировать вручную.

---

## Дизайн-система (SCSS токены)

### Цвета

Сначала проанализируй тематику и предложи подходящую палитру. Палитра строится по ролям:

```scss
// src/shared/styles/_variables.scss

// Нейтральные
$color-black: ...;
$color-dark: ...;
$color-gray: ...;
$color-light: ...;
$color-white: #fff;

// Смысловые
$color-bg: ...;           // фон страницы
$color-bg-dark: ...;      // тёмные секции
$color-text: ...;         // основной текст
$color-text-muted: ...;   // второстепенный текст
$color-text-inv: ...;     // текст на тёмном фоне

// Акцент (1–2 цвета)
$color-accent: ...;       // основной акцент
$color-accent-hover: ...; // hover / active

// Граница
$color-border: ...;
```

Не делай больше 10 переменных. Всегда используй переменные — не хардкодь цвета.

### Типографика

Сначала проанализируй тематику и предложи подходящий Google Font с поддержкой кириллицы:

```scss
// Подключение через @import в styles.scss
$font-display: 'Название', sans-serif; // заголовки
$font-body: 'Название', sans-serif;    // основной текст

$font-size-base: 14px;
$font-size-md: 16px;
$font-size-lg: 20px;
$font-size-xl: 32px;
$font-size-2xl: 48px;
$font-size-3xl: 72px;
$font-size-hero: 96px;
```

### Breakpoints и миксины

```scss
// src/shared/styles/_mixins.scss

$bp-mobile: 480px;
$bp-tablet: 768px;
$bp-desktop: 1024px;

@mixin mobile  { @media (max-width: #{$bp-tablet - 1px}) { @content; } }
@mixin tablet  { @media (min-width: $bp-tablet) and (max-width: #{$bp-desktop - 1px}) { @content; } }
@mixin desktop { @media (min-width: $bp-desktop) { @content; } }

@mixin flex-center  { display: flex; align-items: center; justify-content: center; }
@mixin flex-between { display: flex; align-items: center; justify-content: space-between; }
@mixin container    { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
@mixin text-truncate { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
```

---

## API: форма заявки → Telegram

Только если нужна форма. Реализуется через Vite proxy + serverless function или edge function.

Схема данных (Zod):

```ts
{ name, phone, message?, _honeypot }
```

- Honeypot-поле против спам-ботов
- Отправка в Telegram через `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_IDS`
- Время отправки в часовом поясе Europe/Moscow

**Env-переменные:**

```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_IDS=id1,id2
```

---

## Шаблон компонента

```tsx
// ComponentName.tsx
import type { PropsWithClassName } from '@/shared/types'
import styles from './ComponentName.module.scss'

type Props = PropsWithClassName & {
  // props here
}

export function ComponentName({ className }: Props) {
  return <div className={`${styles.root} ${className ?? ''}`}></div>
}
```

```scss
// ComponentName.module.scss
.root {
  @include container;

  @include mobile {
    // mobile overrides
  }
}
```

---

## Переиспользуемые компоненты

Создавай сразу — экономит токены во всех секциях:

- **Button** — варианты `primary` / `secondary` / `ghost`, поддержка `href`
- **Card** — универсальная карточка для Services, WhyUs, Reviews
- **SectionTitle** — `eyebrow` (надпись над заголовком) + `h2`

---

## Как адаптировать под новый проект

1. Заполни `src/config/siteConfig.ts` — бренд, телефон, адрес
2. Определи цветовую палитру в `_variables.scss`
3. Подбери шрифты и подключи через Google Fonts в `styles.scss`
4. Выбери секции из каталога, создай папки-заглушки
5. Настрой `base` в `vite.config.ts` под имя репозитория
6. Если нужна форма — заполни `.env` и настрой поля под тематику

---

## Настройка Claude Code для проекта

Создай файл `CLAUDE.md` в корне каждого нового лендинга — Claude Code читает его автоматически при старте сессии:

```markdown
# [Название проекта]

Лендинг для [тематика]. Стек: Vite + React + TypeScript + SCSS Modules.

## Контекст

Читай STARTER-LANDING.md — там полная архитектура, шаблоны и принципы.

## Важно

- Все тексты и контакты только через `src/config/siteConfig.ts`
- Стили только через SCSS модули, без инлайн
- Переменные и миксины доступны глобально через vite.config.ts
- [Нужна форма → Telegram: да/нет]
- [Активные секции: Header, Hero, ...]
```

Дополнительно создай `.claude/settings.local.json` для разрешений:

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run dev)",
      "Bash(npm run build)",
      "Bash(npm run lint)",
      "Bash(npm run fix)"
    ]
  }
}
```

> `CLAUDE.md` коммитится в репо. `settings.local.json` — добавь в `.gitignore`.

---

## Принципы кода

- Пиши просто и читаемо, без комментариев
- YAGNI — не добавляй то, что не просили
- KISS — не усложняй без причины
- DRY — выноси повторяющееся в переиспользуемые компоненты
- Без инлайн-стилей — только SCSS модули
- Без `any` — правильные типы или `unknown`
