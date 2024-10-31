import { Direction } from '../types';

export const directions: Direction[] = [
  {
    id: "HKT",
    name: "ОСТРОВ ПХУКЕТ",
    slug: "phuket",
    thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2000&q=80",
    description: "Откройте для себя остров Пхукет, рай Таиланда с нетронутыми пляжами, бирюзовыми водами и яркой ночной жизнью. Исследуйте оживленные улицы Патонга, расслабьтесь на пляже Карон или насладитесь восхитительной тайской кухней.",
    rating: 4.9,
    activities: 150,
    distance: "40 км",
    duration: "7-10 дней",
    locations: [
      {
        id: "KRN",
        title: "Пляж Карон",
        slug: "karon-beach",
        thumbnail: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80",
        horizontal_cover: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=1600&q=80",
        description: "Один из самых длинных пляжей Пхукета с белоснежным песком и потрясающими закатами. Идеальное место для плавания и снорклинга.",
        directionId: "HKT",
        points: [
          {
            id: "KRN-1",
            title: "Обзорная Площадка Карон",
            category: "ОБЗОРНАЯ ПЛОЩАДКА",
            image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=800&q=80",
            description: "Смотровая площадка Карон предлагает одни из самых впечатляющих видов на Пхукете. Позволяет увидеть сразу три знаменитых пляжа острова: Kata, Kata Noi и Карон.",
            locationId: "KRN"
          },
          {
            id: "KRN-2",
            title: "Храм Кaron",
            category: "ИСТОРИЯ И КУЛЬТУРА",
            image: "https://images.unsplash.com/photo-1553604376-0e89c4b5c8b3?auto=format&fit=crop&w=800&q=80",
            description: "Красивый буддийский храм с традиционной архитектурой и спокойной атмосферой.",
            locationId: "KRN"
          }
        ]
      },
      {
        id: "PTG",
        title: "Пляж Патонг",
        slug: "patong-beach",
        thumbnail: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
        horizontal_cover: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1600&q=80",
        description: "Самый оживленный пляж Пхукета с множеством развлечений, ресторанов и магазинов. Центр ночной жизни острова.",
        directionId: "HKT",
        points: [
          {
            id: "PTG-1",
            title: "Улица Бангла",
            category: "РАЗВЛЕЧЕНИЯ И НОЧНАЯ ЖИЗНЬ",
            image: "https://images.unsplash.com/photo-1516211881327-e5120a941edc?auto=format&fit=crop&w=800&q=80",
            description: "Знаменитая пешеходная улица с барами, клубами и ресторанами. Центр ночной жизни Пхукета.",
            locationId: "PTG"
          },
          {
            id: "PTG-2",
            title: "Торговый центр Jungceylon",
            category: "СУВЕНИРЫ И ШОПИНГ",
            image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=800&q=80",
            description: "Крупнейший торговый центр в Патонге с множеством магазинов, ресторанов и развлечений.",
            locationId: "PTG"
          }
        ]
      },
      {
        id: "PKT",
        title: "Старый город Пхукет",
        slug: "phuket-town",
        thumbnail: "https://images.unsplash.com/photo-1553604376-0e89c4b5c8b3?auto=format&fit=crop&w=800&q=80",
        horizontal_cover: "https://images.unsplash.com/photo-1553604376-0e89c4b5c8b3?auto=format&fit=crop&w=1600&q=80",
        description: "Исторический центр острова с сино-португальской архитектурой, местными ресторанами и колоритными рынками.",
        directionId: "HKT",
        points: [
          {
            id: "PKT-1",
            title: "Улица Таланг",
            category: "ИСТОРИЯ И КУЛЬТУРА",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
            description: "Историческая улица с сино-португальской архитектурой, множеством кафе и магазинов.",
            locationId: "PKT"
          },
          {
            id: "PKT-2",
            title: "Рынок выходного дня",
            category: "СУВЕНИРЫ И ШОПИНГ",
            image: "https://images.unsplash.com/photo-1516211881327-e5120a941edc?auto=format&fit=crop&w=800&q=80",
            description: "Популярный ночной рынок с местной едой, сувенирами и живой музыкой.",
            locationId: "PKT"
          }
        ]
      },
      {
        id: "KTA",
        title: "Пляж Ката",
        slug: "kata-beach",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
        horizontal_cover: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80",
        description: "Живописный пляж с мягким песком и кристально чистой водой. Популярное место для серфинга в сезон дождей.",
        directionId: "HKT",
        points: [
          {
            id: "KTA-1",
            title: "Смотровая площадка Ката",
            category: "ОБЗОРНАЯ ПЛОЩАДКА",
            image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=800&q=80",
            description: "Потрясающий вид на пляж Ката и Андаманское море.",
            locationId: "KTA"
          },
          {
            id: "KTA-2",
            title: "Surf House",
            category: "АКТИВНЫЙ ОТДЫХ",
            image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
            description: "Искусственная волна для серфинга и бар с видом на пляж.",
            locationId: "KTA"
          }
        ]
      }
    ]
  },
  {
    id: "PHN",
    name: "ЗАЛИВ ПХАНГ НГА",
    slug: "phang-nga-bay",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=80",
    description: "Откройте для себя залив Пханг Нга, захватывающий дух рай известковых островов и изумрудных вод на юге Таиланда. Исследуйте секретные лагуны, морские пещеры и потрясающие скальные образования.",
    rating: 4.8,
    activities: 45,
    distance: "25 км",
    duration: "1-2 дня",
    locations: [
      {
        id: "JBI",
        title: "Острова Джеймса Бонда",
        slug: "james-bond-island",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
        horizontal_cover: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80",
        description: "Знаменитый остров, где снимался фильм о Джеймсе Бонде 'Человек с золотым пистолетом'.",
        directionId: "PHN",
        points: [
          {
            id: "JBI-1",
            title: "Као Тапу",
            category: "МЕСТО ДЛЯ ФОТО",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
            description: "Знаменитая скала-игла, ставшая символом залива Пханг Нга после съемок фильма о Джеймсе Бонде.",
            locationId: "JBI"
          },
          {
            id: "JBI-2",
            title: "Деревня Кох Паньи",
            category: "ИСТОРИЯ И КУЛЬТУРА",
            image: "https://images.unsplash.com/photo-1516211881327-e5120a941edc?auto=format&fit=crop&w=800&q=80",
            description: "Уникальная рыбацкая деревня на сваях с местными ресторанами и сувенирными лавками.",
            locationId: "JBI"
          }
        ]
      }
    ]
  },
  {
    id: "PP",
    name: "ОСТРОВА ПХИ-ПХИ",
    slug: "phi-phi",
    thumbnail: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=2000&q=80",
    description: "Расслабьтесь на очаровательных островах Пхи-Пхи, восхитительном тропическом раю Таиланда. Откройте для себя нетронутые пляжи, кристально чистые воды и потрясающие известковые скалы.",
    rating: 4.9,
    activities: 65,
    distance: "45 км",
    duration: "2-3 дня",
    locations: [
      {
        id: "PPL",
        title: "Пхи Пхи Лей",
        slug: "phi-phi-leh",
        thumbnail: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
        horizontal_cover: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1600&q=80",
        description: "Необитаемый остров с знаменитой бухтой Майя Бэй, где снимался фильм 'Пляж'.",
        directionId: "PP",
        points: [
          {
            id: "PPL-1",
            title: "Майя Бэй",
            category: "МЕСТО ДЛЯ ФОТО",
            image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
            description: "Всемирно известный пляж - место съемок фильма 'Пляж'. Изумрудные воды, белоснежный песок и величественные скалы.",
            locationId: "PPL"
          },
          {
            id: "PPL-2",
            title: "Пещера Викингов",
            category: "ПЕЩЕРА",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
            description: "Древняя пещера с наскальными рисунками и гнездами ласточек.",
            locationId: "PPL"
          }
        ]
      },
      {
        id: "PPD",
        title: "Пхи Пхи Дон",
        slug: "phi-phi-don",
        thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
        horizontal_cover: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80",
        description: "Главный остров архипелага с отелями, ресторанами и ночной жизнью.",
        directionId: "PP",
        points: [
          {
            id: "PPD-1",
            title: "Смотровая площадка",
            category: "ОБЗОРНАЯ ПЛОЩАДКА",
            image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=800&q=80",
            description: "Панорамный вид на оба залива острова и окружающие острова.",
            locationId: "PPD"
          },
          {
            id: "PPD-2",
            title: "Пляж Лонг Бич",
            category: "ПЛЯЖ",
            image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80",
            description: "Длинный пляж с белым песком и прозрачной водой, идеальный для снорклинга.",
            locationId: "PPD"
          }
        ]
      }
    ]
  }
];