function cloth() {
    var amount = document.getElementById('price').value;
    var brandPrice = document.getElementById('shop');
    console.log(typeof amount);
    var test = Number(amount);
    console.log(typeof test);
    switch (test) {
        case 1:
            console.log("Price of Levies is 2600Rs");
            brandPrice.innerHTML = "Price of Levies is 2600Rs";
            break;

        case 2:
            console.log("Price of Deniems is 2600Rs");
            brandPrice.innerHTML = "Price of Denims is 2900Rs";
            break;

        case 3:
            brandPrice.innerHTML = "Price of H&M is 3900Rs";
            break;

        case 4:
            brandPrice.innerHTML = "Price of Forever 21 is 2700Rs";
            break;

        case 5:
            brandPrice.innerHTML = "Price of Moda Rapido is 3100Rs";
            break;

        default:
            console.log("Entered the Switch Case");
    }

}