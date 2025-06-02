export interface FoodModel {
  id: string;
  name: string;
  category: string;
  tags: string[];
  thumbnailUrl: string;
  modelUrl?: string;
  createdAt: string;
  likes: number;
  creator: {
    id: string;
    name: string;
    avatarUrl: string;
  };
}

export type ModelCategory = 'Dessert' | 'Pastry' | 'Candy' | 'Fruit' | 'Breakfast' | 'Main Course' | 'Drinks' | 'All';

export interface GenerationPrompt {
  foodName: string;
  description?: string;
  references?: string[];
}

export interface ModelCollection {
  id: string;
  name: string;
  description?: string;
  models: FoodModel[];
  createdAt: string;
  isPublic: boolean;
}

export interface ExportOptions {
  format: 'glb' | 'fbx' | 'obj' | 'usdz';
  scale: number;
  includeTextures: boolean;
  target: 'Unity' | 'Unreal Engine' | 'Generic';
}