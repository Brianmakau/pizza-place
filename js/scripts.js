function Pizza( size, crust, toppings, quantity){
  this.selectedSize = size;
  this.selectedCrust = crust;
  this.selectedToppings = toppings;
  this.selectedQuantity = quantity;
}

Pizza.prototype.calcTotal = function(deliveryPrice) {
  var total = 0;
  total += sizeCalcPrice(this.selectedSize);
  total += sizeCalcPrice(this.selectedSize);
  total += sizeCalcPrice(this.selectedSize);
  total = total * this.selectedQuantity; 
  total += deliveryPrice;
  return total;
}

var sizePrice = {
  small: 400,
  medium: 800,
  large: 1000
};

//crust price
var crustPrice = {
  crispy: 300,
  stuffed: 350,
  gluten: 200
};

// topping price
var toppingPrice = [
  {
    GreenPepper: {
      price:250,
    },
    Chicken: {
      price:200,
    },
    Bacon: {
      price:300
    },
    Mushroom: {
      price:400,
    }
  }
];

// Function to calculate price according to size
function sizeCalcPrice(size) {
  if (size === "small") {
    return sizePrice.small;
  } else if (size === "medium") {
    return sizePrice.medium;
  } else {
    return sizePrice.large;
  }
}

// Function to calculate price according to crust
function crustCalcPrice(crust) {
  if (crust === "crispy") {
    return crustPrice.crispy;
  } else if (crust === "stuffed") {
    return crustPrice.stuffed;
  } else {
    return crustPrice.gluten;
  }
};

// Function to calculate price according to topping
function toppingsCalcPrice(topping) {
  if (topping === "green") {
    return toppingPrice.GreenPepper;
  } else if (topping === "bacon") {
    return toppingPrice.Bacon;
  } else if (topping === "chicken") {
    return toppingPrice.Chicken;
  } else {
    return toppingPrice.Mushroom;
  }
};

$(document).ready(function(){
  $('#form2').submit(function(event){
    event.preventDefault();

    var selectedDeliver = parseInt($('#delivery-option').val());
    var deliveryPrices = [250, 0]
    var crust = $('#crust').val();
    var toppings = $('#toppings').val();
    var size = $('#size').val();
    var inputtedQuantity = parseInt($('#quantity').val());
    var deliveryPrice = deliveryPrices[selectedDeliver-1];

    var newPizza = new Pizza(size, crust, toppings, inputtedQuantity);
    
    var size = $("#size").find(":selected").val();
    alert("Your order is size " + newPizza.selectedSize + ' ,' + newPizza.selectedToppings + ' and ' + newPizza.selectedCrust + " pizza. Click ok to view your bill");

    var deliver = confirm(
      "Would you like your pizza to be delivered to you? transport cost ksh 250."
    );

    if (deliver) {
      var place = prompt("Enter your location");
      $("#place").text(place);
      $("#success").show(); {
        alert('Your order will be delivered to your location');
      } 
    } else {
      $("#no-delivery").show();
    }
    
    alert('Total to be paid is ' + newPizza.calcTotal(deliveryPrice));
    document.getElementById('allme').reset();

  });
});