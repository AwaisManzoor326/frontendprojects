// document.getElementById("convertBtn").addEventListener("click", function () {
//   let fromCurrency = document.getElementById("fromCurrency").value;
//   let toCurrency = document.getElementById("toCurrency").value;
//   let amountInput = document.getElementById("amountInput");
//   let resultOutput = document.querySelector(".result");

//   console.log("From Currency:", fromCurrency); // Debugging
//   console.log("To Currency:", toCurrency); // Debugging

//   if (!fromCurrency || !toCurrency) {
//     alert("Please select valid currencies.");
//     return;
//   }

//   // Currency conversion function
//   const convertCurrency = async () => {
//     const amount = parseFloat(amountInput.value);
//     const fromCurrency = document.getElementById("fromCurrency").value;
//     const toCurrency = document.getElementById("toCurrency").value;

//     if (!amount || isNaN(amount) || amount <= 0) {
//       resultOutput.textContent = "Please enter a valid amount.";
//       return;
//     }

//     if (!fromCurrency || !toCurrency) {
//       resultOutput.textContent = "Please select valid currencies.";
//       return;
//     }

//     const url = `http://currencyapi.com/v3/latest?apikeu=cur_live_0sHC8HbMfgSpctpw4YXrwUHZv9tmp9RNv7Pdfx1v&base_currency=`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       if (!data.rates || !data.rates[toCurrency]) {
//         resultOutput.textContent = "Invalid currency selected.";
//         return;
//       }

//       const exchangeRate = data.rates[toCurrency];
//       const convertedAmount = (amount * exchangeRate).toFixed(2);
//       resultOutput.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
//     } catch (error) {
//       resultOutput.textContent = "Error fetching exchange rate data.";
//     }
//   };

//   // Event Listener for Button
//   convertCurrency();
// });

// populate results.......................
const populate = async (value, currency) =>{
  let mystr = "";

  url = `http://currencyapi.com/v3/latest?apikeu=cur_live_0sHC8HbMfgSpctpw4YXrwUHZv9tmp9RNv7Pdfx1v&base_currency=` + currency;
  let response = await fetch(url);

  let rjson = await response.json();
  console.log(rjson);

  for (let key of Object.keys(rjson["data"])){
    console.log(key);
    mystr += `<tr>
                  <td>${key}</td>
                  <td>${rjson["data"][key]["code"]}</td>
                  <td>${Math.round(rjson["data"][key]["value"]*value)}</td>
                </tr>`;
  }

  const tablebody = document.querySelector("tbody");
  tablebody.innerHTML = mystr;

}

// button click....................
const btn = document.querySelector(".btn");
btn.addEventListener('click', (e) => {
  e.preventDefault();

  const val = parseInt(document.querySelector("input[name='quantity']").value);
  const currency = parseInt(document.querySelector("select[name='currency']").value);

  populate(val, currency);
});