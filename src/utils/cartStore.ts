export interface CartItem {
  productId: string;
  productName: string;
  productSlug: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

class CartStore {
  private storageKey = 'domine-cart';

  getCart(): CartItem[] {
    const cart = localStorage.getItem(this.storageKey);
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(item: Omit<CartItem, 'quantity'>): void {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(
      (i) => i.productId === item.productId && i.size === item.size
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
  }

  removeFromCart(productId: string, size: string): void {
    const cart = this.getCart().filter(
      (item) => !(item.productId === productId && item.size === size)
    );
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
  }

  updateQuantity(productId: string, size: string, quantity: number): void {
    const cart = this.getCart();
    const item = cart.find((i) => i.productId === productId && i.size === size);
    if (item) {
      item.quantity = quantity;
      localStorage.setItem(this.storageKey, JSON.stringify(cart));
      window.dispatchEvent(new Event('cart-updated'));
    }
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
    window.dispatchEvent(new Event('cart-updated'));
  }

  getCartCount(): number {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartTotal(): number {
    return this.getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}

export const cartStore = new CartStore();
