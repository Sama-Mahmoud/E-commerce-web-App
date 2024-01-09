
var productContainer = JSON.parse(localStorage.getItem("myProducts"))
var productsCount = document.getElementById('products_count');
var tbody = document.getElementById('tbody');
productsCount.innerText = productContainer.length;


var paymentContainer ;

if (localStorage.getItem("myPayments") != null) {
    paymentContainer = JSON.parse(localStorage.getItem("myPayments"))
    //productsCount.innerText = productContainer.length;
    //console.log(productContainer.length)
    //console.log(productsCount)


    //displayProduct(productContainer)
} else {
    paymentContainer = [];
}

// console.log(productContainer)
var i = 0;
for (const order of paymentContainer) {
    var tr = document.createElement("tr");
    var customerNameTd = document.createElement("td");
    customerNameTd.id = "cname" + i
    customerNameTd.innerText = order.customerName;
    // customerNameTd.style.width = '400px'
    tr.appendChild(customerNameTd);
    var price = 0;
    var productsName = "";
    for (const orderProduct of order.cartDetail) {

        productsName +=  orderProduct+"\n \n" ;
        //price += parseInt(orderProduct.product_Price)

    }
    var customerOrderproduct = document.createElement("td");
    customerOrderproduct.innerText = productsName ;
    customerOrderproduct.id = "cproduct" + i
    tr.appendChild(customerOrderproduct);

    var customerProductTd = document.createElement("td");
    customerProductTd.innerText = order.totalPrice;
    customerProductTd.id = "cprice" + i
    tr.appendChild(customerProductTd);

    tr.innerHTML+=`<td>
    <span class="status_orange"></span>
    in progress..
</td>`
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

