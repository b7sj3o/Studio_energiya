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
   Готові файли будуть у папці `dist/`. Їх можна викласти на будь-який хостинг.

### GitHub Pages

1. Збери проєкт: `npm run build`
2. Включи GitHub Pages у репо (Settings → Pages → Source: deploy from branch), гілка зазвичай `gh-pages` або `main`, папка `/ (root)` або `docs` з вмістом `dist`.
3. Назва репозиторію має збігатися з налаштуванням у `vite.config.js`: за замовчуванням це `Studio_energiya`. Якщо репо називається інакше, збирай так:
   ```bash
   VITE_BASE_URL=/твій-репо/ npm run build
   ```
4. Посилання будуть з хешем: `https://user.github.io/Studio_energiya/#/` та `...#/trainer/ludmila` — це нормально для GitHub Pages.

## Структура

- `src/pages/Home.jsx` — головна сторінка (тренери, нагороди, галерея, FAQ, контакти)
- `src/pages/Trainer.jsx` — сторінка тренера за ID (`/trainer/ludmila`, `/trainer/anastasia`, `/trainer/yulia`)
- `src/data.js` — дані про тренерів, фото студії та нагороди
- `public/static/` — зображення (лого, фото тренерів, кубки, галерея)

Фото з папки `static/` вже скопійовані в `public/static/`. Якщо додаєте нові зображення, кладіть їх у `public/static/`.
