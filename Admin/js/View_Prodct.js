
var productContainer = JSON.parse(localStorage.getItem("myProducts"))
var productsCount = document.getElementById('products_count');
var tbody = document.getElementById('tbody');
productsCount.innerText = productContainer.length;

var categoryContainer;

if (localStorage.getItem("mycategories") != null) {
    //localStorage.getItem("myProducts") != null) {
    categoryContainer = JSON.parse(localStorage.getItem("mycategories"))
    //productsCount.innerText = productContainer.length;
    // console.log(productContainer.length)
    // console.log(productsCount)
    // productContainer = JSON.parse(data);


    //productsCount.innerText = productContainer.length;

    //displayProduct(productContainer)
} else {
    categoryContainer = [];
}

// console.log(productContainer)
var i = 0;
for (const product of productContainer) {
    var tr = document.createElement("tr");
    var productNameTd = document.createElement("td");
    productNameTd.id = "pname" + i
    productNameTd.innerText = product.name;
    productNameTd.style.width = '400px'
    tr.appendChild(productNameTd);

    var productCategoryTd = document.createElement("td");
    productCategoryTd.innerText = product.category;
    productCategoryTd.id = "pcat" + i

    tr.appendChild(productCategoryTd);

    var productPriceTd = document.createElement("td");
    productPriceTd.innerText = product.price;
    productPriceTd.id = "pprice" + i

    tr.appendChild(productPriceTd);

    var productCountTd = document.createElement("td");
    productCountTd.innerText = product.Count;
    productCountTd.id = "pcount" + i

    tr.appendChild(productCountTd);

    var productImgTd = document.createElement("td");
    productImgTd.innerHTML = `<img src="data:image/png;base64,${product.image}" width ="50px">`;
    tr.appendChild(productImgTd);

    var editIcon = document.createElement("td");
    editIcon.innerHTML = `<span id="editIc${i}" style="font-size:x-large; color: #088178;"  class="la la-edit"></span>`;
    editIcon.style.width = '60px'


    editIcon.addEventListener("click",
        //setFormForUpdate(productContainer.indexOf(product))
        function (e) {
            //var name = document.getElementById("pname"+i)
            //console.log(e.target.parentElement.parentElement.firstChild.nextSibling)
            var idIndex = e.target.id.charAt(e.target.id.length - 1)

            //console.log(e.target.id.charAt(e.target.id.length - 1));
            //var r ="ssssr"

            //console.log(r.charAt(r.length-1));

            e.target.parentElement.parentElement.firstChild.innerHTML =
                `<input id="inputName${idIndex}" type="text" placeholder="Product Name" value="${e.target.parentElement.parentElement.firstChild.innerText}">`
            var selector =document.createElement("select"); 
            selector.id ="inputCat"+idIndex 
            for (const category of categoryContainer) {
                var options = document.createElement("option");
                options.value = category.name;
                options.innerText = category.name;
                // options.innerText = "sama";

                selector.appendChild(options);
            }
            e.target.parentElement.parentElement.firstChild.nextSibling.innerText=""
            
            e.target.parentElement.parentElement.firstChild.nextSibling.appendChild(selector)
            // `<input id="inputCat${idIndex}" type="text" placeholder="Product Category" value="${e.target.parentElement.parentElement.firstChild.nextSibling.innerText}">`
            e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.innerHTML =
                `<input id="inputPrice${idIndex}" type="number" placeholder="Product price" value="${e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.innerText}">`
            e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.innerHTML =
                `<input id="inputCount${idIndex}" type="number" placeholder="Product Count" value="${e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.innerText}">`
        }
    )
    tr.appendChild(editIcon);

    var DoneIcon = document.createElement("td");
    DoneIcon.innerHTML = `<span id="doneIc${i}" style="font-size:x-large; color: green;"  class="la la-check"></span>`;
    DoneIcon.style.width = '60px'
    DoneIcon.addEventListener("click",
        function (e) {
            //var name = document.getElementById("pname"+i)
            //console.log(e)
            var idIndex = e.target.id.charAt(e.target.id.length - 1)

            // console.log(e.target.id.charAt(e.target.id.length - 1));
            var inputname = document.getElementById("inputName" + idIndex);
            var inputcat = document.getElementById("inputCat" + idIndex);
            var inputprice = document.getElementById("inputPrice" + idIndex)
            var inputCount = document.getElementById("inputCount" + idIndex)

            // console.log("id",idIndex)

            productContainer[idIndex].name = inputname.value;

            // `<input type="text" placeholder="Product Name" value="${e.target.parentElement.parentElement.firstChild.innerText}">`
            productContainer[idIndex].category = inputcat.value;
            // `<input type="text" placeholder="Product Category" value="${e.target.parentElement.parentElement.firstChild.nextSibling.innerText}">`
            productContainer[idIndex].price = inputprice.value;
            //`<input type="text" placeholder="Product price" value="${e.target.parentElement.parentElement.firstChild.nextSibling.nextSibling.innerText}">`
            productContainer[idIndex].Count = inputCount.value;


            localStorage.setItem("myProducts", JSON.stringify(productContainer))
            document.getElementById("pname" + idIndex).innerText = inputname.value;
            document.getElementById("pcat" + idIndex).innerText = inputcat.value;
            document.getElementById("pprice" + idIndex).innerText = inputprice.value;
            document.getElementById("pcount" + idIndex).innerText = inputCount.value;

            inputname.remove();
            inputcat.remove();
            inputprice.remove();
            inputCount.remove()
        }
    )
    tr.appendChild(DoneIcon);


    var DeleteIcon = document.createElement("td");
    DeleteIcon.innerHTML = `<span id="deleteIc${i}"  style="font-size:x-large; color: red;" class="la la-close"></span>`;
    DeleteIcon.style.width = '60px'
    DeleteIcon.addEventListener("click",
        function (e) {
            var idIndex = e.target.id.charAt(e.target.id.length - 1)
            productContainer.splice(idIndex, 1);
            for (const product of productContainer) {
                product.id = productContainer.indexOf(product) + 1;
                // var t=[]
                // t.indexOf()
            }

            localStorage.setItem("myProducts", JSON.stringify(productContainer))
            //tr.remove()
            location.reload();
        }
    )

    // editIcon.addEventListener("click",update)
    tr.appendChild(DeleteIcon);

    //tbody.parentElement.firstChild.nextSibling
    tbody.appendChild(tr)
    i++
}

