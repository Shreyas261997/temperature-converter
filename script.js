const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");
const clearButton = document.getElementById("clearBtn");

const results = document.getElementById("results");
const error = document.getElementById("error");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

function convertTemperature() {
    const input = temperatureInput.value.trim();
    const unit = unitSelect.value;

    error.textContent = "";

    if (input === "") {
        results.classList.add("hidden");
        error.textContent = "Please enter a temperature.";
        return;
    }

    const temperature = Number(input);

    if (isNaN(temperature)) {
        results.classList.add("hidden");
        error.textContent = "Please enter a valid number.";
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;
    }

    if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
    }

    if (unit === "kelvin") {
        if (temperature < 0) {
            results.classList.add("hidden");
            error.textContent = "Kelvin temperature cannot be below 0.";
            return;
        }

        kelvin = temperature;
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;

    results.classList.remove("hidden");
}

function clearConverter() {
    temperatureInput.value = "";
    unitSelect.value = "celsius";
    error.textContent = "";
    results.classList.add("hidden");
}

convertButton.addEventListener("click", convertTemperature);
clearButton.addEventListener("click", clearConverter);

temperatureInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});