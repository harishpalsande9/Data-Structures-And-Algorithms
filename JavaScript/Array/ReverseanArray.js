// Function to reverse an array
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // Swap elements at start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Function to print an array
function printArray(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
    }
    console.log(output);
}

// Main function
function main() {
    // Sample array
    let arr = [1, 2, 3, 4, 5];

    console.log("Original Array:");
    printArray(arr);

    reverseArray(arr);

    console.log("Reversed Array:");
    printArray(arr);
}

// Calling the main function to start the program
main();
