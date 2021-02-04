function searchTemp() {
        let nameOfCity = document.getElementById("cityName").value;
        let city = (document.getElementById(
          "city-name"
        ).innerText = nameOfCity);
        const apiKey = "50574e6be07a64acc4b3722383e50e2a";
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${apiKey}`
        )
          .then((response) => response.json())

          .then((data) => {
            const cityName = data.name;
            const temperature = parseFloat(data.main.temp - 273.15).toFixed(2);
            const temperatureMax = parseFloat(
              data.main.temp_max - 273.15
            ).toFixed(2);
            const temperatureMin = parseFloat(
              data.main.temp_min - 273.15
            ).toFixed(2);
            const weather = data.weather[0].main;
            const feelsLike = parseFloat(data.main.feels_like - 273.15).toFixed(
              2
            );
            const humidity = parseFloat(data.main.humidity).toFixed(2);
            const pressure = parseFloat(data.main.pressure).toFixed(2);
            const country = data.sys.country;

            document.getElementById("city-name").innerText = cityName;
            document.getElementById("country").innerText = country;
            document.getElementById("temp").innerText = temperature;
            document.getElementById("weather").innerText = weather;
            document.getElementById("tempMax").innerText = temperatureMax;
            document.getElementById("tempMin").innerText = temperatureMin;
            document.getElementById("feelsLike").innerText = feelsLike;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("pressure").innerText = pressure;
          });
          document.getElementById("allInfo").style.display = "block";
      }