// Simple Cart Logic (Beginner Style)

// first we try to get the cart from localStorage
var cart = []; // this will store all items added to cart

var savedCart = localStorage.getItem("cart");
if (savedCart) {
  cart = JSON.parse(savedCart); // if something is saved, convert it back to array
}

// all products list
var products = [
  { id: 0, name: "Adidas T-Shirt", price: 78, img: "images/t1.jpg", description: "Classic adidas cotton t-shirt." },
  { id: 1, name: "Adidas T-Shirt", price: 50, img: "images/shi1.jpg", description: "Comfortable summer wear." },
  { id: 2, name: "Adidas T-Shirt", price: 50, img: "images/t2.jpg", description: "Stylish and modern design." },
  { id: 3, name: "Adidas T-Shirt", price: 50, img: "images/shi2.jpg", description: "Perfect for casual outings." },
  { id: 4, name: "Adidas T-Shirt", price: 50, img: "images/shi1.jpg", description: "Classic fit t-shirt." },
  { id: 5, name: "Adidas T-Shirt", price: 50, img: "images/hoodie.jpg", description: "Warm and cozy hoodie." },
  { id: 6, name: "Adidas T-Shirt", price: 50, img: "images/shi3.jpg", description: "Premium quality fabric." },
  { id: 7, name: "Adidas T-Shirt", price: 50, img: "images/t1.jpg", description: "Trendy design for 2025." },
  { id: 8, name: "Adidas Hoodie", price: 65, img: "images/hod1.jpg", description: "Comfortable fleece hoodie." },
  { id: 9, name: "Adidas Hoodie", price: 70, img: "images/hod4.jpg", description: "Stylish winter wear." },
  { id: 10, name: "Adidas Pants", price: 45, img: "images/pant1.jpg", description: "Casual everyday pants." },
  { id: 11, name: "Adidas T-Shirt", price: 50, img: "images/plane1.jpg", description: "Simple plain t-shirt." },
  { id: 12, name: "Adidas Hoodie", price: 60, img: "images/hod2.jpg", description: "Sporty hoodie design." },
  { id: 13, name: "Adidas Pants", price: 55, img: "images/pant2.webp", description: "Athletic track pants." },
  { id: 14, name: "Adidas T-Shirt", price: 50, img: "images/plan2.jpg", description: "Classic white tee." },
  { id: 15, name: "Adidas Hoodie", price: 65, img: "images/hod3.jpg", description: "Premium winter hoodie." },
  { id: 16, name: "Nike Max", price: 150, img: "images/nike1.jpeg", description: "Premium running shoe." },
  { id: 17, name: "Nike Max", price: 150, img: "images/nike2.jpeg", description: "Premium running shoe." },
  { id: 18, name: "Nike Max", price: 150, img: "images/nike4.jpeg", description: "Premium running shoe." },
  { id: 19, name: "Nike Max", price: 150, img: "images/nike5.jpeg", description: "Premium running shoe." },
  { id: 20, name: "Nike Max", price: 150, img: "images/nike1.jpeg", description: "Premium running shoe." },
  { id: 21, name: "Nike Max", price: 150, img: "images/nike1.jpeg", description: "Premium running shoe." },
  { id: 22, name: "Nike Max", price: 150, img: "images/nike1.jpeg", description: "Premium running shoe." },
  { id: 23, name: "Nike Max", price: 150, img: "images/nike1.jpeg", description: "Premium running shoe." },
  { id: 24, name: "Nike Max", price: 150, img: "images/nike7.jpeg", description: "Premium running shoe." },
  { id: 25, name: "Nike Max", price: 150, img: "images/nike6.jpeg", description: "Premium running shoe." }
];

// this function adds a product object to cart
function addToCart(product) {
  // add item at the start (you can also use push to add at the end)
  cart.unshift(product);

  // save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // update the small cart number on navbar
  updateCartCount();

  alert("Added to cart!");
}

// this will show how many items in cart
function updateCartCount() {
  var countElement = document.getElementById("cart-count");

  if (countElement) {
    countElement.innerText = cart.length;

    // if no items, hide badge (optional)
    if (cart.length > 0) {
      countElement.style.display = "flex"; // depends on your CSS
    } else {
      countElement.style.display = "none";
    }
  }
}

// when page finishes loading
window.onload = function () {
  // simple fade-in effect (if you have CSS for this)
  document.body.style.opacity = "1";

  // set cart count on page load
  updateCartCount();

  // if we are on single product page, then load that product
  if (window.location.pathname.indexOf("singlepro.html") !== -1) {
    loadProductDetails();
  }
};

// this will show product details on single product page
function loadProductDetails() {
  // get id from URL, like ?id=3
  var params = new URLSearchParams(window.location.search);
  var productId = params.get("id");

  if (productId != null) {
    // find product from array
    var product = null;
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == productId) {
        product = products[i];
        break;
      }
    }

    if (product) {
      // big image
      var bigImg = document.getElementById("bigimg");
      if (bigImg) {
        bigImg.src = product.img;
      }

      // main product name and price (single-pro-details section)
      var singleDetails = document.querySelector(".single-pro-details");
      if (singleDetails) {
        var nameHeading = singleDetails.querySelector("h4");
        var priceHeading = singleDetails.querySelector("h2");

        if (nameHeading) {
          nameHeading.innerText = product.name;
        }
        if (priceHeading) {
          priceHeading.innerText = "$" + product.price;
        }
      }

      // another details area (like cost box)
      var detailsDiv = document.querySelector(".cost");
      if (detailsDiv) {
        var costName = detailsDiv.querySelector("h4");
        var costPrice = detailsDiv.querySelector("h3");
        var addButton = detailsDiv.querySelector(".add"); // button with class "add"

        if (costName) {
          costName.innerText = product.name;
        }
        if (costPrice) {
          costPrice.innerText = "$" + product.price;
        }

        // when user clicks add button, add this product to cart
        if (addButton) {
          addButton.onclick = function () {
            addToCart(product);
          };
        }
      }
    }
  }
}
