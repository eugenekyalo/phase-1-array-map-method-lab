// Define an array of tutorials with inconsistent casing
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

//  The titleCased function defined
function titleCased() {
  // Use the map() method to iterate over each tutorial string
  return tutorials.map((tutorial) => {
    // Split each tutorial string into array words
    return tutorial.split(" ")
      // Capitalize the first letter of each word and put them togetherthem back into a string
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
}


module.exports = titleCased;
