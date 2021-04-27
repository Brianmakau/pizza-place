function Details( size, crust, toppings, quantity){
  this.selectedSize = size;
  this.selectedCrust = crust;
  this.selectedToppings = toppings;
  this.selectedQuantity = quantity;
}

function Total(sizePrice, quantity, delivery){
  this.sizePrice =sizePrice; 
  this.quantity = quantity;
  this.delivery = delivery;
}

Total.prototype.finalTotal = function(){
  return this.sizePrice * this.quantity + this.delivery;
}

$(document).ready(function(){
  $('#form2').submit(function(event){
    event.preventDefault();
    var sizePrice = {
      small: 400,
      medium: 800,
      large: 1000
    };
    var toppingPrice = [
      {
        Green Pepper: {
          price:250,
        },
        Chicken: {
        price:200,
        },
        bacon: {
          price:300
        }
        Mushroom: {
          price:400,
        }

      }
    ]
    //crust price
    var crustPrice = {
      crispy: 300,
      stuffed: 350,
      gluten: 200
    };
    //function calc prize according to size
    function sizeCalcPrice(size) {
      if (size === "small") {
        return sizePrice.small * 1;
      } else if (size === "medium") {
        return sizePrice.medium * 1;
      } else {
        return sizePrice.large * 1;
      }
    }
    //price according to crust
    function crustCalcPrice(crust) {
      if (crust === "crispy") {
        return crustPrice.crispy * 1;
      } else if (crust === "stuffed") {
        return crustPrice.stuffed * 1;
      } else {
        return crustPrice.gluten * 1;
      };
    };
  
    
    var selectedDeliver = parseInt($('#delivery-option').val());
    var deliveryPrices = [250, 0]
    var crust = $('#crust').val();
    var toppings = $('#toppings').val();
    var size = parseInt($('#size').val());
    var pizzaPrice = (sizePrice,toppingPrice,crustPrice);
    var inputtedQuantity = parseInt($('#quantity').val());
    var deliveryPrice = deliveryPrices[selectedDeliver-1];

    var newDetails = new Details(size, crust,toppings, inputtedQuantity);
    var newTotal = new Total(sizePrice, crustPrice,toppingPrice, inputtedQuantity, deliveryPrice);
    var newBill = newTotal.finalTotal();
    
    var totalQuantity = parseInt($("total").val());
    function calcTotal() {
      var priceOnePizza =
        sizeCalcPrice(sizePrice()) +
        crustCalcPrice(crustPrice()) +
        toppingsCalcPrice(toppingPrice());
      return priceOnePizza;
    }
    $("#order").on("click", function() {
      
    });
    
    var size = $("#size").find(":selected").val();
    alert("your order is " + ", "+ size +' ,' + newDetails.selectedToppings + ' and ' + newDetails.selectedCrust +' '+"pizza"+". click ok to view your bill" );
    var deliver = confirm(
      "Would you like your pizza to be delivered to you? transport cost ksh 250."
    );
    if (deliver) {
      var place = prompt("Enter your location");
      $("#place").text(place);
      $("#success").show();
    } else {
      $("#no-delivery").show();
    }
    
    alert( 'total to be paid is'+' '+"1450");
    document.getElementById('allme').reset();

  });
});