//append value to the display
function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}
//clear all input
function clearAll() {
    const clearThis = document.getElementById('result');
    clearThis.value = "";
}

//delete the last character
function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

// calculate the result
function calculateResult() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    }
    catch (error) {
        result.value = "Error";
    }
}

// light and dark
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
//factorial
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    return num * factorial(num - 1);
}
//Celsius and Fahrenheit
function CelsiusToFahrenheit() {
    const result = document.getElementById("result");
    const celsius = parseFloat(result.value);
    result.value = (celsius * 9 / 5) + 32;
}

let history = [];
function calculateResult() {
    const result = document.getElementById("result");

    try {
        const expression = result.value;
        const evalResult = eval(expression);
        result.value = evalResult;

        //add to history
        history.push(`${expression} = ${evalResult}`);
        updateHistory();
    } catch {
        result.value = "Error"
    }
}
    function updateHistory() {
        const historyDiv = document.getElementById("history");
        historyDiv.innerHTML = history.join("<br>");
    }

