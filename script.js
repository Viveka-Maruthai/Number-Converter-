// Function to clear the result section
function clearResult() {
    document.getElementById("result").textContent = '';
  }
  
  // Convert to Binary
  function convertToBinary() {
    const number = document.getElementById("inputNumber").value;
    if (isNaN(number) || number === '') {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
    const binary = parseInt(number).toString(2);
    document.getElementById("result").textContent = `Binary: ${binary}`;
  }
  
  // Convert to Decimal
  function convertToDecimal() {
    const number = document.getElementById("inputNumber").value;
    if (isNaN(number) || number === '') {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
    const decimal = parseInt(number, 2);
    document.getElementById("result").textContent = `Decimal: ${decimal}`;
  }
  
  // Convert to Hexadecimal
  function convertToHex() {
    const number = document.getElementById("inputNumber").value;
    if (isNaN(number) || number === '') {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
    const hex = parseInt(number).toString(16).toUpperCase();
    document.getElementById("result").textContent = `Hexadecimal: ${hex}`;
  }
  