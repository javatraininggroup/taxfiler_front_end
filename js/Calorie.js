function caloriCalculator()
{
    var mbod = document.getElementById('activity').value;
    var weight = document.getElementById('weight').value;
    switch(Number(mbod))
    {
        case 1:document.getElementById('result').innerHTML = 2*Number(weight);
        break;

        case 2:document.getElementById('result').innerHTML = 3*Number(weight);
        break;

        case 3:document.getElementById('result').innerHTML = 6*Number(weight);
        break;

        case 4:document.getElementById('result').innerHTML = 8*Number(weight);
        break;

        case 5:document.getElementById('result').innerHTML = 10*Number(weight);
        break;
    }
}