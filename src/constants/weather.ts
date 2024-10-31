export const WEATHER_CONDITIONS = {
  SUNNY: 'Солнечно',
  CLOUDY: 'Облачно',
  PARTLY_CLOUDY: 'Переменная облачность',
  RAINY: 'Дождь',
  THUNDERSTORM: 'Гроза',
  WINDY: 'Ветрено'
} as const;

export const SEA_CONDITIONS = {
  CALM: {
    label: 'Спокойное море',
    description: 'Идеально для плавания и снорклинга'
  },
  MODERATE: {
    label: 'Умеренное волнение',
    description: 'Подходит для серфинга'
  },
  ROUGH: {
    label: 'Неспокойное море',
    description: 'Купание не рекомендуется'
  }
} as const;

export const TIDE_CONDITIONS = {
  LOW: {
    label: 'Отлив',
    description: 'Хорошее время для прогулок по пляжу'
  },
  MEDIUM: {
    label: 'Средний уровень',
    description: 'Оптимально для всех активностей'
  },
  HIGH: {
    label: 'Прилив',
    description: 'Лучшее время для плавания'
  }
} as const;

export const MOON_PHASES = {
  NEW: 'Новолуние',
  WAXING_CRESCENT: 'Растущий серп',
  FIRST_QUARTER: 'Первая четверть',
  WAXING_GIBBOUS: 'Растущая луна',
  FULL: 'Полнолуние',
  WANING_GIBBOUS: 'Убывающая луна',
  LAST_QUARTER: 'Последняя четверть',
  WANING_CRESCENT: 'Убывающий серп'
} as const;