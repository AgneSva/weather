var searchIcon = document.getElementById('searchIcon')
var searchBox = document.querySelector('.inputdata')
var submitBtn = document.getElementById('submit')
var description = document.getElementById('weather')
var city = document.getElementById('city')
var temp = document.getElementById('temp')
var date = document.getElementById('date')

searchIcon.addEventListener('click', () => {
    searchIcon.classList.add("hide")
    searchBox.classList.remove("hide")
    submitBtn.classList.remove("hide")
})

submitBtn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchBox.value + '&appid=6d2e15bc6c37daf2c82cb24bf5f5fde8')
        .then(response => response.json())
        .then(data => {
            let tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var iconID = data['weather'][0]['icon'];

            tempValue -= 273.15
            tempValue = Math.round(tempValue)


            d = new Date();
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


            city.innerHTML = nameValue;
            date.innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + "th " + d.getFullYear();
            description.innerHTML = descValue;
            temp.innerHTML = tempValue + " °C";
            searchBox.value = "";



            var iconUrl = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
            document.getElementById("icon").src = iconUrl;

        })
})






