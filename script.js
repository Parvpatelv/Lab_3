document.getElementById("tipCalculator").addEventListener("input", function () {
  const billTotal = parseFloat(document.getElementById("billTotal").value);
  const tipPercentage = parseInt(document.getElementById("tipPercentage").value, 10);

  if (!isNaN(billTotal) && !isNaN(tipPercentage)) {
      const tipAmount = ((billTotal * tipPercentage) / 100).toFixed(2);
      const totalBillWithTip = (billTotal + parseFloat(tipAmount)).toFixed(2);

      document.getElementById("tipAmount").value = tipAmount;
      document.getElementById("totalBillWithTip").value = totalBillWithTip;
      document.getElementById("tipPercentageValue").value = tipPercentage + "%"; // Changed to set value
  } else {
      alert("Please enter valid numbers in the Bill Total field.");
  }
});
