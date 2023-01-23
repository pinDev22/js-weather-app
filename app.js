api_key = 'be4b80f2eedf0f89529a4659730c4491'
api_url = 'https://api.openweathermap.org/'



function getWeather() {

    zip_code = document.getElementById("zip-code").value;
    errorMessage = document.getElementById("error-message");
    
        if(zip_code.length !== 5) {
          errorMessage.style.display = "block";
          errorMessage.innerHTML = "Invalid Zip Code";
          return;
        }
   
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip_code}&appid=${api_key}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        

        //city name
        const city_name = data.name
        document.getElementById("city_name").innerHTML = city_name;
        //current temp
        const current_temp = Math.round(data.main.temp)
        document.getElementById("current_temp").innerHTML = `${current_temp}°`;
        //feels like
        const temp_feels_like = Math.round(data.main.feels_like)
        document.getElementById("feels_like").innerHTML = `Feels Like: ${temp_feels_like}°`;
        //high
        const temp_high = Math.round(data.main.temp_max)
        document.getElementById("temp_high").innerHTML = `High: ${temp_high}°`;
        //low
        const temp_low = Math.round(data.main.temp_min)
        document.getElementById("temp_low").innerHTML = `Low: ${temp_low}°`;

        //get weather object
        console.log(data)

    })
    .catch(error => {
        // Handle any errors that may occur during the request
        console.log(error)
    });
}

