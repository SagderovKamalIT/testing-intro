function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Колличество товаров должно быть больше 0");
  }

  if (quantity > product.stock) {
    throw new RangeError("На складе недостаточно товара");
  }

  let arrayOfProducts = [];

  if (cart.length === 0) {
    const quantityObject = { ...product, quantity: quantity };

    arrayOfProducts.push(quantityObject);
    return arrayOfProducts;
  }

  const foundProduct = cart.find((item) => item.id === product.id);

  if (foundProduct) {
    if (foundProduct.quantity + quantity > product.stock) {
      throw new RangeError("На складе недостаточно товара");
    }

    foundProduct.quantity += quantity;
    return cart;
  }

  const quantityObject = { ...product, quantity: quantity };

  arrayOfProducts = [...cart, quantityObject];

  return arrayOfProducts;
}

function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Колличество товаров должно быть больше 0");
  }

  const foundProduct = cart.find((item) => item.id === productId);

  if (!foundProduct) {
    return cart;
  }

  if (quantity > foundProduct.stock) {
    throw new RangeError("Количество товаров не должно превышать остаток");
  }
  foundProduct.quantity = quantity;

  return cart;
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
