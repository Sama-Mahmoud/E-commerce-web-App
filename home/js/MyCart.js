/*-------------------
    Quantity change
  --------------------- */

let price1 = 60;
let subtotal, total;
var proQty = $('.pro-qty');
proQty.prepend('<span class="dec qtybtn">-</span>');
proQty.append('<span class="inc qtybtn">+</span>');
proQty.on('click', '.qtybtn', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  if ($button.hasClass('inc')) {
    var newVal = parseFloat(oldValue) + 1;
    price1 += 60.00;
    subtotal += 60.00;
    total += 60.00;
    $(".tp1").html(`$${price1}.00`);
    $(`.subTotal`).html(`$${subtotal}.00`);
    $(`.total`).html(`$${total}.00`);
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      price1 -= 60.00;
      subtotal -= 60.00;
      total -= 60.00;
      $(".tp1").html(`$${price1}.00`);
      $(`.subTotal`).html(`$${subtotal}.00`);
      $(`.total`).html(`$${total}.00`);
      $(".tp1").html(`$${price1}.00`);
    } else {
      newVal = 0;
    }
  }
  $button.parent().find('input').val(newVal);
});

let price2 = 40;
var proQty1 = $('.pro-qty1');
proQty1.prepend('<span class="dec1 qtybtn1">-</span>');
proQty1.append('<span class="inc1 qtybtn1">+</span>');
proQty1.on('click', '.qtybtn1', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  if ($button.hasClass('inc1')) {
    var newVal = parseFloat(oldValue) + 1;
    price2 += 40.00;
    subtotal += 40.00;
    total += 40.00;
    $(`.subTotal`).html(`$${subtotal}.00`);
    $(`.total`).html(`$${total}.00`);
    $(".tp2").html(`$${price2}.00`);
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      price2 -= 40.00;
      subtotal -= 40.00;
      total -= 40.00;
      $(`.subTotal`).html(`$${subtotal}.00`);
      $(`.total`).html(`$${total}.00`);
      $(".tp2").html(`$${price2}.00`);
    } else {
      newVal = 0;
    }
  }
  $button.parent().find('input').val(newVal);
});
let price3 = 30;
var proQty2 = $('.pro-qty2');
proQty2.prepend('<span class="dec2 qtybtn2">-</span>');
proQty2.append('<span class="inc2 qtybtn2">+</span>');
proQty2.on('click', '.qtybtn2', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  if ($button.hasClass('inc2')) {
    var newVal = parseFloat(oldValue) + 1;
    price3 += 30.00;
    subtotal += 30.00;
    total += 30.00;
    $(`.subTotal`).html(`$${subtotal}.00`);
    $(`.total`).html(`$${total}.00`);
    $(".tp3").html(`$${price3}.00`);
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
      price3 -= 30.00;
      subtotal -= 30.00;
      total -= 30.00;
      $(`.subTotal`).html(`$${subtotal}.00`);
      $(`.total`).html(`$${total}.00`);
      $(".tp3").html(`$${price3}.00`);
    } else {
      newVal = 0;
    }
  }
  $button.parent().find('input').val(newVal);
});
subtotal = price1 + price2 + price3;
total = subtotal + 50;
function remove(x) {

  $(`.order${x}`).hide();
  if (x == 1) {
    subtotal -= price1;
    total -= price1;
    $(`.subTotal`).html(`$${subtotal}.00`);
    $(`.total`).html(`$${total}.00`);
  }
  else if (x == 2) {
    subtotal -= price2;
    total -= price2;
    $(`.subTotal`).html(`$${subtotal}.00`);
    $(`.total`).html(`$${total}.00`);
  } else if (x == 3) {
    subtotal -= price3;
    total -= price3;
    $(`.subTotal`).html(`$${subtotal}.00`);
    $(`.total`).html(`$${total}.00`);
  }
}