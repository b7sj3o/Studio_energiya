# Studio Energiya (React)

Сайт студії танців та фітнесу, зроблений на React + Vite.

## Як запустити

1. Встановити залежності:
   ```bash
   npm install
   ```

2. Запустити сервер для розробки:
   ```bash
   npm run dev
   ```
   Сайт відкриється на http://localhost:5173

3. Зібрати для продакшену:
   ```bash
   npm run build
   ```
   Готові файли будуть у папці `dist/`. Їх можна викласти на Vercel, Netlify тощо.

## Структура

- `src/pages/Home.jsx` — головна сторінка (тренери, нагороди, галерея, FAQ, контакти)
- `src/pages/Trainer.jsx` — сторінка тренера за ID (`/trainer/ludmila`, `/trainer/anastasia`, `/trainer/yulia`)
- `src/data.js` — дані про тренерів, фото студії та нагороди
- `public/static/` — зображення (лого, фото тренерів, кубки, галерея)

Фото з папки `static/` вже скопійовані в `public/static/`. Якщо додаєте нові зображення, кладіть їх у `public/static/`.
