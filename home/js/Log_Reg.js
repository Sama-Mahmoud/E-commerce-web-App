
// RegisterForm
var userName = document.getElementById('UserName')
var email = document.getElementById('Email')
var Password = document.getElementById('Password')
var users;
if (localStorage.getItem("myWebUsers") != null) {
  //localStorage.getItem("myProducts") != null) {
  users = JSON.parse(localStorage.getItem("myWebUsers"))
  //productsCount.innerText = productContainer.length;
  // console.log(productContainer.length)
  // console.log(productsCount)
  // productContainer = JSON.parse(data);


  //productsCount.innerText = productContainer.length;

  //displayProduct(productContainer)
} else {
  users = [];
}
function createAcc() {

  if (!validateEmail(email.value)) {
    alert(
      "Invalid email address for Sign up. Please enter a valid email.",

    );
    return;
  }

  // Validate password
  if (!validatePassword(Password.value)) {
    alert(
      "Invalid password for Sign up. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
    );
    return;
  }
  var user = {
    user_Name: userName.value == undefined ? " " : userName.value,
    mail: email.value == undefined ? " " : email.value,
    pass: Password.value == undefined ? " " : Password.value,
  }
  users.push(user);
  localStorage.setItem("myWebUsers", JSON.stringify(users))
  console.log(users);
  clearForm();
  alert("Account successfully created")
}

function clearForm() {
  userName.value = "";
  email.value = "";
  Password.value = "";
}

//LoginForm
function checkData() {
  var e_mail = document.getElementById("email-log").value;
  var pass = document.getElementById("ps-log").value;

  if (e_mail == "admin" && pass == "admin") {
    console.log("true");
    document.getElementById('myform').action = "../Admin/Pages/Admin-Page.html"
    //"C:/Users/DELL/sama Dropbox/Sama Mahmoud/PC/Desktop/ITI/E-commerce Project (S)/Admin/Pages/Admin-Page.html";

  }
  if (!validateEmail(e_mail)) {
    alert(
      "Invalid email address for Sign In. Please enter a valid email.",

    );
    return;
  }

  // Validate password
  if (!validatePassword(pass)) {
    alert(
      "Invalid password for Sign In. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
    );
    return;
  }
  // const storedArrayOfObjects = JSON.parse(localStorage.getItem('myWebUsers'));

  for (const user of users) {
    if (e_mail == user.mail && pass == user.pass) {
      console.log("true");
      document.getElementById('myform').action = "index.html";
    }

  }
  // var email1 = storedArrayOfObjects[0].mail;
  // var pass1 = storedArrayOfObjects[0].pass;
  // if (e_mail == email1 && pass == pass1) {
  //   console.log("true");
  //   document.getElementById('myform').action = "index.html";
  // } else {
  //   alert("email or pass is incorrect")
  // }
}
function reg() {
  document.getElementById('rg-fm').action = "register.html";
}

// Function to validate email format
function validateEmail(email) {
  // Regular expression for a standard email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Check if the email matches the regular expression
  return emailRegex.test(email);
}

// Function to validate password
function validatePassword(password) {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  );
}