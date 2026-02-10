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

Деплой через **GitHub Actions** (офіційний спосіб для Vite):

1. У репо: **Settings → Pages → Build and deployment → Source** вибери **GitHub Actions**.
2. Пуш у гілку `main` — workflow збере проєкт і опублікує папку `dist/`. Сайт буде за адресою `https://<user>.github.io/<repo>/`.
3. Якщо репо не `Studio_energiya`, нічого міняти не потрібно: `base` підставляється з назви репозиторію автоматично.

## Структура

- `src/pages/Home.jsx` — головна сторінка (тренери, нагороди, галерея, FAQ, контакти)
- `src/pages/Trainer.jsx` — сторінка тренера за ID (`/trainer/ludmila`, `/trainer/anastasia`, `/trainer/yulia`)
- `src/data.js` — дані про тренерів, фото студії та нагороди
- `public/static/` — зображення (лого, фото тренерів, кубки, галерея)

Фото з папки `static/` вже скопійовані в `public/static/`. Якщо додаєте нові зображення, кладіть їх у `public/static/`.
