var mylist = document.getElementById("mylist")
var addtaskbtn = document.getElementById("addbtn")
var categorynametxt = document.getElementById("tasknametxt");
// var selector = document.getElementById("cat")
var index = 0;

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

function addcategory() {
    var category = {
        name: categorynametxt.value == undefined ? " " : categorynametxt.value,

    };
    categoryContainer.push(category);
    localStorage.setItem("mycategories", JSON.stringify(categoryContainer))

    console.log(categoryContainer);
    clearForm();
    location.reload();
   

}
function clearForm() {
    categorynametxt.value = "";

}


addtaskbtn.addEventListener("click", addcategory)

var i = 0;
for (const category of categoryContainer) {
    var tr = document.createElement("tr");
    var productCategoryTd = document.createElement("td");
    productCategoryTd.id = "pcat" + i
    productCategoryTd.innerText = category.name;
    productCategoryTd.style.width = '400px'
    tr.appendChild(productCategoryTd);

    // var productCategoryTd = document.createElement("td");
    // productCategoryTd.innerText = product.category;
    // productCategoryTd.id = "pcat" + i

   
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
                `<input id="inputCat${idIndex}" type="text" placeholder="Product Category" value="${e.target.parentElement.parentElement.firstChild.innerText}">`
            
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

           
            var inputcat = document.getElementById("inputCat" + idIndex);
           

            // console.log("id",idIndex)


            // `<input type="text" placeholder="Product Name" value="${e.target.parentElement.parentElement.firstChild.innerText}">`
            categoryContainer[idIndex].name = inputcat.value;
            // `<input type="text" placeholder="Product Category" value="${e.target.parentElement.parentElement.firstChild.nextSibling.innerText}">`
           


            localStorage.setItem("mycategories", JSON.stringify(categoryContainer))
            document.getElementById("pcat" + idIndex).innerText = inputcat.value;
           

            inputcat.remove();
            
        }
    )
    tr.appendChild(DoneIcon);


    var DeleteIcon = document.createElement("td");
    DeleteIcon.innerHTML = `<span id="deleteIc${i}"  style="font-size:x-large; color: red;" class="la la-close"></span>`;
    DeleteIcon.style.width = '60px'
    DeleteIcon.addEventListener("click",
        function (e) {
            var idIndex = e.target.id.charAt(e.target.id.length - 1)
            categoryContainer.splice(idIndex, 1);
            

            localStorage.setItem("mycategories", JSON.stringify(categoryContainer))
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






