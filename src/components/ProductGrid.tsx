import ProductCard from "@/components/ProductCard";

// Sample product data - in a real app, this would come from an API
const products = [
  {
    id: 1,
    name: "Classic Black Tee",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Premium Polo White",
    price: 1799,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    category: "Polo",
  },
  {
    id: 3,
    name: "Navy Crew Neck",
    price: 1499,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "Charcoal V-Neck",
    price: 1399,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
  {
    id: 5,
    name: "Olive Green Tee",
    price: 1299,
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
  {
    id: 6,
    name: "Grey Polo Classic",
    price: 1899,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&h=500&fit=crop",
    category: "Polo",
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
