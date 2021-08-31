// Binary search
// Returns index of element found
//

const binarySearch = (arr, element) => {

    const findMid = (start, stop) => Math.floor((start + stop) / 2)

    // Set the initial start & stop index values
    let start = 0
    let stop = arr.length - 1
    let mid
    // Calculate the mid-point between the start and stop index value


    // Repeat steps 2-5 while the range has elements
    while (start <= stop) {
        mid = findMid(start, stop)
        // If the mid-point is the target element, return the mid-point and you're done.
        if (arr[mid] === element) {
            return mid
        }
        // Otherwise, if the midpoint is less than the target element, then the target element is in the upper half-range.
        else if (arr[mid] < element) {
            start = mid + 1
        }
        // Otherwise, the target element is in the lower half-range.
        else {
            stop = mid - 1
        }
    }
    // If the element wasn't found in the range, return -1
    return -1
}

const binarySearchSolo = (arr, element) => {
	// define stop, start, and midpoint
	let stop = arr.length - 1
	let start = 0
	let mid
	// while the stop index is greater & or equal to the start
	// we want to check for numbers
	while (start <= stop) {
		// calculate midpoint
        mid = Math.floor((start + stop) / 2)
		// if the item at the midpoint index is the element, return it
        if (arr[mid] === element) { return mid }
		// otherwise, element at midpoint is less than element
        // if less than - change start to be the midpoint + 1
        else if (arr[mid] < element) { start = mid + 1 }
		// if greater - change stop to be the midpoint - 1
        else { stop = mid - 1 }
	}

	// If nothing found, return -1
	return -1
}

console.log("Should return 2", binarySearchSolo([1,2,3], 3))
console.log('Should return 0', binarySearchSolo([1, 2, 3], 1))
console.log('Should return -1', binarySearchSolo([1, 2, 3], 5))

// Notes on Binary Search
// - arr must be sorted
// - log(n) bigO
