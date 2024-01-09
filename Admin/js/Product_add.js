var productName = document.getElementById("name");
var productPrice = document.getElementById("price");
var productCategory = document.getElementById("category");
var productCount = document.getElementById("count");
var productDescription = document.getElementById("description");
var addBtn = document.getElementById("Addbtn");
var imgFile = document.getElementById('product-img');
var imgFile1 = document.getElementById('product-img1');
var imgFile2 = document.getElementById('product-img2');
var imgFile3 = document.getElementById('product-img3');
var productsCount = document.getElementById('products_count');
///////////////////////////////////////////////////////////////
var selector = document.getElementById("cat")

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
 console.log(categoryContainer)

for (const category of categoryContainer) {
    var options = document.createElement("option");
    options.value = category.name ;
    options.innerText = category.name;
    // options.innerText = "sama";

    selector.appendChild(options);
}
// const fs = require('fs');
// const data = fs.readFileSync('Products.json');
// const jsonData = JSON.parse(data);

//console.log(JSON.parse(localStorage.getItem("myProducts").))
var productContainer;
// var reader;
var base64String = "";
var base64String1 = "";
var base64String2 = "";
var base64String3 = "";

//console.log(imgFile);

// function transformToBase64(e) {
//     const file = e.target.files[0];
//     reader = new FileReader();
//     reader.onloadend = () => {
//         // convert file to base64 String
//         base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
//         // store file
//         //localStorage.setItem('wallpaper', base64String);
//         // display image
//     };
//     reader.readAsDataURL(file);
// }
imgFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        // convert file to base64 String
        base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        // store file
        //localStorage.setItem('wallpaper', base64String);
        // display image
    };
    reader.readAsDataURL(file);
});
imgFile1.addEventListener('change', (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        // convert file to base64 String
        base64String1 = reader.result.replace('data:', '').replace(/^.+,/, '');
        // store file
        //localStorage.setItem('wallpaper', base64String);
        // display image
    };
    reader.readAsDataURL(file);
});
imgFile2.addEventListener('change', (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        // convert file to base64 String
        base64String2 = reader.result.replace('data:', '').replace(/^.+,/, '');
        // store file
        //localStorage.setItem('wallpaper', base64String);
        // display image
    };
    reader.readAsDataURL(file);
});
imgFile3.addEventListener('change', (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        // convert file to base64 String
        base64String3 = reader.result.replace('data:', '').replace(/^.+,/, '');
        // store file
        //localStorage.setItem('wallpaper', base64String);
        // display image
    };
    reader.readAsDataURL(file);
});

// fetch('Products.json')
//     .then(response => response.json())
//     .then(data => {
if (localStorage.getItem("myProducts") != null) {
    //localStorage.getItem("myProducts") != null) {
    productContainer = JSON.parse(localStorage.getItem("myProducts"))
    productsCount.innerText = productContainer.length;
    // console.log(productContainer.length)
    // console.log(productsCount)
    // productContainer = JSON.parse(data);


    productsCount.innerText = productContainer.length;

    //displayProduct(productContainer)
} else {
    productContainer = [];
}

