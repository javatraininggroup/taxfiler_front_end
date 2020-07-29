function calcualteEmi()
{
    var p = document.getElementById('amt').value;
    var r = document.getElementById('interestRate').value;
    var n = document.getElementById('period').value;

    r = r/100;
    var emi = (p*r*((1+r)**n))/((1+r)**(n-1));
    document.getElementById('result').innerHTML = "Every Month Installment is:" + emi;
    console.log(emi);


}