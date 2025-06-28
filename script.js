function calculate() {
    let a = parseFloat(document.getElementById("num1").value);
    let c = document.getElementById("operator").value;
    let b = parseFloat(document.getElementById("num2").value);

    let result;

    if (c === "+") {
        result = a + b;
    } else if (c === "-") {
        result = a - b;
    } else if (c === "*") {
        result = a * b;
    } else if (c === "/") {
        result = b !== 0 ? a / b : "Cannot divide by zero";
    } else {
        result = "Invalid operator selected";
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}