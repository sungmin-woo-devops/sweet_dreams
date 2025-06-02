import { FoodModel, ModelCategory } from '../types/model';

export const CATEGORIES: ModelCategory[] = [
  'All',
  'Dessert', 
  'Pastry', 
  'Candy', 
  'Fruit', 
  'Breakfast', 
  'Main Course', 
  'Drinks'
];

export const mockModels: FoodModel[] = [
  {
    id: '1',
    name: 'Chocolate Cupcake',
    category: 'Dessert',
    tags: ['chocolate', 'cupcake', 'frosting', 'dessert', 'sweet'],
    thumbnailUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 240,
    creator: {
      id: 'user1',
      name: 'SweetCreator',
      avatarUrl: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg',
    }
  },
  {
    id: '2',
    name: 'Strawberry Cake',
    category: 'Dessert',
    tags: ['strawberry', 'cake', 'cream', 'dessert', 'sweet'],
    thumbnailUrl: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 189,
    creator: {
      id: 'user2',
      name: 'CakeMaster',
      avatarUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
    }
  },
  {
    id: '3',
    name: 'Croissant',
    category: 'Pastry',
    tags: ['croissant', 'pastry', 'breakfast', 'butter', 'french'],
    thumbnailUrl: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 156,
    creator: {
      id: 'user3',
      name: 'PastryPro',
      avatarUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    }
  },
  {
    id: '4',
    name: 'Gummy Bears',
    category: 'Candy',
    tags: ['gummy', 'candy', 'sweet', 'colorful', 'bears'],
    thumbnailUrl: 'https://images.pexels.com/photos/55825/gold-bear-gummi-bears-bear-yellow-55825.jpeg',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 213,
    creator: {
      id: 'user4',
      name: 'CandyArtist',
      avatarUrl: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg',
    }
  },
  {
    id: '5',
    name: 'Apple Pie',
    category: 'Dessert',
    tags: ['apple', 'pie', 'cinnamon', 'dessert', 'pastry'],
    thumbnailUrl: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg',
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 275,
    creator: {
      id: 'user5',
      name: 'PieMaker',
      avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    }
  },
  {
    id: '6',
    name: 'Strawberry Smoothie',
    category: 'Drinks',
    tags: ['strawberry', 'smoothie', 'drink', 'fresh', 'fruit'],
    thumbnailUrl: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 142,
    creator: {
      id: 'user6',
      name: 'SmoothieKing',
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    }
  },
  {
    id: '7',
    name: 'Pancake Stack',
    category: 'Breakfast',
    tags: ['pancake', 'breakfast', 'maple', 'syrup', 'stack'],
    thumbnailUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    createdAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 198,
    creator: {
      id: 'user7',
      name: 'BreakfastPro',
      avatarUrl: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg',
    }
  },
  {
    id: '8',
    name: 'Pizza Slice',
    category: 'Main Course',
    tags: ['pizza', 'cheese', 'tomato', 'italian', 'main'],
    thumbnailUrl: 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg',
    createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 312,
    creator: {
      id: 'user8',
      name: 'PizzaArtist',
      avatarUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    }
  }
];