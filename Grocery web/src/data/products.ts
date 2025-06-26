import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    icon: 'Apple',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    icon: 'Carrot',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg'
  },
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    icon: 'Milk',
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg'
  },
  {
    id: 'grains',
    name: 'Grains & Cereals',
    icon: 'Wheat',
    image: 'https://images.pexels.com/photos/3681541/pexels-photo-3681541.jpeg'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: 'Coffee',
    image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    icon: 'Cookie',
    image: 'https://images.pexels.com/photos/4331055/pexels-photo-4331055.jpeg'
  }
];

export const products: Product[] = [
  // Fruits
  {
    id: '1',
    name: 'Fresh Red Apples',
    price: 180,
    originalPrice: 220,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg',
    category: 'fruits',
    description: 'Crisp and sweet red apples, perfect for snacking or cooking.',
    unit: 'per kg',
    inStock: true,
    rating: 4.5,
    reviews: 125
  },
  {
    id: '2',
    name: 'Ripe Bananas',
    price: 60,
    image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg',
    category: 'fruits',
    description: 'Sweet and nutritious bananas, rich in potassium.',
    unit: 'per dozen',
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: '3',
    name: 'Fresh Oranges',
    price: 120,
    originalPrice: 140,
    image: 'https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg',
    category: 'fruits',
    description: 'Juicy and vitamin C rich oranges.',
    unit: 'per kg',
    inStock: true,
    rating: 4.4,
    reviews: 67
  },
  {
    id: '4',
    name: 'Sweet Mangoes',
    price: 200,
    image: 'https://www.mangopoint.in/wp-content/uploads/2022/03/6.jpg',
    category: 'fruits',
    description: 'Delicious seasonal mangoes, king of fruits.',
    unit: 'per kg',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },

  // Vegetables
  {
    id: '5',
    name: 'Fresh Tomatoes',
    price: 40,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    category: 'vegetables',
    description: 'Red ripe tomatoes, perfect for cooking and salads.',
    unit: 'per kg',
    inStock: true,
    rating: 4.2,
    reviews: 78
  },
  {
    id: '6',
    name: 'Green Spinach',
    price: 30,
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg',
    category: 'vegetables',
    description: 'Fresh leafy spinach, rich in iron and vitamins.',
    unit: 'per bundle',
    inStock: true,
    rating: 4.1,
    reviews: 45
  },
  {
    id: '7',
    name: 'Organic Carrots',
    price: 70,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    category: 'vegetables',
    description: 'Crunchy organic carrots, great for health.',
    unit: 'per kg',
    inStock: true,
    rating: 4.6,
    reviews: 92
  },
  {
    id: '8',
    name: 'Fresh Onions',
    price: 35,
    image: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MjAwNDUwMjQ5MDIwNDE3MTMy/the-benefits-of-onions.webp',
    category: 'vegetables',
    description: 'Fresh onions, essential for Indian cooking.',
    unit: 'per kg',
    inStock: true,
    rating: 4.0,
    reviews: 134
  },

  // Dairy
  {
    id: '9',
    name: 'Fresh Milk',
    price: 60,
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
    category: 'dairy',
    description: 'Pure and fresh cow milk, rich in calcium.',
    unit: 'per litre',
    inStock: true,
    rating: 4.5,
    reviews: 203
  },
  {
    id: '10',
    name: 'Farm Fresh Eggs',
    price: 120,
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    category: 'dairy',
    description: 'Farm fresh eggs, perfect source of protein.',
    unit: 'per dozen',
    inStock: true,
    rating: 4.4,
    reviews: 167
  },
  {
    id: '11',
    name: 'Greek Yogurt',
    price: 180,
    originalPrice: 200,
    image: 'https://static.wixstatic.com/media/60b717_82b221d0483145bba8f2f0ac4035530e~mv2.jpg/v1/fill/w_1901,h_991,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/60b717_82b221d0483145bba8f2f0ac4035530e~mv2.jpg',
    category: 'dairy',
    description: 'Thick and creamy Greek yogurt, high in protein.',
    unit: 'per 500g',
    inStock: true,
    rating: 4.7,
    reviews: 89
  },

  // Grains
  {
    id: '12',
    name: 'Basmati Rice',
    price: 140,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/805352f4-6439-45e9-b16f-bfb9d416e99a.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    category: 'grains',
    description: 'Premium quality Basmati rice with long grains.',
    unit: 'per kg',
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: '13',
    name: 'Whole Wheat Flour',
    price: 45,
    image: 'https://www.thespruceeats.com/thmb/b8J7wimMzhP-LpL0hWcyBRPebas=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wheat-and-flour-g2k-57bb87385f9b58cdfd6ab04b.jpg',
    category: 'grains',
    description: 'Fresh ground whole wheat flour for healthy rotis.',
    unit: 'per kg',
    inStock: true,
    rating: 4.3,
    reviews: 156
  },

  // Beverages
  {
    id: '14',
    name: 'Fresh Orange Juice',
    price: 80,
    image: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg',
    category: 'beverages',
    description: 'Freshly squeezed orange juice, no preservatives.',
    unit: 'per 500ml',
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '15',
    name: 'Green Tea',
    price: 350,
    originalPrice: 400,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg',
    category: 'beverages',
    description: 'Premium green tea leaves, rich in antioxidants.',
    unit: 'per 100g',
    inStock: true,
    rating: 4.4,
    reviews: 112
  },

  // Snacks
  {
    id: '16',
    name: 'Mixed Nuts',
    price: 450,
    originalPrice: 500,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg',
    category: 'snacks',
    description: 'Premium mixed nuts, perfect for healthy snacking.',
    unit: 'per 250g',
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '17',
    name: 'Organic Cookies',
    price: 120,
    image: 'https://img.freepik.com/free-photo/view-baked-cookies-done-by-vegan-bakery_23-2150195102.jpg?semt=ais_hybrid&w=740',
    category: 'snacks',
    description: 'Healthy organic cookies made with natural ingredients.',
    unit: 'per pack',
    inStock: true,
    rating: 4.2,
    reviews: 67
  }
];