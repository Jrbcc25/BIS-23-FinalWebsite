function calculateMPG() {
  let miles = parseFloat(document.getElementById("miles").value);
  let gallons = parseFloat(document.getElementById("gallons").value);
  let result = document.getElementById("result");

  if (isNaN(miles) || isNaN(gallons) || gallons <= 0) {
    result.textContent = "Please enter valid numbers. Gallons used must be greater than 0.";
    return;
  }

  let mpg = miles / gallons;
  result.textContent = "MPG: " + mpg.toFixed(2);
}