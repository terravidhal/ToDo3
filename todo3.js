//1-Recursive Binary Search

function rBinarySearch(arr, target, startIndex = 0, endIndex = arr.length - 1) {
  // Base cases:
  if (startIndex > endIndex) {
    return false; // Target not found if search space becomes empty
  }

  // Find the middle index
  const midIndex = Math.floor((startIndex + endIndex) / 2);

  // Check if the target is found at the middle index
  if (arr[midIndex] === target) {
    return true;
  }

  // Recursive search:
  if (target < arr[midIndex]) {
    // Search the left half if target is smaller than the middle element
    return rBinarySearch(arr, target, startIndex, midIndex - 1);
  } else {
    // Search the right half if target is greater than the middle element
    return rBinarySearch(arr, target, midIndex + 1, endIndex);
  }
}

// Examples:
console.log(rBinarySearch([1, 3, 5, 6], 4)); // Output: false
console.log(rBinarySearch([4, 5, 6, 8, 12], 5)); // Output: true



//2-Greatest Common Factor
//a-

function rGCF(num1, num2) {
    // Base case 1: If num1 and num2 are equal, the GCF is num1
    if (num1 === num2) {
      return num1;
    }
  
    // Base case 2: If either num1 or num2 is 0, the GCF is 0
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
  
    // Recursive cases:
    // Case 2: If num1 is greater than num2, apply Euclidean formula using num1 - num2
    if (num1 > num2) {
      return rGCF(num1 - num2, num2);
    } else {
      // Case 3: If num2 is greater than num1, apply Euclidean formula using num2 - num1
      return rGCF(num1, num2 - num1);
    }
  }
  
  // Examples:
  console.log(rGCF(12, 18)); // Output: 6
  console.log(rGCF(25, 10)); // Output: 5
  console.log(rGCF(0, 10)); // Output: 0




//b-Second: rework facts #2 and #3 to reduce stack consumption and expand 
//rGCF’s reach. You should  be able to compute rGCF(123456,987654).

  function rGCF(num1, num2) {
    // Handle base cases for 0 and equal numbers
    if (num1 === 0 || num2 === 0 || num1 === num2) {
      return num1; // GCF is 0 or the equal number
    }
  
    // Use absolute values to avoid negative numbers affecting the loop direction
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
  
    // Iterative loop using the Euclidean algorithm principle
    while (num2 !== 0) {
      const remainder = num1 % num2;
      num1 = num2;
      num2 = remainder;
    }
  
    // GCF is the final value of num1 after the loop
    return num1;
  }
  
  // Example:
  console.log(rGCF(123456, 987654)); // Output: 2
  