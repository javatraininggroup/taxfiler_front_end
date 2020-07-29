function stateTeller()
{
    var boilingPoint = document.getElementById('bp').value;
    if(Number(boilingPoint)<0)
    {
        document.getElementById('result').innerHTML = "The state of water is Solid";
    }
    else if(boilingPoint>0 && boilingPoint<100)
    {
        document.getElementById('result').innerHTML = "The state of water is Liquid";
    }
    else
    {
        document.getElementById('result').innerHTML = "The state of water is Vapour";
    }
}