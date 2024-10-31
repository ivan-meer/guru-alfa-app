## Phuket Guru - Руководство разработчика

### Установка и настройка

```bash
# Клонирование репозитория
git clone https://github.com/your-repo/phuket-guru.git

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка проекта
npm run build
```

### Структура проекта

```
src/
├── components/        # UI компоненты
│   ├── DirectionCard.tsx
│   ├── DirectionsSlider.tsx
│   ├── WeatherWidget.tsx
│   └── ...
├── pages/            # Страницы
│   ├── Home.tsx
│   ├── LocationDetails.tsx
│   └── ...
├── data/             # Данные
│   ├── directions.ts
│   ├── categories.ts
│   └── ...
├── types/            # TypeScript типы
├── context/          # React контекст
└── utils/            # Утилиты
```

### Ключевые компоненты

#### DirectionsSlider
```typescript
// Слайдер направлений с горизонтальной прокруткой
<DirectionsSlider />
```

#### WeatherWidget
```typescript
// Виджет погоды с данными о море
<WeatherWidget />
```

#### ThemeToggle
```typescript
// Переключатель темы
<ThemeToggle />
```

### Стилизация

Проект использует Tailwind CSS с кастомными настройками:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        // ...
      }
    }
  }
}
```

### Анимации

Используется Framer Motion для анимаций:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
>
  // content
</motion.div>
```

### Работа с данными

Данные хранятся в TypeScript файлах:

```typescript
// types/index.ts
export interface Direction {
  id: DirectionType;
  name: string;
  description: string;
  // ...
}
```

### Лучшие практики

1. **Компоненты**
   - Используйте TypeScript
   - Следуйте принципу единой ответственности
   - Документируйте пропсы

2. **Стили**
   - Используйте Tailwind утилиты
   - Следуйте мобильному подходу
   - Поддерживайте темную тему

3. **Производительность**
   - Используйте memo где нужно
   - Оптимизируйте ре-рендеры
   - Следите за размером бандла

### Тестирование

```bash
# Запуск тестов
npm run test

# Запуск с покрытием
npm run test:coverage
```

### Деплой

```bash
# Сборка
npm run build

# Предпросмотр
npm run preview
```

### Контрибьютинг

1. Форкните репозиторий
2. Создайте ветку для фичи
3. Внесите изменения
4. Создайте PR

### Полезные ресурсы

- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://react.dev)