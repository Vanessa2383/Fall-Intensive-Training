function togglePopup(serviceId) {
    var popup = document.getElementById(serviceId);
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
// Pseudo code for the logic

function redirectUser() {
    // Check if the user is logged in
    // Pseudo code to check user login status
    /*
    if (userIsLoggedIn) {
        // Redirect the user to a specific page
        // Pseudo code for redirection
        /*
        navigateToPage('specific-page.html');
        */
    } else {
        // Display a message or take some other action if user is not logged in
        // Pseudo code for displaying a message
        /*
        displayMessage('Please log in to access this feature.');
        */
    }

}

// Event listener for the button click
document.getElementById('redirectButton').addEventListener('click', redirectUser);
