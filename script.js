document.getElementById("tempConverter").addEventListener("submit", function (e) {
    e.preventDefault();

    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    let result;

    if (unit === "celsius") {
        result = celsiusToFahrenheit(temperature);
    } else {
        result = fahrenheitToCelsius(temperature);
    }

    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} °${unit.toUpperCase()}`;
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
