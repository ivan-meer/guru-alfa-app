import React, { useState } from 'react';
import { Plus, Pencil, Trash2, MapPin, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { directions } from '../../data/directions';
import { DEFAULT_IMAGES } from '../../constants/images';

interface DirectionFormData {
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
}

export function DirectionsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingDirection, setEditingDirection] = useState<string | null>(null);
  const [formData, setFormData] = useState<DirectionFormData>({
    name: '',
    slug: '',
    description: '',
    thumbnail: ''
  });

  const handleEdit = (id: string) => {
    const direction = directions.find(d => d.id === id);
    if (direction) {
      setFormData({
        name: direction.name,
        slug: direction.slug,
        description: direction.description,
        thumbnail: direction.thumbnail || ''
      });
      setEditingDirection(id);
      setIsFormOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить это направление?')) {
      // Here would be the delete logic
      console.log('Deleting direction:', id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Управление направлениями</h1>
        <button
          onClick={() => {
            setFormData({
              name: '',
              slug: '',
              description: '',
              thumbnail: ''
            });
            setEditingDirection(null);
            setIsFormOpen(true);
          }}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          <Plus className="w-4 h-4" />
          <span>Добавить направление</span>
        </button>
      </div>

      <div className="grid gap-6">
        {directions.map((direction) => (
          <motion.div
            key={direction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="flex">
              <div className="relative w-48 h-48">
                <img
                  src={direction.thumbnail || DEFAULT_IMAGES.DIRECTION}
                  alt={direction.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{direction.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{direction.locations.length} локаций</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(direction.id)}
                      className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(direction.id)}
                      className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                  {direction.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl"
            >
              <h2 className="text-xl font-semibold mb-6">
                {editingDirection ? 'Редактировать направление' : 'Новое направление'}
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Название</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                    placeholder="Например: Пхукет"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                    placeholder="phuket"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Описание</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                    placeholder="Подробное описание направления..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Изображение</label>
                  <div className="flex space-x-4">
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                      <img
                        src={formData.thumbnail || DEFAULT_IMAGES.DIRECTION}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <button type="button" className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                          <ImageIcon className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={formData.thumbnail}
                      onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                      placeholder="URL изображения"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    {editingDirection ? 'Сохранить' : 'Создать'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}