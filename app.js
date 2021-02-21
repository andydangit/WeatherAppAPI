var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=c4c17f7487428c23c01090220e623f3b&units=imperial')
. then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue =data['main']['temp'];
    var descValue = data['weather'] [0] ['description'];

    name.innerHTML =nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;

})

.catch(err => alert("Wrong City Name!!"))
})