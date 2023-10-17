const pin = "1234"; // The PIN for the ATM

const messageElement = document.getElementById("message");
const pinInput = document.getElementById("pin");
const enterButton = document.getElementById("enter");
const withdrawButton = document.getElementById("withdraw");
const depositButton = document.getElementById("deposit");
const balanceButton = document.getElementById("balance");
const exitButton = document.getElementById("exit");

let balance = 100000;

enterButton.addEventListener("click", function () {
    const enteredPin = pinInput.value;
    if (enteredPin === pin) {
        messageElement.textContent = "Welcome!";
        pinInput.value = "";
        pinInput.disabled = true;
        enterButton.disabled = true;
        withdrawButton.disabled = false;
        depositButton.disabled = false;
        balanceButton.disabled = false;
    } else {
        messageElement.textContent = "Incorrect PIN.";
        pinInput.value = "";
    }
});

withdrawButton.addEventListener("click", function () {
    const amount = parseFloat(prompt("Enter the amount:"));
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
    } else {
        alert("insufficient balance.");
    }
});

depositButton.addEventListener("click", function () {
    const amount = parseFloat(prompt("Enter the amount to deposit:"));
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert("Invalid amount.");
    }
});

balanceButton.addEventListener("click", function () {
    alert(`Your balance is $${balance}`);
});

exitButton.addEventListener("click", function () {
    messageElement.textContent = "Goodbye!";
    pinInput.value = "";
    pinInput.disabled = false;
    enterButton.disabled = false;
    withdrawButton.disabled = true;
    depositButton.disabled = true;
    balanceButton.disabled = true;
});

function updateBalance() {
    messageElement.textContent = `New balance: $${balance}`;
}
