# Этап 0. Инфраструктура и порядок

Статус: в работе
Свет: 🟢 зелёный

Источник: `plan.md`, этап 0.

## Цель
Привести инфраструктуру проекта в порядок перед функциональной работой. Поведение сайта не меняется.

## Ветка
`refactor/project-setup` (согласовано)

## Чекбоксы
- [x] Создать ветку
- [ ] Закоммитить текущие изменения: скрипт `typecheck`, замену `favicon.ico` на `icon.svg`, `CLAUDE.md`, `context.md`, `.claude/settings.json`
- [ ] Удалить `package-lock.json`
- [ ] Добавить в `package.json` поле `packageManager` с версией pnpm
- [ ] Убрать ссылку на `AGENTS.md` из `CLAUDE.md`
- [ ] Удалить `public/file.svg`, `public/globe.svg`, `public/window.svg`
- [ ] `TelegramResources.tsx`: убрать неиспользуемый импорт `ArrowIcon` и закомментированный код
- [ ] Prettier: конфиг с отступом 4 пробела, скрипты `format` / `format:check`, форматирование кода
- [ ] Обновить `README.md`: стек, команды, pnpm
- [ ] Проверка: `pnpm lint`, `pnpm typecheck`, `pnpm build` без ошибок и предупреждений

## Решения
1. Ветка `refactor/project-setup` — подтверждена.
2. `AGENTS.md` не создаётся, ссылка из `CLAUDE.md` удаляется.
3. Форматирование — Prettier, отступ 4 пробела.
4. `plan.md` и `.claude/tasks/` коммитятся в репозиторий.

## Примечания
- Перед удалением `public/*.svg` проверить поиском, что они нигде не используются.

## Дополнения из обсуждения
—
