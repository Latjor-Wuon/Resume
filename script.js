document.addEventListener("DOMContentLoaded", function() {
    // Get the heading element
    var heading = document.querySelector("h1");
    // Get the text content of the heading
    var text = heading.textContent.trim();
    // Clear the heading text
    heading.textContent = "";
    
    // Initialize index
    var index = 0;

    // Function to display text letter by letter
    function displayText() {
        // Add a letter from the text to the heading
        heading.textContent += text[index];
        // Increment index
        index++;
        // Check if all letters are displayed
        if (index < text.length) {
            // Call the function recursively after a delay
            setTimeout(displayText, 50); // Adjust the delay as needed
        }
    }

    displayText();
});
