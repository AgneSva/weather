var searchIcon = document.getElementById('searchIcon')
var searchBox = document.querySelector('.inputdata')
var submitBtn = document.getElementById('submit')
var description = document.getElementById('weather')
var city = document.getElementById('city')
var temp = document.getElementById('temp')
var date = document.getElementById('date')

//recommendations:
var tempLN = document.getElementById('tempLN')
var tempMS = document.getElementById('tempMS')
var tempNY = document.getElementById('tempNY')





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
           

            city.innerHTML = nameValue;
            date.innerHTML =  months[d.getMonth()] + " " + d.getDate() + "th " + d.getFullYear();
            description.innerHTML = descValue;
            temp.innerHTML = tempValue + " °C";
            searchBox.value = "";



            var iconUrl = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
            document.getElementById("icon").src = iconUrl;

        })
})


//get info for london
fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=6d2e15bc6c37daf2c82cb24bf5f5fde8')
        .then(response => response.json())
        .then(data => {
            let tempLNvalue = data['main']['temp'];
            var iconLNid = data['weather'][0]['icon'];

            tempLNvalue -= 273.15
            tempLNvalue = Math.round(tempLNvalue)


          
            tempLN.innerHTML = tempLNvalue + " °C";
         



            var iconUrl = "http://openweathermap.org/img/wn/" + iconLNid + "@2x.png";
            document.getElementById("iconLN").src = iconUrl;

        })
//get info for moscow
        fetch('https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=6d2e15bc6c37daf2c82cb24bf5f5fde8')
        .then(response => response.json())
        .then(data => {
            let tempMSvalue = data['main']['temp'];
            var iconMSid = data['weather'][0]['icon'];

            tempMSvalue -= 273.15
            tempMSvalue = Math.round(tempMSvalue)


          
            tempMS.innerHTML = tempMSvalue + " °C";
         



            var iconUrl = "http://openweathermap.org/img/wn/" + iconMSid + "@2x.png";
            document.getElementById("iconMS").src = iconUrl;

        })

//get info for new york
        fetch('https://api.openweathermap.org/data/2.5/weather?q=new&york&appid=6d2e15bc6c37daf2c82cb24bf5f5fde8')
        .then(response => response.json())
        .then(data => {
            let tempNYvalue = data['main']['temp'];
            var iconNYid = data['weather'][0]['icon'];

            tempNYvalue -= 273.15
            tempNYvalue = Math.round(tempNYvalue)


          
            tempNY.innerHTML = tempNYvalue + " °C";
         



            var iconUrl = "http://openweathermap.org/img/wn/" + iconNYid + "@2x.png";
            document.getElementById("iconNY").src = iconUrl;

        })

