# js-for-react-native-11124894
Student ID: [11124894]
Project Description: This project demonstrates various JavaScript functionalities for potential use in React Native development. It includes functions for processing arrays, modifying strings based on numerical conditions, and creating user profiles.  In the javascript file named arrayManipulation.js, we created a function called processArray that takes an array of numbers as an argument and returns a  new array where each even number is tripled.

function processArray(arr) {
  return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) =>
    processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
  );
}

Explanation: 
•	The ProcessArray takes an array of numbers (arr) as input. It uses the map function to iterate over each element (num) in the array. A conditional expression checks if the number is even (num % 2 === 0). If even, the number is squared (num * num). If odd, the number is tripled (num * 3). The modified values are returned as a new array.

•	In the same arrayManipulation.js file, we added a function called formatArrayStrings. FormatArrayStrings takes two arrays as arguments:
1.	strings: An array of strings.
2.	processedNumbers: The array of numbers processed by processArray. 
It uses map to iterate over each string (str) and its corresponding processed number (processedNumbers[index]). Another conditional expression checks if the processed number is even. If even, the string is converted to uppercase using toUpperCase(). If odd, the string is converted to lowercase using toLowerCase(). The modified strings are returned as a new array.

function createUserProfiles(names, modifiedNames) {
    let id = 1;
    return names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id:id++,}));
  }
Explanation:

•	We created a new Javascript file named userInfo.js. .The CreateUserProfiles takes two arrays:
1.	names: An array of original names.
2.	modifiedNames: The array of modified names from formatArrayStrings. 
A variable id is initialized to 1 for auto-incrementing user IDs. The function uses map to iterate over each name (name) and its corresponding modified name (modifiedNames[index]). An object is created for each user profile containing:
originalName: The original name from the input array. 
modifiedName: The modified name based on the corresponding processed number. 
id: An auto-incremented ID starting from 1. 
An array of these user profile objects is returned.

