//let products;
let carts = [];
let totalPriceOfOrder = 0;
let cardOrderDetails = [];
var AorRContainer;

if (localStorage.getItem("accept&reject") != null) {
    AorRContainer = JSON.parse(localStorage.getItem("accept&reject"))
    
} else {
    AorRContainer = [];
}

var productContainer;
if (localStorage.getItem("myProducts") != null) {
  productContainer = JSON.parse(localStorage.getItem("myProducts"))

} else {
  productContainer = [];
}
// fetch("Products.json")
//   .then((res) => res.json())
//   .then((data) => {
    // products = data;
    addcartToCheckoutHtml();
  // });
function addcartToCheckoutHtml() {
  let memCart;
  if (localStorage.getItem("cart")) {
    memCart = JSON.parse(localStorage.getItem("cart"));
  }
  let cartRowItems = ``;
  let productRows = document.getElementsByClassName("checkCartBev")[0];
  let totalPrice = 0;
  let _totalQuantity = 0;
  for (var i = 0; i < memCart.length; i++) {
    let positionProduct = productContainer.findIndex(
      (value) => value.id == memCart[i].product_ID
    );
    let info = productContainer[positionProduct];
    totalPrice = totalPrice + info.price * memCart[i].quantity;
    totalPriceOfOrder = totalPrice;
    _totalQuantity = _totalQuantity + memCart[i].quantity;
    cardOrderDetails.push(info.name);
    cartRowItems += `
    <p>${info.name} <span class="price">$${
      info.price * memCart[i].quantity
    }</span></p>
      `;
  }
  productRows.innerHTML = cartRowItems;
  document.getElementById("price").innerHTML = totalPrice;
  document.getElementById("_cart-num").innerText = _totalQuantity;
}
// end of Remove products from cart

var _customerName = document.getElementById("fname");
var _customerEmail = document.getElementById("email");
var _customerAddress = document.getElementById("adr");
var _customerCity = document.getElementById("city");
var _btnOrd = document.getElementById("btnOrd");

var orderContainer;
if (localStorage.getItem("orders") != null) {
  orderContainer = JSON.parse(localStorage.getItem("orders"));
} else {
  orderContainer = [];
}
function addOrderToLocalStorage() {
  var order = {
    customerName: _customerName.value,
    customerEmail: _customerEmail.value,
    customerAddress: _customerAddress.value,
    customerCity: _customerCity.value,
    cartDetail: cardOrderDetails,
    totalPrice: totalPriceOfOrder,
    orderid: AorRContainer.length+1,
    status : ""
  };
  orderContainer.push(order);
  AorRContainer.push(order)
  localStorage.setItem("orders", JSON.stringify(orderContainer));
  localStorage.setItem("accept&reject", JSON.stringify(AorRContainer));

  //console.log(orderContainer);
  _btnOrd.value = "PENDING...";
  _btnOrd.disabled = true;
}

_btnOrd.addEventListener("click", addOrderToLocalStorage);
