function displayName() {
    
    var enteredName = document.getElementById("nameInput").value;

    
    var outputMessage = document.getElementById("outputMessage");

    
    if (enteredName.trim() !== "") {
        outputMessage.textContent = "Hello, " + enteredName + "!";
    } else {
        
        outputMessage.textContent = "Please enter your name.";
    }
}







document.addEventListener('DOMContentLoaded', function () {
    const shoeList = document.getElementById('shoeList');
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');

    let totalPrice = 0;

    shoeList.addEventListener('click', function (event) {
        if (event.target.classList.contains('shoeItem')) {
            const itemName = event.target.dataset.name;
            const itemPrice = parseFloat(event.target.dataset.price);

            // Add item to cart
            const cartItem = document.createElement('li');
            cartItem.textContent = `${itemName} - $${itemPrice}`;
            cartItems.appendChild(cartItem);

            // Update total price
            totalPrice += itemPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        }
    });
});