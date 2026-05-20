function generatePattern() {
    let n = Number(document.getElementById("number").value);
    let output = "";

    if (n <= 0 || isNaN(n)) {
        document.getElementById("result").textContent = "Please enter a valid number";
        return;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + " ";
        }
        output += "\n";
    }

    document.getElementById("result").textContent = output;
}
