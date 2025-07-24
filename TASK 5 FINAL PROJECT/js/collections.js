// --- LocalStorage Keys ---
const WISHLIST_KEY = 'lumiere_wishlist';
const CART_KEY = 'lumiere_cart';

// --- Retrieve from LocalStorage ---
let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

// --- Update LocalStorage ---
function updateWishlistStorage() {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

function updateCartStorage() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// --- Toggle Wishlist ---
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index !== -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
  }
  updateWishlistStorage();
  renderWishlistIcons();
}

// --- Add to Cart ---
function addToCart(productId) {
  if (!cart.includes(productId)) {
    cart.push(productId);
    updateCartStorage();
  }
  alert("Added to cart!");
}

// --- Render Wishlist Icon State on Load ---
function renderWishlistIcons() {
  document.querySelectorAll('.wishlist-icon').forEach(icon => {
    const productId = icon.dataset.productId;
    icon.classList.toggle('liked', wishlist.includes(productId));
  });
}

// --- Setup Buttons ---
function setupProductActions() {
  document.querySelectorAll('.wishlist-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const productId = icon.dataset.productId;
      toggleWishlist(productId);
    });
  });

  document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
    });
  });
}

// --- On Load ---
document.addEventListener('DOMContentLoaded', () => {
  setupProductActions();
  renderWishlistIcons();
});
