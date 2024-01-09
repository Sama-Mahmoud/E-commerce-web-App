const body = document.querySelector("body"),
  nav = document.querySelector("nav");
//       modeToggle = document.querySelector(".dark-light"),
let searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");


var productContainer;

// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

if (localStorage.getItem("myProducts") != null) {
  productContainer = JSON.parse(localStorage.getItem("myProducts"))

} else {
  productContainer = [];
}


//getProducts
//let products = null;
let carts = [];
let wishList = [];
// fetch("Products.json")
//   .then((res) => res.json())
//   .then((data) => {
// products = data;
// displayItem(products);
displayItem(productContainer);

//get data from memory
if (localStorage.getItem("cart")) {
  carts = JSON.parse(localStorage.getItem("cart"));
  addcartToHtml();
}
//get wish from memory
if (localStorage.getItem("wishList")) {
  wishList = JSON.parse(localStorage.getItem("wishList"));
  addWishListToHtml();
}
// });
//add products to html
function displayItem(x) {
  var cartona = ``;
  for (let i = 0; i < x.length; i++) {
    cartona += ` <div class="pro product-card" id="${x[i].id}" >
      <div class="badge">Hot</div>
      <div class="product-tumb">
          <img src='data:image/png;base64,${x[i].image}' alt="">
      </div>
      <div class="product-details">
          <span class="product-catagory">${x[i].category}</span>
          <h4  class="itemTitle"><a href="SinglePage.html?id=${x[i].id}">${x[i].name}</a></h4>
          <p class="itemDesc">Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.</p>
          <div class="product-bottom-details" >
              <div class="product-price "><small>$96.00</small>${x[i].price}</div>
             
                  <i class="fa-solid fa-heart toWishList" id="${x[i].id}"></i>

                  <i class="fa fa-shopping-cart toCart" id="${x[i].id}"></i>
              
          </div>
      </div>
  </div>`;
  } // </div>
  document.getElementById("container-1").innerHTML = cartona;
  document.getElementById("container-2").innerHTML = cartona;
} // <div class="product-links " style="background-color:red" id="${x[i].id}">

