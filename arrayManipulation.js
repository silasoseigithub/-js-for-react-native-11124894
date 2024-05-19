function processArray(arr) {
  return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) =>
    processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
  );
}

// You can call the functions here for testing purposes (optional)
const numbers = [1, 4, 3, 6, 8];
const processedNumbers = processArray(numbers);
const modifiedStrings = ["Osei", "Peter","Silas"];
const formattedStrings = formatArrayStrings(modifiedStrings, processedNumbers);
console.log(processedNumbers);
console.log(formattedStrings);


// Expected output:
// [3, 16, 9, 36, 27]
// ['osei', 'PETER', 'silas']
