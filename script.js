async function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (!location) {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "f22201c7daf04333845182635250512"; // your API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert("Location not found!");
            return;
        }

        document.getElementById("weatherResult").classList.remove("hidden");

        document.getElementById("cityName").innerText = data.location.name + ", " + data.location.country;
        document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById("condition").innerText = `Condition: ${data.current.condition.text}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
        document.getElementById("wind").innerText = `Wind: ${data.current.wind_kph} kph`;

        document.getElementById("weatherIcon").src = "https:" + data.current.condition.icon;

    } catch (error) {
        alert("Error fetching data. Please try again.");
    }
}
