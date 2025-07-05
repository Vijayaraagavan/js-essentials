let leakedElements = []; // This array will inadvertently hold references, causing the leak

document.getElementById('createAndRemoveBtn').addEventListener('click', () => {
    const container = document.getElementById('container');
    const numBoxes = parseInt(document.getElementById('numBoxes').value, 10);

    console.log(`Creating ${numBoxes} boxes...`);

    // 1. Create a document fragment to append boxes efficiently
    const fragment = document.createDocumentFragment();
    const tempElements = []; // Temporary array for current batch of elements

    for (let i = 0; i < numBoxes; i++) {
        const div = document.createElement('div');
        div.className = 'box';
        div.textContent = i; // Add some content to make them slightly larger
        fragment.appendChild(div);
        tempElements.push(div); // Store a reference to them temporarily
    }

    // 2. Add the fragment to the DOM (all boxes become part of the DOM tree root)
    container.appendChild(fragment);
    console.log(`Added ${numBoxes} boxes to DOM.`);

    // 3. Immediately remove all boxes from the DOM
    // This is the crucial step: after this, the native DOM nodes *should* be eligible for GC
    tempElements.forEach(div => container.removeChild(div));
    console.log(`Removed ${numBoxes} boxes from DOM.`);

    // 4. THE LEAK: Store a reference to *some* of the removed elements in a global array
    // This prevents them and their subtrees from being garbage collected.
    // For demonstration, let's keep the first few elements from each batch.
    leakedElements.push(...tempElements.slice(0, 10)); // Keep a small subset to show the leak
    console.log(`Leaked ${leakedElements.length} elements in total.`);

    // Optional: Clear the visible container to reinforce they are "gone"
    // container.innerHTML = ''; // Not needed since we removed them above, but can be used for different demos
});

document.getElementById('clearLeakBtn').addEventListener('click', () => {
    leakedElements = []; // Clear the global reference
    console.log("Leak reference cleared. Perform GC to see memory drop.");
    // In a real scenario, you'd usually rely on natural GC, but for demonstration,
    // you can manually trigger GC in DevTools after this.
});