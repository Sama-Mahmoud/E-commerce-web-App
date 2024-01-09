
var tbody = document.getElementById('tbody');

var paymentContainer;
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
var AorRContainer;

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
var productsCount = document.getElementById('products_count');
productsCount.innerText = productContainer.length;


var i = 0;
for (const order of orders) {
    var tr = document.createElement("tr");
    var customerNameTd = document.createElement("td");
    customerNameTd.id = "cname" + i
    customerNameTd.innerText = order.customerName;
    // customerNameTd.style.width = '400px'
    tr.appendChild(customerNameTd);
    var price = 0;
    var productsName = "";
    for (const orderProduct of order.cartDetail) {

        productsName += orderProduct + "\n \n"
        //price += parseInt(orderProduct.product_Price)

    }
    var customerOrderproduct = document.createElement("td");
    customerOrderproduct.innerText = productsName;
    customerOrderproduct.id = "cproduct" + i
    tr.appendChild(customerOrderproduct);

    var customerProductTd = document.createElement("td");
    customerProductTd.innerText = order.totalPrice;
    customerProductTd.id = "cprice" + i
    tr.appendChild(customerProductTd);

    var AcceptedIcone = document.createElement("td");
    AcceptedIcone.innerHTML = `<span id="doneIc${i}" style="font-size:x-large; color: green;"  class="la la-check"></span>`;
    AcceptedIcone.style.width = '60px';
    AcceptedIcone.addEventListener("click",
        function (e) {
            //var name = document.getElementById("pname"+i)
            //console.log(e)
            var idIndex = e.target.id.charAt(e.target.id.length - 1)


            // console.log("id",idIndex)

            //paymentContainer[idIndex].order_accepted = "accepted";
            // orders[idIndex].status = "confirmed"
            paymentContainer.push(orders[idIndex]);

            localStorage.setItem("myPayments", JSON.stringify(paymentContainer))
           // console.log(orders[idIndex])

            //console.log(AorRContainer.indexOf(orders[idIndex]))
            // AorRContainer[AorRContainer.indexOf(orders[idIndex])].status = "confirm";
            AorRContainer[AorRContainer.findIndex(object => {
                return object.orderid === orders[idIndex].orderid;
              })].status = "confirm";

            // var t =[]
            // t.indexOf
            localStorage.setItem("accept&reject", JSON.stringify(AorRContainer))

            orders.splice(idIndex, 1);
            localStorage.setItem("orders", JSON.stringify(orders))
            location.reload();


        }
    )
    tr.appendChild(AcceptedIcone);

    var RejectedIcon = document.createElement("td");
    RejectedIcon.innerHTML = `<span id="deleteIc${i}"  style="font-size:x-large; color: red;" class="la la-close"></span>`;
    RejectedIcon.style.width = '60px'
    RejectedIcon.addEventListener("click",
        function (e) {
            var idIndex = e.target.id.charAt(e.target.id.length - 1)
            //paymentContainer[idIndex].order_accepted = "rejected";
            // AorRContainer.push(orders[idIndex]);
            AorRContainer[AorRContainer.findIndex(object => {
                return object.orderid === orders[idIndex].orderid;
              })].status = "reject";
            localStorage.setItem("accept&reject", JSON.stringify(AorRContainer))

            orders.splice(idIndex, 1);
            localStorage.setItem("orders", JSON.stringify(orders))
            //localStorage.setItem("myProducts", JSON.stringify(productContainer))
            //tr.remove()
            location.reload();
        }
    )
    // editIcon.addEventListener("click",update)
    tr.appendChild(RejectedIcon);

    //tbody.parentElement.firstChild.nextSibling
    tbody.appendChild(tr)

    i++
    // var editIcon = document.createElement("td");
    // editIcon.innerHTML = `<span id="editIc${i}" style="font-size:x-large; color: #088178;"  class="la la-edit"></span>`;
    // editIcon.style.width = '60px'
    // editIcon.addEventListener("click",
    //     //setFormForUpdate(productContainer.indexOf(product))
    //     function (e) {
    //         //var name = document.getElementById("pname"+i)
    //         //console.log(e.target.parentElement.parentElement.firstChild.nextSibling)
    //         var idIndex = e.target.id.charAt(e.target.id.length - 1)

    //         //console.log(e.target.id.charAt(e.target.id.length - 1));
    //         //var r ="ssssr"

    //         //console.log(r.charAt(r.length-1));

    //         e.target.parentElement.parentElement.firstChild.innerHTML =
    //             `<input id="inputName${idIndex}" type="text" placeholder="Product Name" value="${e.target.parentElement.parentElement.firstChild.innerText}">`
    //         e.target.parentElement.parentElement.firstChild.nextSibling.innerHTML =
    //             `<input id="inputCat${idIndex}" type="text" placeholder="Product Category" value="${e.target.parentElement.parentElement.firstChild.nextSibling.innerText}">`
    //         e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.innerHTML =
    //             `<input id="inputPrice${idIndex}" type="text" placeholder="Product price" value="${e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.innerText}">`

    //     }
    // )
    // tr.appendChild(editIcon);
}
var r = 0;
for (const customer of customerContainer) {
    customercon = document.getElementById("customerContainer");

    customercon.innerHTML+= `
    <div class="customer">
    <div class="info">
        <img src="../Source/user img2.jpg" alt="" width="40px" height="40px">
        <div>
            <h4>
            ${customer.mail}
            </h4>
            <small>${customer.user_Name}</small>
        </div>

    </div>

    <div class="contact">
        <span class="las la-user-circle"></span>
        <span class="las la-comment"></span>
        <span class="las la-phone"></span>
    </div>
</div>
`

}