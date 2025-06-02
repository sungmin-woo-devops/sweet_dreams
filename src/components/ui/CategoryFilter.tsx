import React from 'react';
import { cn } from '../../utils/cn';
import { ModelCategory } from '../../types/model';

interface CategoryFilterProps {
  categories: ModelCategory[];
  selectedCategory: ModelCategory;
  onSelectCategory: (category: ModelCategory) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className,
}) => {
  return (
    <div className={cn("flex overflow-x-auto py-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0", className)}>
      <div className="flex gap-2 md:gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className={cn(
              "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === category
                ? "bg-primary-500 text-white"
                : "bg-cream-100 text-chocolate-700 hover:bg-cream-200"
            )}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};