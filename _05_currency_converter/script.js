// Function to populate results
const populate = async (value, currency) => {
  let mystr = "";

  const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_0sHC8HbMfgSpctpw4YXrwUHZv9tmp9RNv7Pdfx1v&base_currency=${currency}`;

  try {
    let response = await fetch(url);
    let rjson = await response.json();

    console.log(rjson); // Debugging response

    for (let key in rjson["data"]) {
      mystr += `<tr>
                    <td>${key}</td>
                    <td>${rjson["data"][key]["code"]}</td>
                    <td>${(rjson["data"][key]["value"] * value).toFixed(2)}</td>
                </tr>`;
    }

    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = mystr;
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
};

// Button click event
const btn = document.querySelector("#convertBtn");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  const val = parseFloat(document.querySelector("#amountInput").value);
  const currency = document.querySelector("#fromCurrency").value;

  if (!isNaN(val) && currency) {
    populate(val, currency);
  } else {
    alert("Please enter a valid amount and select a currency.");
  }
});