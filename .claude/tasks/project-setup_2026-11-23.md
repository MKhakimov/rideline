# Этап 0. Инфраструктура и порядок

Статус: завершено
Свет: 🟢 зелёный

Источник: `plan.md`, этап 0.

## Цель

Привести инфраструктуру проекта в порядок перед функциональной работой. Поведение сайта не меняется.

## Ветка

`refactor/project-setup` (согласовано)

## Чекбоксы

- [x] Создать ветку
- [x] Закоммитить текущие изменения: скрипт `typecheck`, замену `favicon.ico` на `icon.svg`, `CLAUDE.md`, `context.md`, `.claude/settings.json`
- [x] Удалить `package-lock.json`
- [x] Добавить в `package.json` поле `packageManager` с версией pnpm
- [x] Убрать ссылку на `AGENTS.md` из `CLAUDE.md`
- [x] Удалить `public/file.svg`, `public/globe.svg`, `public/window.svg`
- [x] `TelegramResources.tsx`: убрать неиспользуемый импорт `ArrowIcon` и закомментированный код
- [x] Prettier: конфиг с отступом 4 пробела, скрипты `format` / `format:check`, форматирование кода
- [x] Обновить `next` + `eslint-config-next` до 16.4.6, `react` + `react-dom` до 19.3.1
- [x] Обновить `README.md`: стек, команды, pnpm
- [x] Проверка: `pnpm lint`, `pnpm typecheck`, `pnpm build` без ошибок и предупреждений

## Решения

1. Ветка `refactor/project-setup` — подтверждена.
2. Ссылка на `AGENTS.md` из `CLAUDE.md` удаляется. Сам `AGENTS.md` генерирует `next dev` (блок `nextjs-agent-rules`); файл оставлен и закоммичен. Отключается через `agentRules: false` в `next.config.ts`.
3. Форматирование — Prettier, отступ 4 пробела.
4. `plan.md` и `.claude/tasks/` коммитятся в репозиторий.
5. Обновление Next.js и React (патчи) — в рамках этапа 0, на этой ветке. Мажорные обновления (`typescript`, `eslint`, `@types/node`), а также `motion` и `sass` — вне этапа.

## Примечания

- Перед удалением `public/*.svg` проверить поиском, что они нигде не используются.

## Дополнения из обсуждения

—
