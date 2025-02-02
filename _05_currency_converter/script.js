document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const amountInput = document.querySelector('input[type="number"]');
  const selectFrom = document.querySelector("#fromCurrency"); // Ensure correct ID
  const selectTo = document.querySelector("#toCurrency"); // Ensure correct ID
  const resultOutput = document.querySelector(".result");
  const convertBtn = document.querySelector(".btn");

  // Check if elements exist
  if (!amountInput || !selectFrom || !selectTo || !convertBtn) {
    console.error("One or more DOM elements not found!");
    return;
  }
});
// Currency conversion function
const convertCurrency = async () => {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = selectFrom.value;
  const toCurrency = selectTo.value;

  console.log("From Currency:", fromCurrency);
  console.log("To Currency:", toCurrency);

  if (!amount || isNaN(amount) || amount <= 0) {
    resultOutput.textContent = "Please enter a valid amount.";
    return;
  }

  if (!fromCurrency || !toCurrency) {
    resultOutput.textContent = "Please select valid currencies.";
    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/a6f5050bdd797574c109cb38/latest/${fromCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data);

    if (!data.rates || !data.rates[toCurrency]) {
      resultOutput.textContent = "Invalid currency selected.";
      return;
    }

    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    resultOutput.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    resultOutput.textContent = "Error fetching exchange rate data.";
  }
};

// Add event listener to the Convert button
convertBtn.addEventListener("click", convertCurrency);
