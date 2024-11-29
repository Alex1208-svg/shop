// Check if cart exists in localStorage, if not, initialize it
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  
  // Function to add a product to the cart
  function addToCart(name, price) {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart'));
  
    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.name === name);
  
    if (existingItem) {
      // If it exists, increment the quantity
      existingItem.quantity += 1;
    } else {
      // Otherwise, add a new item to the cart
      cart.push({ name, price, quantity: 1 });
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Display a confirmation message
    alert(`${name} has been added to your cart.`);
  }  

// Function to render the cart on the cart.html page
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = ''; // Clear existing content
  
    // Loop through the cart and add rows to the table
    cart.forEach(item => {
      const row = `
        <tr>
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>
            <button onclick="decrementItem('${item.name}')">-</button>
            ${item.quantity}
            <button onclick="incrementItem('${item.name}')">+</button>
          </td>
          <td>$${item.price * item.quantity}</td>
          <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        </tr>
      `;
      cartTable.innerHTML += row;
    });
  
    // Update the total price
    document.getElementById('total-price').textContent = calculateTotal();
  }
  
  // Function to calculate the total price of the cart
  function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  // Increment item quantity
  function incrementItem(name) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const item = cart.find(item => item.name === name);
    if (item) {
      item.quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Refresh the cart display
  }
  
  // Decrement item quantity
  function decrementItem(name) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const item = cart.find(item => item.name === name);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        removeFromCart(name); // Remove item if quantity is 0
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Refresh the cart display
  }
  
  // Remove item from cart
  function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Refresh the cart display
  }

// Get cart items
function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  