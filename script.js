function firstNonRepeatedChar(str) {
    const charCount = {};
    
    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // If no non-repeated character found
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
