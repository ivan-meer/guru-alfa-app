import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { LocationsGrid } from '../components/layout/LocationsGrid';
import { directions } from '../data/directions';

// Получаем все уникальные категории из точек интереса
const allCategories = Array.from(new Set(
  directions.flatMap(dir => 
    dir.locations.flatMap(loc => 
      loc.points.map(point => point.category)
    )
  )
));

// Теги для фильтрации
const tags = [
  'Пляжи',
  'Смотровые площадки',
  'Храмы',
  'Рынки',
  'Ночная жизнь',
  'Природа',
  'Активный отдых',
  'Шопинг'
];

export function AllLocations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Получаем все локации из всех направлений
  const allLocations = useMemo(() => 
    directions.flatMap(direction => 
      direction.locations.map(location => ({
        ...location,
        directionName: direction.name,
        directionSlug: direction.slug
      }))
    ),
    []
  );

  // Фильтруем локации
  const filteredLocations = useMemo(() => {
    return allLocations.filter(location => {
      // Поиск по названию и описанию
      const matchesSearch = 
        location.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.description?.toLowerCase().includes(searchQuery.toLowerCase());

      // Фильтр по категориям
      const matchesCategories = 
        selectedCategories.length === 0 ||
        location.points.some(point => 
          selectedCategories.includes(point.category)
        );

      // Фильтр по тегам (пример логики, нужно адаптировать под реальные данные)
      const matchesTags = 
        selectedTags.length === 0 ||
        selectedTags.some(tag => 
          location.description?.toLowerCase().includes(tag.toLowerCase())
        );

      return matchesSearch && matchesCategories && matchesTags;
    });
  }, [allLocations, searchQuery, selectedCategories, selectedTags]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Все локации</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Исследуйте все доступные места и найдите то, что вам по душе
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск локаций..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-border"
              />
            </div>
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg"
            >
              <Filter className="w-4 h-4" />
              <span>Фильтры</span>
            </button>
          </div>

          {/* Filters Panel */}
          {isFiltersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-6"
            >
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Категории</h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategories.includes(category)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Теги</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTags.includes(tag)
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Активные фильтры</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className="flex items-center space-x-1 px-3 py-1 bg-primary text-white rounded-full text-sm"
                      >
                        <span>{category}</span>
                        <X className="w-4 h-4" />
                      </button>
                    ))}
                    {selectedTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className="flex items-center space-x-1 px-3 py-1 bg-primary text-white rounded-full text-sm"
                      >
                        <span>{tag}</span>
                        <X className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Найдено локаций: {filteredLocations.length}
        </div>

        {/* Locations Grid */}
        {filteredLocations.length > 0 ? (
          <LocationsGrid 
            locations={filteredLocations}
            directionSlug={filteredLocations[0].directionSlug}
          />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            По вашему запросу ничего не найдено
          </div>
        )}
      </Container>
    </div>
  );
}