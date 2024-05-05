function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = str.length - 1;
    // Check if the string is a palindrome
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// Test the function
let testString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(testString)); // Output: true
