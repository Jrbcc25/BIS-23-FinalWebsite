function calculateMortgage() {
  let amount = parseFloat(document.getElementById("amount").value);
  let interest = parseFloat(document.getElementById("interest").value);
  let years = parseFloat(document.getElementById("years").value);

  if (isNaN(amount) || isNaN(interest) || isNaN(years) || amount <= 0 || interest <= 0 || years <= 0) {
    document.getElementById("payment").innerHTML = "Please enter valid numbers in all fields.";
    return;
  }

  let monthlyInterest = interest / 100 / 12;
  let numberOfPayments = years * 12;

  let monthlyPayment =
    amount *
    (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
    (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

  document.getElementById("payment").innerHTML =
    "Monthly Payment: $" + monthlyPayment.toFixed(2);
}