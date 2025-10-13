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

export interface CartItem {
  productId: string;
  productName: string;
  productSlug: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}
