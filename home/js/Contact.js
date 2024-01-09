function addQuantityToCart() {
  let memCart;
  if (localStorage.getItem("cart")) {
    memCart = JSON.parse(localStorage.getItem("cart"));
  }
  let _totalQuantity = 0;
  for (var i = 0; i < memCart.length; i++) {
    _totalQuantity = _totalQuantity + memCart[i].quantity;
  }
  document.getElementById("_cart-num").innerText = _totalQuantity;
}
addQuantityToCart();
