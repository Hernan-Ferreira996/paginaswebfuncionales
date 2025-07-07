async function getHourlyForecast() {
  const city = document.getElementById("city").value;
  const apiKey = "b87b780b20b04391787f4282eb231d15";

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
    const data = await res.json();

    if (data.cod !== "200") {
      document.getElementById("weatherResult").innerText = `Error: ${data.message}`;
      return;
    }

    // Mostrar las próximas 5 lecturas (cada una es de 3 horas)
    const forecastList = data.list.slice(0, 5);
    let html = `<h2>Forecast for ${data.city.name}</h2>`;
    forecastList.forEach(entry => {
      const time = new Date(entry.dt * 1000).toLocaleString();
      html += `<p><strong>${time}</strong> - ${entry.main.temp}°C - ${entry.weather[0].description}</p>`;
    });

    document.getElementById("weatherResult").innerHTML = html;
  } catch (error) {
    document.getElementById("weatherResult").innerText = "Something went wrong.";
    console.error(error);
  }
}

