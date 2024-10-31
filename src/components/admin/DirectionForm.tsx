import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import type { Direction } from '../../types';

interface Props {
  direction?: Direction | null;
  onSubmit: (data: Partial<Direction>) => Promise<void>;
  onClose: () => void;
}

export function DirectionForm({ direction, onSubmit, onClose }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: direction || {}
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {direction ? 'Редактировать направление' : 'Новое направление'}
          </h2>
          <button onClick={onClose} className="text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Название</label>
            <input
              {...register('name', { required: 'Обязательное поле' })}
              className="w-full p-2 border rounded-lg"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              {...register('slug', { required: 'Обязательное поле' })}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Описание</label>
            <textarea
              {...register('description')}
              rows={4}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
            <input
              {...register('thumbnail')}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              {direction ? 'Сохранить' : 'Создать'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}