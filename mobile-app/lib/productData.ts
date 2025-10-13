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
  if (name.includes('black')) return ['#000000'];
  if (name.includes('white')) return ['#FFFFFF'];
  if (name.includes('mint-green')) return ['#98FF98'];
  if (name.includes('olive-green')) return ['#6B8E23'];
  if (name.includes('green')) return ['#228B22'];
  if (name.includes('dusty-rose') || name.includes('mauve')) return ['#DCAE96'];
  if (name.includes('dusty-blue')) return ['#6B9AC4'];
  if (name.includes('light-blue')) return ['#87CEEB'];
  if (name.includes('dark-gray') || name.includes('dark-grey') || name.includes('dark-shade-of-gray')) return ['#4A4A4A'];
  if (name.includes('very-dark-shade-of-blue')) return ['#1a1a2e'];
  if (name.includes('khaki')) return ['#C3B091'];
  if (name.includes('rust')) return ['#B7410E'];
  if (name.includes('tie-dye')) return ['#B7410E', '#000000'];
  if (name.includes('g-t')) return ['#808080'];
  if (name.includes('m-t-ab')) return ['#A0522D'];
  return ['#000000'];
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

  return {
    id: slug,
    slug,
    name: "Men's Cut & Sew HD Print T-Shirt",
    folderName,
    displayName: folderName.replace(/-t$/, '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
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
