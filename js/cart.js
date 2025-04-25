const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.getElementById('cart-items');
if (cartItems.length === 0) {
  container.innerHTML = "<p>Your cart is empty.</p>";
} else {
  let html = "<ul>";
  cartItems.forEach(item => {
    html += `<li>${item.name} - $${item.price}</li>`;
  });
  html += "</ul>";
  container.innerHTML = html;
}