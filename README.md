# 3D Quiz Game

## Описание

Интерактивное веб-приложение-викторина с 3D-графикой, поддержкой мультиязычности, модульной архитектурой и современным стеком технологий. Проект предназначен для обучения, развлечения и демонстрации современных подходов к разработке SPA.

---

## Основные возможности
- Многостраничный интерфейс (SPA)
- 3D-визуализация (Three.js или аналог)
- Мультиязычность (i18n)
- Гибкая архитектура: разделение на модули, страницы, сервисы
- Переиспользуемые UI-компоненты
- Централизованная обработка ошибок и логирование
- Поддержка темизации и адаптивности

---

## Структура проекта

```
├── public/                # Статические ассеты (иконки, изображения, favicon)
├── src/
│   ├── api/               # Слой для работы с внешними API
│   ├── config/            # Конфигурационные файлы (роутинг, i18n)
│   ├── modules/
│   │   ├── app/           # Корневой компонент приложения
│   │   ├── error/         # ErrorBoundary и обработка ошибок
│   │   ├── logger/        # Сервис логирования
│   │   ├── core/          # (root для app, error, logger)
│   │   ├── game/          # Модуль игровой логики
│   │   ├── menu/          # Модуль главного меню
│   │   ├── avatar/        # Модуль редактора аватара
│   │   ├── settings/      # Модуль настроек
│   │   ├── three/         # 3D-движок/визуализация
│   │   └── ui/            # Переиспользуемые UI-компоненты
│   ├── pages/             # Страницы приложения (каждая в своей папке)
│   ├── styles/            # Глобальные стили и переменные
│   └── main.jsx           # Точка входа приложения
├── dist/                  # Сборка (автоматически генерируется)
├── package.json           # Описание зависимостей и скриптов
├── vite.config.mjs        # Конфиг сборщика Vite
├── .eslintrc.json         # Настройки ESLint
├── .stylelintrc.json      # Настройки Stylelint
├── .babelrc               # Настройки Babel
├── .gitignore             # Исключения для git
└── README.md              # Описание проекта
```

---

## Технологии
- **React** — UI-библиотека
- **React Router** — маршрутизация
- **Three.js** — 3D-графика
- **i18next** — мультиязычность
- **Sass/SCSS** — стилизация
- **Vite** — сборка
- **ESLint, Stylelint** — качество кода
- **Husky** — git-хуки

---

## Быстрый старт

1. **Установка зависимостей**
   ```bash
   npm install
   ```
2. **Запуск в режиме разработки**
   ```bash
   npm run dev
   ```
3. **Сборка для продакшена**
   ```bash
   npm run build
   ```
4. **Запуск тестов** (если внедрены)
   ```bash
   npm test
   ```

---

## Рекомендации по развитию
- Используйте feature-based подход для новых крупных модулей
- Для новых UI-компонентов — размещайте их в `modules/ui` с документацией
- Для новых сервисов — создавайте отдельные поддиректории в `modules/core`
- Для тестов используйте Jest/Vitest, располагайте их рядом с тестируемым кодом
- Для локализации добавляйте новые языки в `config/i18n.js` и соответствующие файлы переводов
- Для интеграции с внешними API — создавайте отдельные файлы/модули в `api/`

---

## Контакты и поддержка
- Вопросы и предложения — через Issues или Pull Requests
- Документация по архитектуре — см. README в соответствующих папках

---

**Удачной разработки!** 