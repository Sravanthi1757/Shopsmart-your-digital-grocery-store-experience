import React from 'react';
import { Category } from '../types';
import { DivideIcon as LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick: (categoryId: string) => void;
  isSelected: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isSelected }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;

  return (
    <div
      onClick={() => onClick(category.id)}
      className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isSelected ? 'ring-2 ring-green-500' : ''
      }`}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
        <div className="h-24 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          {IconComponent && <IconComponent className="h-10 w-10 text-white" />}
        </div>
        <div className="p-3 text-center">
          <h3 className="font-semibold text-gray-800 text-sm">{category.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;