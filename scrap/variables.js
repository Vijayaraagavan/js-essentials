const formatSize = (bytes) => {
    return Math.round(bytes / 1024 / 1024); // MegaBytes
}

// Keep references to prevent garbage collection
const arrays = [];

// Create arrays and keep references
for (let i = 0; i < 5; i++) {
    const arr = new Array(1000000).fill('y'); // 1M elements
    arrays.push(arr);
}

// Create one very large array
let hugeArray = new Array(10000000).fill('x'); // 10M elements
arrays.push(hugeArray);
window.arrays = arrays;

const increaseMemory = () => {
    const arr = new Array(1000000).fill('y'); // 1M elements
    arrays.push(arr);
}

// Clear references to trigger garbage collection
// console.log('=== Clearing references ===');
// arrays.length = 0;
// hugeArray = null;

// // Force garbage collection if available
// if (window.gc) {
//     window.gc();
//     console.log('=== After forced garbage collection ===');
//     logMemory();
// } else {
//     console.log('=== Garbage collection not available ===');
//     logMemory();
// }