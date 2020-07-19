function timeClick()
{
    var distance = Number(document.getElementById('distance').value);
    var speed = Number(document.getElementById('speed').value);
    var time = distance/speed;

    document.getElementById('result').innerHTML = "The Time Taken to Travel is:"+ Time + "hrs";
}