// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Get references to the form and its elements
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");

    // Add a 'submit' event listener to the form
    contactForm.addEventListener("submit", function(event) {
        
        // Prevent the form from submitting normally
        event.preventDefault(); 
        
        // Get the values from the fields and trim whitespace
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();
        
        // Reset the error message
        errorMessage.textContent = "";

        // --- Basic Validation ---
        // Check if any field is empty
        if (nameValue === "" || emailValue === "" || messageValue === "") {
            errorMessage.textContent = "Please fill out all fields.";
            return; // Stop the function here
        }

        // --- If Validation Passes ---
        console.log("Form submitted successfully!");
        console.log("Name:", nameValue);
        console.log("Email:", emailValue);
        console.log("Message:", messageValue);

        // Show a success message (you can replace this with other actions)
        alert("Message sent successfully!");
        
        // Optional: Clear the form fields after successful submission
        contactForm.reset();
    });
});