document.getElementById("container-1").addEventListener("click", (event) => {
  let targetElement = event.target;
  if (targetElement.classList.contains("toCart")) {
    let productId = parseInt(targetElement.id);
    addToCart(productId);
    
  }
});
document.getElementById("container-2").addEventListener("click", (event) => {
  let targetElement = event.target;
  if (targetElement.classList.contains("toCart")) {
    let productId = parseInt(targetElement.id);
    addToCart(productId);
  }
});
//addwish 
document.getElementById("container-1").addEventListener("click", (event) => {
  let targetElement = event.target;
  if (targetElement.classList.contains("toWishList")) {
    let productId = parseInt(targetElement.id);
    addToWishList(productId);
  }
});
document.getElementById("container-2").addEventListener("click", (event) => {
  let targetElement = event.target;
  if (targetElement.classList.contains("toWishList")) {
    let productId = parseInt(targetElement.id);
    addToWishList(productId);
  }
});
// addToCart
function addToCart(product_id) {
  let positionThisProductInCart = carts.findIndex(
    (value) => value.product_ID == product_id
  );
  if (carts.length <= 0) {
    carts = [
      {
        product_ID: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    carts.push({
      product_ID: product_id,
      quantity: 1,
    });
  } else {
    carts[positionThisProductInCart].quantity =
      carts[positionThisProductInCart].quantity + 1;
  }

  updateCartPrice();
  addcartToMemory(carts);
  addcartToHtml();
}
//add to wish list
function addToWishList(product_id) {
  let positionThisProductInWish = wishList.findIndex(
    (value) => value.product_ID == product_id
  );
  if (wishList.length <= 0) {
    wishList = [
      {
        product_ID: product_id,
        quantity:1
      },
    ];
  } else if (positionThisProductInWish < 0) {
    wishList.push({
      product_ID: product_id,
      quantity:1
    });
  }
  addWishToMemory(wishList);
  addWishListToHtml();
}
//addWishToMemory
function addWishToMemory(wishList) {
  localStorage.setItem("wishList", JSON.stringify(wishList));
}
//add cart to html
function addcartToHtml() {
  let memCart;
  if (localStorage.getItem("cart")) {
    memCart = JSON.parse(localStorage.getItem("cart"));
  }

  let cartRowItems = ``;
  let productRows = document.getElementsByClassName("_product-rows")[0];
  let totalQuantity = 0;
  for (var i = 0; i < memCart.length; i++) {
    let positionProduct = productContainer.findIndex(
      (value) => value.id == memCart[i].product_ID
    );
    let info = productContainer[positionProduct];
    totalQuantity = totalQuantity + memCart[i].quantity;
    cartRowItems += `
        <div class="_product-row" id="${info.id}">
        <img class="_cart-image" src="data:image/png;base64,${info.image}" alt="">
         <span class ="_cart-price">${info.price * memCart[i].quantity}</span>
         <span class ="_minus">-</span>
        <span class="_product-quantity">${memCart[i].quantity}</span>
        <span class ="_plus">+</span>
       <button class="_remove-btn">Remove</button>
        </div>
    `;
  }
  productRows.innerHTML = cartRowItems;
  updateCartPrice();
  document.getElementById("_cart-num").innerText = totalQuantity;
  productRows.addEventListener("click", (event) => {
    let positionClick = event.target;
    if (
      positionClick.classList.contains("_minus") ||
      positionClick.classList.contains("_plus")
    ) {
      let pro_id = parseInt(positionClick.parentElement.id);
      let type = "minus";
      if (positionClick.classList.contains("_plus")) {
        type = "plus";
      }
      changeQuantity(pro_id, type, memCart);
    }
  });
  // Remove products from cart
  const removeBtn = document.getElementsByClassName("_remove-btn");
  for (var i = 0; i < removeBtn.length; i++) {
    button = removeBtn[i];
    button.addEventListener("click", removeItem);
  }

  function removeItem(event) {
    btnClicked = event.target;
    btnClicked.parentElement.remove();
    let ay7aga = carts.findIndex(
      (value) => value.product_ID == btnClicked.parentElement.id
    );
    carts.splice(ay7aga, 1);
    addcartToMemory(carts);
    updateCartPrice();
    addcartToHtml();
  }
  // end of Remove products from cart
}
function addWishListToHtml() {
  let memWish;
  if (localStorage.getItem("wishList")) {
    memWish = JSON.parse(localStorage.getItem("wishList"));
  }
  let wishRowItems = ``;
  let wishRows = document.getElementsByClassName("__product-rows")[0];
  let totalQuantity = 0;
  for (var i = 0; i < memWish.length; i++) {
    let positionProduct = productContainer.findIndex(
      (value) => value.id == memWish[i].product_ID
    );
    let info = productContainer[positionProduct];
    totalQuantity ++;
    wishRowItems += `
        <div class="_product-row" id="${info.id}">
        <img class="_cart-image" src="data:image/png;base64,${info.image}" alt="">
        <span class ="_cart-name">${info.name}</span>
         <span class ="_cart-price">$${info.price}</span>
        <button class="__remove-btn">Remove</button>
        </div>
    `;
  }
  wishRows.innerHTML = wishRowItems;
  document.getElementById("_wish-num").innerText = totalQuantity;
  // Remove products from cart
  const removeBtn = document.getElementsByClassName("__remove-btn");
  for (var i = 0; i < removeBtn.length; i++) {
    button = removeBtn[i];
    button.addEventListener("click", removeItem);
  }

  function removeItem(event) {
    btnClicked = event.target;
    btnClicked.parentElement.remove();
    let ay7aga = wishList.findIndex(
      (value) => value.product_ID == btnClicked.parentElement.id
    );
    wishList.splice(ay7aga, 1);
    addWishToMemory(wishList);
    addWishListToHtml();
  }
  // end of Remove products from cart
}
//change quantity
function changeQuantity(prod_id, sp_type, carts) {
  let positionItemInCart = carts.findIndex(
    (value) => value.product_ID == prod_id
  );
  if (positionItemInCart >= 0) {
    if (sp_type == "plus") {
      carts[positionItemInCart].quantity =
        carts[positionItemInCart].quantity + 1;
    } else {
      let valueChange = carts[positionItemInCart].quantity - 1;
      if (valueChange > 0) {
        carts[positionItemInCart].quantity = valueChange;
      } else {
        carts.splice(positionItemInCart, 1);
      }
    }
    updateCartPrice();
  }
  addcartToMemory(carts);

  addcartToHtml();
}

// add cart to local storage
function addcartToMemory(carts) {
  updateCartPrice();
  localStorage.setItem("cart", JSON.stringify(carts));
}

// update total price
function updateCartPrice() {
  let total = 0;
  let zeft = document.getElementsByClassName("_product-row");
  for (var i = 0; i < zeft.length; i++) {
    cartRow = zeft[i];
    var priceElement = cartRow.getElementsByClassName("_cart-price")[0];
    // var quantityElement = cartRow.getElementsByClassName('_product-quantity')[0]
    total = total + parseFloat(priceElement.innerText);
  }
  document.getElementsByClassName("_total-price")[0].innerText = "$" + total;
}
// end of update total price

// open cart modal
const cart = document.querySelector("#cartt");
const cartModalOverlay = document.querySelector("._cart-modal-overlay");

cart.addEventListener("click", () => {
  if (cartModalOverlay.style.transform === "translateX(-200%)") {
    cartModalOverlay.style.transform = "translateX(0)";
  } else {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector("#_close-btn");

closeBtn.addEventListener("click", () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});

cartModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("_cart-modal-overlay")) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
document.getElementById("CheckOut_btn").addEventListener("click", (e) => {
  var a = document.createElement("a");
  a.href = "CheckOut.html"
  a.click();
  a.remove()
  //e.target.href="CheckOut.html"
})
// end of close cart modal



// open whish modal
const whishItem = document.getElementById("wishh");
const wishModalOverlay = document.querySelector(".__cart-modal-overlay");

whishItem.addEventListener("click", () => {
  if (wishModalOverlay.style.transform === "translateX(-200%)") {
    wishModalOverlay.style.transform = "translateX(0)";
  } else {
    wishModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of open wish modal


// close wish modal
const closeBtnn = document.querySelector("#__close-btn");

closeBtnn.addEventListener("click", () => {
  wishModalOverlay.style.transform = "translateX(-200%)";
});

wishModalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("__cart-modal-overlay")) {
    wishModalOverlay.style.transform = "translateX(-200%)";
  }
});
// end of close wish modal

//search
function searchProduct(term){
  var cartona=``;
   for(let i=0 ; i<productContainer.length;i++){
       if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
        cartona +=`
        <div class="pro product-card" id="${productContainer[i].id}" >
      <div class="badge">Hot</div>
      <div class="product-tumb">
          <img src='data:image/png;base64,${productContainer[i].image}' alt="">
      </div>
      <div class="product-details">
          <span class="product-catagory">${productContainer[i].category}</span>
          <h4  class="itemTitle"><a href="SinglePage.html?id=${productContainer[i].id}">${productContainer[i].name}</a></h4>
          <p class="itemDesc">Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.</p>
          <div class="product-bottom-details" >
              <div class="product-price "><small>$96.00</small>${productContainer[i].price}</div>
             
                  <i class="fa-solid fa-heart toWishList" id="${productContainer[i].id}"></i>

                  <i class="fa fa-shopping-cart toCart" id="${productContainer[i].id}"></i>
              
          </div>
      </div>
  </div>
        `
       }
   }
   document.getElementById("container-1").innerHTML = cartona;
   document.getElementById("container-2").innerHTML = cartona;
}


let logoutBtn = document.getElementById("logOutFromSite");
logoutBtn.addEventListener("click" , ()=>{
  
  // chrome.history.deleteAll().then(function () {
    window.history.go(-(window.history.length-1))
    //deleteAll().then(function () {
    // window.location.replace("Log_Reg.html");
  //})
  // });
})