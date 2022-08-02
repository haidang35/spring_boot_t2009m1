const SHOPPING_CART_KEY = "SPRING_CART";

class ShoppingCartService {
  addToCart = (data) => {
    const cart = this.getCart();
    if (Array.isArray(cart)) {
      if (this.checkCartItemExisted(data.product.id)) {
        this.updateCartItemQuantity(data.product.id, data.quantity);
      } else {
        cart.push(data);
        this.setCart(cart);
      }
    } else {
      const newCart = [];
      newCart.push(data);
      this.setCart(newCart);
    }
  };

  getCart = () => {
    const cart = JSON.parse(localStorage.getItem(SHOPPING_CART_KEY));
    if (Array.isArray(cart)) {
      return cart;
    }
    return [];
  };

  setCart = (cart) => {
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(cart));
  };

  getCartItemsQuantity = () => {
    const cart = this.getCart();
    if (Array.isArray(cart)) {
      return cart.length;
    }
    return 0;
  };

  checkCartItemExisted = (productId) => {
    const cart = this.getCart();
    let isExisted = false;
    if (Array.isArray(cart)) {
      cart.forEach((cartItem) => {
        if (cartItem.product.id == productId) {
          isExisted = true;
        }
      });
    }
    return isExisted;
  };

  updateCartItemQuantity = (productId, quantity) => {
    let cart = this.getCart();
    if (Array.isArray(cart)) {
      cart.forEach((cartItem) => {
        if (cartItem.product.id == productId) {
          cartItem.quantity += quantity;
        }
      });
    }
    this.setCart(cart);
  };

  removeCartItem = (productId) => {
    let cart = this.getCart();
    if (Array.isArray(cart)) {
      cart.forEach((cartItem, index) => {
        if (cartItem.product.id == productId) {
          cart.splice(index, 1);
          this.setCart(cart);
          return;
        }
      });
    }
  };

  getTotalPrice = () => {
    const cart = this.getCart();
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.product.unitPrice * cartItem.quantity;
    });
    return totalPrice;
  };

  removeCart = () => {
    localStorage.removeItem(SHOPPING_CART_KEY);
  }
}

const shoppingCartService = new ShoppingCartService();
export default shoppingCartService;
