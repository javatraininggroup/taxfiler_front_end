//var  cart = ["Jeans","T-Shirts","Shoes","Sandals","Kurta Sets","Tops"];
//for(let i of cart)
//{
//   cart[i] = "Jeans";
//   console.log(cart[i]);
//}
//document.getElementById('items').innerHTML = cart;

//  Loops in Javascript
function factor() {
  var factors = 1;
  var digit = document.getElementById('factnumber').value;
  for (i = digit; i > 0; i--) {
    factors = factors * i;
  }
  document.getElementById('items').innerHTML = "The factorial is " + factors
}

function viewOrder() {
  cart = ["Lakme Foundation", "Lakme Compact", "Revlon Red Lipstick", "Maybeline EyeLiner"];
  var text = "", i = 0;
  do {
    text += cart[i] + "<br>";
    i++;
  }
  while (cart[i])
  document.getElementById('items').innerHTML = text;

}

