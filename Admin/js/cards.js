
var paymentContainer;
var AorRContainer;
var customerContainer;
var productContainer ;


if (localStorage.getItem("myProducts") != null) {
    productContainer = JSON.parse(localStorage.getItem("myProducts"))

} else {
    productContainer = [];
}
if (localStorage.getItem("myPayments") != null) {
    paymentContainer = JSON.parse(localStorage.getItem("myPayments"))

} else {
    paymentContainer = [];
}

if (localStorage.getItem("accept&reject") != null) {
    AorRContainer = JSON.parse(localStorage.getItem("accept&reject"))
    
} else {
    AorRContainer = [];
}

var orders;

if (localStorage.getItem("orders") != null) {
    orders = JSON.parse(localStorage.getItem("orders"))
    console.log(paymentContainer.length)

} else {
    orders = [];
}

if (localStorage.getItem("myWebUsers") != null) {
    customerContainer = JSON.parse(localStorage.getItem("myWebUsers"))

} else {
    customerContainer = [];
}
document.getElementById("customernum").innerText = customerContainer.length
document.getElementById("ordernum").innerText=orders.length
var income = 0;
for (const pay of paymentContainer) {
    income+=parseInt(pay.totalPrice)
}
document.getElementById("paymentnum").innerText= income;
var productsCount = document.getElementById('products_count');
productsCount.innerText = productContainer.length;