function price()
{
    var money = Number(document.getElementById('amount').value);
    console.log(typeof amount);

    var discount = function(shop){
        return shop*0.3;
    }
    console.log(typeof discount);
    var finalPrice = money - discount(money);
    document.getElementById('demo').innerHTML = finalPrice;
}