// Utility functions for product data management

export interface Product {
  id: string;
  slug: string;
  name: string;
  folderName: string;
  displayName: string;
  price: number;
  originalPrice: number;
  images: string[];
  colors: string[];
}

// Generate slug from folder name
export const generateSlug = (folderName: string): string => {
  return folderName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Map folder name to color dots
export const getFolderColors = (folderName: string): string[] => {
  const name = folderName.toLowerCase();

  // Essentials collection colors based on PDF
  if (name.includes("g-t")) return ["#008080"]; // Teal
  if (name.includes("mauve")) return ["#E5D4B5"]; // Biscuit
  if (name.includes("m-t-ab")) return ["#800000"]; // Maroon
  if (name.includes("mint-green")) return ["#77B05D"]; // Sage Green
  if (name.includes("dusty-rose")) return ["#FFDAB9"]; // Peach
  if (name.includes("khaki")) return ["#C3B091"]; // Khaki
  if (name.includes("dark-gray") || name.includes("dark-grey")) return ["#808080"]; // Grey
  
  // Other collections
  if (name.includes("black")) return ["#000000"];
  if (name.includes("white")) return ["#FFFFFF"];
  if (name.includes("olive-green")) return ["#6B7C5B"];
  if (name.includes("green")) return ["#3A6B4A"];
  if (name.includes("dusty-blue")) return ["#7B9FB8"];
  if (name.includes("light-blue")) return ["#A8C5D9"];
  if (name.includes("dark-shade-of-gray")) return ["#4A4A4A"];
  if (name.includes("very-dark-shade-of-blue")) return ["#1F2937"];
  if (name.includes("rust")) return ["#A85A4A"];
  if (name.includes("tie-dye")) return ["#8B5A3A", "#2C2420"];

  return ["#000000"]; // default
};

// Product folders in the images/collections directory - rearranged order
export const productFolders = [
  "mint-green-t",
  "black-t",
  "dusty-rose-t",
  "plane-white-t",
  "olive-green-t",
  "white-t-2",
  "mauve-t",
  "dark-grey",
  "rust-tie-dye-t",
  "black-t-2",
  "light-blue-t",
  "khaki-t",
  "dusty-blue-t",
  "plane-black-t",
  "green-t",
  "very-dark-shade-of-blue",
  "white-t",
  "tie-dye-brown-black",
  "dark-shade-of-gray-t",
  "g-t",
  "m-t-ab",
];

// Helper: normalize, dedupe, and prioritize front images
const normalizeImages = (images: string[]): string[] => {
  // Dedupe by URL
  const unique = Array.from(new Set(images.filter(Boolean)));

  // Score filenames: front/main/1 before back/rear
  const score = (p: string) => {
    const name = p.toLowerCase();
    if (/(front|main)/.test(name)) return 0;
    if (/t-1\.|\/(1)\./.test(name)) return 1;
    if (/(side)/.test(name)) return 2;
    if (/(back|rear)/.test(name)) return 4;
    return 3;
  };

  return unique.sort((a, b) => score(a) - score(b));
};

// Map folder names to their specific image counts
const folderImageCounts: Record<string, number> = {
  "black-t": 4,
  "mauve-t": 4,
  "khaki-t": 4,
  "plane-black-t": 4,
  "m-t-ab": 5,
  "mint-green-t": 5,
  "olive-green-t": 5,
  "dark-shade-of-gray-t": 5,
};

// Generate product from folder name
export const getProductFromFolder = (folderName: string): Product => {
  const slug = generateSlug(folderName);
  const colors = getFolderColors(folderName);

  // Determine the number of images for this product
  const imageCount = folderImageCounts[folderName] || 4;
  
  // Generate image paths - try different naming patterns
  const images: string[] = [];
for (let i = 1; i <= imageCount; i++) {
  // Check for khaki-t which uses numbers without T- prefix
  if (folderName === "khaki-t") {
    images.push(`/images/collections/${folderName}/${i}.png`);
  } else if (folderName === "plane-black-t") {
    // Special case for plane-black-t which uses different filenames
    const specialNames = [
      "Gemini_Generated_Image_4vnbmr4vnbmr4vnb.png",
      "Gemini_Generated_Image_55at8p55at8p55at.png",
      "Gemini_Generated_Image_lmdgr6lmdgr6lmdg.png",
      "Gemini_Generated_Image_uytrt4uytrt4uytr.png"
    ];
    images.push(`/images/collections/${folderName}/${specialNames[i - 1]}`);
  } else if (folderName === "black-t") {
    const specialNames = ["T-1.png", "T-2.png", "T-3.png", "T-4.png"]; // ensure unique 4 images
    images.push(`/images/collections/${folderName}/${specialNames[i - 1]}`);
  } else {
    images.push(`/images/collections/${folderName}/T-${i}.png`);
  }
}

  // Map folder names to display names
  const getDisplayName = (folder: string): string => {
    const cleanName = folder.replace(/-t$/, "").replace(/-/g, " ");
    // Capitalize words
    return cleanName.replace(/\b\w/g, (l) => l.toUpperCase());
  };

  // Map folder names to product names (for Essentials collection products)
  const getProductName = (folder: string): string => {
    const essentialsMapping: Record<string, string> = {
      "khaki-t": "DOMINE Essentials – Basic Round Neck T-Shirt – Khaki",
      "black-t": "DOMINE Essentials – Basic Plain T-Shirt – Black",
      "white-t": "DOMINE Essentials – Basic Plain T-Shirt – White",
      "plane-white-t": "DOMINE Essentials – Basic Plain T-Shirt – White",
      "plane-black-t": "DOMINE Essentials – Basic Printed T-Shirt with Puff Print – Black",
      "dark-grey": "DOMINE Essentials – Basic Printed T-Shirt with HD Print – Grey",
      "m-t-ab": "DOMINE Essentials – Basic Round Neck T-Shirt – Maroon",
      "dusty-rose-t": "DOMINE Essentials – Basic Round Neck T-Shirt – Peach",
      "mint-green-t": "DOMINE Essentials – Basic Round Neck T-Shirt – Sage Green",
      "g-t": "DOMINE Essentials – Basic Round Neck T-Shirt – Teal",
      "mauve-t": "DOMINE Essentials – Basic Round Neck T-Shirt – Biscuit",
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
    images: normalizeImages(images),
    colors,
  };
};

// Get all products
export const getAllProducts = (): Product[] => {
  return productFolders.map(getProductFromFolder);
};

// Get product by slug
export const getProductBySlug = (slug: string): Product | null => {
  const product = getAllProducts().find((p) => p.slug === slug);
  return product || null;
};

// Get random products (for "You may also like")
export const getRandomProducts = (excludeSlug: string, count: number = 4): Product[] => {
  const allProducts = getAllProducts().filter((p) => p.slug !== excludeSlug);
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