function addProduct() {
    // var product = {
    //     product_Name: productName.value == undefined ? " " : productName.value,
    //     product_Price: productPrice.value == undefined ? " " : productPrice.value,
    //     product_Category: productCategory.value == undefined ? " " : productCategory.value,
    //     product_Count: productCount.value == undefined ? " " : productCount.value,
    //     product_Description: productDescription.value == undefined ? " " : productDescription.value,
    //     product_Image: base64String == undefined ? " " : base64String
    // };
    //console.log(productContainer)
    //console.log(product)
   // console.log("before prevent default")
    //e.preventDefault()
    var product = {
        id: productContainer.length + 1,
        name: productName.value == undefined ? " " : productName.value,
        price: productPrice.value == undefined ? " " : productPrice.value,
        category: selector.value == undefined ? " " : selector.value,
        Count: productCount.value == undefined ? " " : productCount.value,
        Description: productDescription.value == undefined ? " " : productDescription.value,
        image: base64String == undefined ? " " : base64String,
        image1: base64String1 == undefined ? " " : base64String1,
        image2: base64String2 == undefined ? " " : base64String2,
        image3: base64String3 == undefined ? " " : base64String3
    };
    productContainer.push(product);

    // const updatedData = JSON.stringify(productContainer, null, 2);
    // const blob = new Blob([updatedData], { type: 'application/json' });

    // const a = document.createElement('a');
    // a.href = URL.createObjectURL(blob);
    // a.download = 'updated_data.json';
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);

    // console.log('Data written to file');

    //fs.writeFileSync('Products.json', JSON.stringify(productContainer));
    localStorage.setItem("myProducts", JSON.stringify(productContainer))

    console.log(productContainer);
    clearForm();
    //displayProduct(productContainer);
    // document.body.style.background = `url(data:image/png;base64,${base64String})`;
    productsCount.innerText = productContainer.length;

}
function clearForm() {
    productName.value = "";
    productPrice.value = "";
    // productCategory.value = "";
    productCount.value = "";
    productDescription.value = "";
    imgFile.value = ""
    imgFile1.value = ""
    imgFile2.value = ""
    imgFile3.value = ""
}


// Example data to be set in the database
addBtn.addEventListener("click", addProduct)
// addBtn.addEventListener("submit", (e)=>{
//     e.preventDefault()
// })



//console.log(data);
// })
// .catch(error => {
//     console.error('Error fetching data:', error);
// });



// if (data!= null) {
//     //localStorage.getItem("myProducts") != null) {
//     // productContainer = JSON.parse(localStorage.getItem("myProducts"))
//     // productsCount.innerText = productContainer.length;
//     // console.log(productContainer.length)
//     // console.log(productsCount)
//     productContainer = JSON.parse(data);
//     productsCount.innerText = productContainer.length;


//     //displayProduct(productContainer)
// } else {
//     productContainer = [];
// }

// function addProduct() {
//     // var product = {
//     //     product_Name: productName.value == undefined ? " " : productName.value,
//     //     product_Price: productPrice.value == undefined ? " " : productPrice.value,
//     //     product_Category: productCategory.value == undefined ? " " : productCategory.value,
//     //     product_Count: productCount.value == undefined ? " " : productCount.value,
//     //     product_Description: productDescription.value == undefined ? " " : productDescription.value,
//     //     product_Image: base64String == undefined ? " " : base64String
//     // };
//     //console.log(productContainer)
//     //console.log(product)
//     var product = {
//         id : productContainer.length+1,
//         name: productName.value == undefined ? " " : productName.value,
//         price: productPrice.value == undefined ? " " : productPrice.value,
//         category: productCategory.value == undefined ? " " : productCategory.value,
//         Count: productCount.value == undefined ? " " : productCount.value,
//         Description: productDescription.value == undefined ? " " : productDescription.value,
//         image: base64String == undefined ? " " : base64String,
//         image1:base64String1 == undefined ? " " : base64String,
//         image2:base64String2 == undefined ? " " : base64String,
//         image3:base64String3 == undefined ? " " : base64String
//     };
//     productContainer.push(product);
//     fs.writeFileSync('Products.json', JSON.stringify(productContainer));
//     //localStorage.setItem("myProducts", JSON.stringify(productContainer))
//     console.log(productContainer);
//     clearForm();
//     //displayProduct(productContainer);
//     // document.body.style.background = `url(data:image/png;base64,${base64String})`;
//     productsCount.innerText = productContainer.length;

// }
// function clearForm() {
//     productName.value = "";
//     productPrice.value = "";
//     productCategory.value = "";
//     productCount.value = "";
//     productDescription.value = "";
//     imgFile.value =""
// }


// // Example data to be set in the database
// addBtn.addEventListener("click", addProduct)


