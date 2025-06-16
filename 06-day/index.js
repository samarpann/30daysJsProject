function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (isNaN(amount)) {
    result.innerText = "Please enter a valid amount.";
    return;
  }

  let converted;

  // Hardcoded conversion rates
  const rates = {
    USD: {
      INR: 83.3,
    },
    INR: {
      USD: 0.012,
    }
  };

  if (from === to) {
    converted = amount;
  } else {
    converted = amount * rates[from][to];
  }

  result.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
