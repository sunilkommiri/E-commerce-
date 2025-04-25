const products = [
  { id: 1, name: "T-shirt", price: 19.99 },
  { id: 2, name: "Shoes", price: 49.99 },
  { id: 3, name: "Hat", price: 14.99 }
];

const container = document.getElementById('products');
products.forEach(p => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p><button onclick="addToCart(${p.id})">Add to Cart</button>`;
  container.appendChild(div);
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product.name + " added to cart.");
}