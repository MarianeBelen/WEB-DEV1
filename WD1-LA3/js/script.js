// Create empty array to store items
let cart = [];

// Add product to cart
function addToCart(productName, price) {
  //Push items into the array
  cart.push({ name: productName, price: price });
  //updates the cart
  showCart();
}

// this function puts cart items inside <aside>
function showCart() {
  //use document.getElementById
  //also gets <ul> items where cart items will be printed
  const cartItemsList = document.getElementById("cart-items");
  //gets the total
  const totalElement = document.getElementById("tot");

  // Clear the list first
  cartItemsList.innerHTML = "";

  //checks if the cart is emoty
  if (cart.length === 0) {
    cartItemsList.innerHTML = "<li>Your cart is empty</li>";
    totalElement.textContent = "0";  //sets total amount to 0
    return;
  }

  // Add each item to the list
  //create a variable with 0 value to track the price
  let total = 0;
  //loops at evry item in the cart
  cart.forEach(item => {
    //make another variable for the items
    const li = document.createElement("li");
    //prints the item name and price
    li.textContent = `${item.name}: ₱${item.price}`;
    cartItemsList.appendChild(li);
    //adds the items price to the total
    total += item.price;
  });

  // Updates the total price
  totalElement.textContent = total;
}
