
function showSpecial() {
  const specials = [
    "Pumpkin Spice Latte",
    "Hazelnut Mocha",
    "Blueberry Muffin",
    "Vanilla Chai",
    "Almond Croissant"
  ];
  const random = specials[Math.floor(Math.random() * specials.length)];
  document.getElementById("special-output").textContent = `Today’s special is: ${random}!`;
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for contacting My Dream Café! We'll get back to you soon ☕");
}

const cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("visible");
}

function checkout() {
  alert("Thank you for your order! ☕");
  cart.length = 0;
  updateCart();
  toggleCart();
}
