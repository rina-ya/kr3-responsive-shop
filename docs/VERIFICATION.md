# Проверка КР №3

Дата: 6 ноября 2026 года. Google Chrome 156.0.8078.80, Windows. Lighthouse 13.6.0.

| Проверка | Результат |
| --- | --- |
| HTML-валидация | 12 страниц, ошибок html-validate:standard нет |
| Ссылки, якоря, srcset | Все локальные цели существуют |
| Viewport и стили | На 12 страницах viewport и style.css → responsive.css |
| Семантика | Один main и h1 на странице, уникальные title |
| Адаптивность | 12 страниц × 5 ширин = 60 проверок, без горизонтального скролла страницы |
| Формы | Одна колонка до 640 px, две после; мобильные поля от 50 px |
| Характеристики | Карточки до 640 px, таблица после |
| axe-core | 24 проверки: 12 страниц при 360 и 1440 px, нарушений выбранных правил WCAG 2/2.1/2.2 A/AA нет |
| Lighthouse Accessibility | Главная 100, каталог 100, заявка 100 |
| Ошибки JavaScript | Не обнаружены |

Проверены сценарии:

- Native mobile menu with keyboard; skip-link moves focus to main
- CSS category selection and reset; collapsible filter
- Comparison table scrolls with keyboard inside its region
- Modal keeps background controls out of Tab order, closes with Escape and returns focus
- Order and contact forms validate without JavaScript; no query or network submission
- Reduced-motion preference respected

JSON-результаты: [browser-verification.json](browser-verification.json). Скриншоты пяти основных страниц на 360, 768 и 1440 px находятся в [screenshots](screenshots/). Lighthouse HTML/JSON — в [lighthouse](../lighthouse/).

Автоматические проверки дополнены ручными сценариями из [CHECKLIST.md](CHECKLIST.md). Оценка Lighthouse относится к автоматическим аудитам, а не к полной проверке всех возможных пользовательских ситуаций.
