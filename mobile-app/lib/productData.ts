import { Product } from '../types/product';

const BASE_URL = 'https://saiatfvyvyrhgkntxorh.supabase.co';

const generateSlug = (folderName: string): string => {
  return folderName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const getFolderColors = (folderName: string): string[] => {
  const name = folderName.toLowerCase();
  
  // Essentials collection colors - exact match to actual product colors
  if (name.includes('mint-green')) return ['#98D8C8']; // Mint Green (light teal/aqua)
  if (name.includes('dusty-rose')) return ['#D8A8A0']; // Dusty Rose (peachy pink)
  if (name.includes('mauve')) return ['#C8B4A0']; // Mauve/Biscuit
  if (name.includes('g-t')) return ['#5FB5AA']; // Teal/Sage Green
  if (name.includes('m-t-ab')) return ['#8B4853']; // Maroon
  if (name.includes('khaki')) return ['#B8A888']; // Khaki
  if (name.includes('dark-gray') || name.includes('dark-grey')) return ['#6B6B6B']; // Grey
  
  // Other collections - precise color matching
  if (name.includes('plane-black') || name === 'black-t' || name === 'black-t-2') return ['#1A1A1A'];
  if (name.includes('plane-white') || name === 'white-t' || name === 'white-t-2') return ['#F5F5F5'];
  if (name.includes('olive-green')) return ['#7A8B6F'];
  if (name.includes('green')) return ['#4A7C59'];
  if (name.includes('dusty-blue')) return ['#8BA5B8'];
  if (name.includes('light-blue')) return ['#A8C5D9'];
  if (name.includes('dark-shade-of-gray')) return ['#4D4D4D'];
  if (name.includes('very-dark-shade-of-blue')) return ['#2C3E50'];
  if (name.includes('rust')) return ['#B87A6A'];
  if (name.includes('tie-dye')) return ['#8B6A4A', '#3A2C20'];
  
  return ['#1A1A1A'];
};

export const productFolders = [
  'mint-green-t',
  'black-t',
  'dusty-rose-t',
  'plane-white-t',
  'olive-green-t',
  'white-t-2',
  'mauve-t',
  'dark-grey',
  'rust-tie-dye-t',
  'black-t-2',
  'light-blue-t',
  'khaki-t',
  'dusty-blue-t',
  'plane-black-t',
  'green-t',
  'very-dark-shade-of-blue',
  'white-t',
  'tie-dye-brown-black',
  'dark-shade-of-gray-t',
  'g-t',
  'm-t-ab',
];

const folderImageCounts: Record<string, number> = {
  'black-t': 4,
  'mauve-t': 4,
  'khaki-t': 4,
  'plane-black-t': 4,
  'm-t-ab': 5,
  'mint-green-t': 5,
  'olive-green-t': 5,
  'dark-shade-of-gray-t': 5,
};

export const getProductFromFolder = (folderName: string): Product => {
  const slug = generateSlug(folderName);
  const colors = getFolderColors(folderName);
  const imageCount = folderImageCounts[folderName] || 4;

  const images: string[] = [];
  for (let i = 1; i <= imageCount; i++) {
    if (folderName === 'khaki-t') {
      images.push(`${BASE_URL}/storage/v1/object/public/images/collections/${folderName}/${i}.png`);
    } else if (folderName === 'plane-black-t') {
      const specialNames = [
        'Gemini_Generated_Image_4vnbmr4vnbmr4vnb.png',
        'Gemini_Generated_Image_55at8p55at8p55at.png',
        'Gemini_Generated_Image_lmdgr6lmdgr6lmdg.png',
        'Gemini_Generated_Image_uytrt4uytrt4uytr.png'
      ];
      images.push(`${BASE_URL}/storage/v1/object/public/images/collections/${folderName}/${specialNames[i - 1]}`);
    } else if (folderName === 'black-t') {
      const specialNames = ['T-1.png', 'T-2.png', 'T-3.png', 'T-4.png'];
      images.push(`${BASE_URL}/storage/v1/object/public/images/collections/${folderName}/${specialNames[i - 1]}`);
    } else {
      images.push(`${BASE_URL}/storage/v1/object/public/images/collections/${folderName}/T-${i}.png`);
    }
  }

  const getDisplayName = (folder: string): string => {
    const cleanName = folder.replace(/-t$/, '').replace(/-/g, ' ');
    return cleanName.replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const getProductName = (folder: string): string => {
    const essentialsMapping: Record<string, string> = {
      'khaki-t': 'Basic Round Neck T-Shirt – Khaki',
      'black-t': 'Basic Plain T-Shirt – Black',
      'white-t': 'Basic Plain T-Shirt – White',
      'plane-white-t': 'Basic Plain T-Shirt – White',
      'plane-black-t': 'Basic Printed T-Shirt with Puff Print – Black',
      'dark-grey': 'Basic Printed T-Shirt with HD Print – Grey',
      'm-t-ab': 'Basic Round Neck T-Shirt – Maroon',
      'dusty-rose-t': 'Basic Round Neck T-Shirt – Peach',
      'mint-green-t': 'Basic Round Neck T-Shirt – Sage Green',
      'g-t': 'Basic Round Neck T-Shirt – Teal',
      'mauve-t': 'Basic Round Neck T-Shirt – Biscuit',
    };

    return essentialsMapping[folder] || "Men's Cut & Sew HD Print T-Shirt";
  };

  return {
    id: slug,
    slug,
    name: getProductName(folderName),
    folderName,
    displayName: getDisplayName(folderName),
    price: 399,
    originalPrice: 1299,
    images,
    colors,
  };
};

export const getAllProducts = (): Product[] => {
  return productFolders.map(getProductFromFolder);
};

export const getProductBySlug = (slug: string): Product | null => {
  const product = getAllProducts().find((p) => p.slug === slug);
  return product || null;
};

export const getRandomProducts = (excludeSlug: string, count: number = 4): Product[] => {
  const allProducts = getAllProducts().filter((p) => p.slug !== excludeSlug);
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
