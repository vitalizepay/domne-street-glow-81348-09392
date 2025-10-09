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

  if (name.includes("black")) return ["#000000"];
  if (name.includes("white")) return ["#FFFFFF"];
  if (name.includes("mint-green")) return ["#98FF98"];
  if (name.includes("olive-green")) return ["#6B8E23"];
  if (name.includes("green")) return ["#228B22"];
  if (name.includes("dusty-rose") || name.includes("mauve")) return ["#DCAE96"];
  if (name.includes("dusty-blue")) return ["#6B9AC4"];
  if (name.includes("light-blue")) return ["#87CEEB"];
  if (name.includes("dark-gray") || name.includes("dark-grey") || name.includes("dark-shade-of-gray")) return ["#4A4A4A"];
  if (name.includes("very-dark-shade-of-blue")) return ["#1a1a2e"];
  if (name.includes("khaki")) return ["#C3B091"];
  if (name.includes("rust")) return ["#B7410E"];
  if (name.includes("tie-dye")) return ["#B7410E", "#000000"];
  if (name.includes("g-t")) return ["#808080"];
  if (name.includes("m-t-ab")) return ["#A0522D"];

  return ["#000000"]; // default
};

// Product folders in the images/collections directory
export const productFolders = [
  "black-t",
  "black-t-2",
  "white-t",
  "white-t-2",
  "dusty-blue-t",
  "dusty-rose-t",
  "mauve-t",
  "mint-green-t",
  "olive-green-t",
  "green-t",
  "khaki-t",
  "dark-grey",
  "dark-shade-of-gray-t",
  "very-dark-shade-of-blue",
  "light-blue-t",
  "rust-tie-dye-t",
  "tie-dye-brown-black",
  "g-t",
  "m-t-ab",
  "plane-black-t",
  "plane-white-t",
];

// Generate product from folder name
export const getProductFromFolder = (folderName: string): Product => {
  const slug = generateSlug(folderName);
  const colors = getFolderColors(folderName);

  // Generate image paths for production - using public folder
  const images = [1, 2, 3, 4].map((i) => `/images/collections/${folderName}/T-${i}.png`);

  return {
    id: slug,
    slug,
    name: "Men's Cut & Sew HD Print T-Shirt",
    folderName,
    displayName: folderName.replace(/-t$/, "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    price: 399,
    originalPrice: 1299,
    images,
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
