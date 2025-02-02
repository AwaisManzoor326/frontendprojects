document.getElementById("convertBtn").addEventListener("click", function () {
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;
  let amountInput = document.getElementById("amountInput");
  let resultOutput = document.querySelector(".result");

  console.log("From Currency:", fromCurrency); // Debugging
  console.log("To Currency:", toCurrency); // Debugging

  if (!fromCurrency || !toCurrency) {
    alert("Please select valid currencies.");
    return;
  }

  // Currency conversion function
  const convertCurrency = async () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (!amount || isNaN(amount) || amount <= 0) {
      resultOutput.textContent = "Please enter a valid amount.";
      return;
    }

    if (!fromCurrency || !toCurrency) {
      resultOutput.textContent = "Please select valid currencies.";
      return;
    }

    const url = `https://v6.exchangerate-api.com/v6/2e8cd14b421c7aee5e3e51a4/latest/${fromCurrency}/${toCurrency}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

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

  // Event Listener for Button
  convertCurrency();
});
