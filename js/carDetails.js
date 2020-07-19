
var cars = [
    {
        name: "Baleno",
        model: "2020",
        manufactured: "Maruthi Suzuki",
        size: "5 Seaters",
        gear: "5",
        speed: "60KM/HR",
        image: "b.jpg"
    },
    {
        name: "Innova",
        model: "2019",
        manufactured: "Toyota",
        size: "8 Seaters",
        gear: "5",
        speed: "90KM/HR",
        image: "http://i.ndtvimg.com/i/2015-11/toyota-innova-827_827x510_81447939489.jpg"
    }]
function addCar() {
    var carName = document.getElementById('car').value;
    var carModel = document.getElementById('model').value;
    var carManufactured = document.getElementById('by').value;
    var carSize = document.getElementById('size').value;
    var carGear = document.getElementById('gear').value;
    var carSpeed = document.getElementById('speed').value;
    var carImage = document.getElementById('image').value;
    document.getElementById('result').innerHTML = "Car added to List Successfully.";

    cars.push(
        {
            name: carName,
            model: carModel,
            manufactured: carManufactured,
            size: carSize,
            gear: carGear,
            speed: carSpeed,
            image: carImage

        })

    console.log(cars);

}

function showCars() {
    document.getElementById('details').style.display = "none";
    //var carPicture = document.createElement('img');
    //carPicture.src = "http://i.ndtvimg.com/i/2015-11/toyota-innova-827_827x510_81447939489.jpg";
    //carPicture.width = "500px";
    //carPicture.height = "500px";
    //document.body.appendChild(carPicture);
    for(i of cars)
    {
        var sample =  document.createElement('IMG');
        sample.setAttribute('src',i.image);
        sample.setAttribute('width','500px');
        sample.setAttribute('height','500px');
        document.body.appendChild(sample);
        var name = document.createElement('p');//tag name p is paragraph
        name.innerHTML = i.name;
        document.body.appendChild(name);
        var model = document.createElement('p');
        model.innerHTML = i.model;
        document.body.appendChild(model);
        var manufactured = document.createElement('p');
        manufactured.innerHTML = i.manufactured;
        document.body.appendChild(manufactured);
        var size = document.createElement('p');
        size.innerHTML = i.size;
        document.body.appendChild(size);
        var gear = document.createElement('p');
        gear.innerHTML = i.gear;
        document.body.appendChild(gear);
        var speed = document.createElement('p');
        speed.innerHTML = i.speed;
        document.body.appendChild(speed);   
    }
  

    //document.body.appendChild(name);
    console.log(cars[1].name);
    var carName = document.createElement('p');
    carName.innerHTML = cars[1].name;
    document.body.appendChild(carName);
}