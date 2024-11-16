export const cameltoTitleCase = (str) => {
  // Replace dots with spaces and add space before each capital letter
  let result = str.replace(/\./g, " ").replace(/([A-Z])/g, " $1");
  // Convert to title case
  return result
    .replace(/^./, function (letter) {
      return letter.toUpperCase();
    }) // Capitalize first letter
    .replace(/\b(\w)/g, function (letter) {
      return letter.toUpperCase();
    }); // Capitalize each word
};
