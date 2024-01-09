var productContainer;
if (localStorage.getItem("myProducts") != null) {
  productContainer = JSON.parse(localStorage.getItem("myProducts"))

} else {
  productContainer = [];
}
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

//getProducts
// let products = null;
// fetch("Products.json")
//   .then((res) => res.json())
//   .then((data) => {
// products = data;
showDetailes(productContainer);
// });

function showDetailes(x) {
  let single_product = document.querySelector(".single-product");
  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = productContainer.filter((value) => {
    return value.id == productId;
  })[0];
  if (!thisProduct) {
    window.location.href = "/";
  }
  //console.log(thisProduct.category);
  single_product.querySelector(".product-image-main img").src =
    "data:image/png;base64,"+thisProduct.image;
  single_product.querySelector(".breadcrumb .active").innerHTML =
    thisProduct.category;
  single_product.querySelector(".product-title h2").innerHTML =
    thisProduct.name;
  single_product.querySelector(".offer-price").innerHTML = thisProduct.price;
  single_product.querySelector("#desc").innerText = thisProduct.Description;

  single_product.querySelector(".product-image-slider .img1").src =
  "data:image/png;base64,"+thisProduct.image;
  single_product.querySelector(".product-image-slider .img2").src =
  "data:image/png;base64,"+thisProduct.image1;
  single_product.querySelector(".product-image-slider .img3").src =
  "data:image/png;base64,"+thisProduct.image2;
  single_product.querySelector(".product-image-slider .img4").src =
  "data:image/png;base64,"+thisProduct.image;
}

const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function () {
  sliderMainImage.src = sliderImageList[0].src;
  console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function () {
  sliderMainImage.src = sliderImageList[1].src;
  console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function () {
  sliderMainImage.src = sliderImageList[2].src;
  console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function () {
  sliderMainImage.src = sliderImageList[3].src;
  console.log(sliderMainImage.src);
};
