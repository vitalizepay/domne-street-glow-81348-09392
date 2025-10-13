import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartItem } from '../types/product';

const CART_KEY = 'domine-cart';

export const cartStore = {
  async getCart(): Promise<CartItem[]> {
    try {
      const cart = await AsyncStorage.getItem(CART_KEY);
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error('Error getting cart:', error);
      return [];
    }
  },

  async addToCart(item: Omit<CartItem, 'quantity'>): Promise<void> {
    try {
      const cart = await this.getCart();
      const existingIndex = cart.findIndex(
        (i) => i.productId === item.productId && i.size === item.size
      );

      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }

      await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  },

  async removeFromCart(productId: string, size: string): Promise<void> {
    try {
      const cart = await this.getCart();
      const updatedCart = cart.filter(
        (item) => !(item.productId === productId && item.size === size)
      );
      await AsyncStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  },

  async updateQuantity(productId: string, size: string, quantity: number): Promise<void> {
    try {
      const cart = await this.getCart();
      const item = cart.find((i) => i.productId === productId && i.size === size);
      if (item) {
        item.quantity = quantity;
        await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  },

  async clearCart(): Promise<void> {
    try {
      await AsyncStorage.removeItem(CART_KEY);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  },

  async getCartCount(): Promise<number> {
    const cart = await this.getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  async getCartTotal(): Promise<number> {
    const cart = await this.getCart();
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
};
