// Creating the function to change the CSS file and the image of the nav bar logo
// This function will be called when the user clicks the button to change the theme
function changeCSS() {
    var theme = document.getElementById('theme');
    var themeName = theme.getAttribute('href');
    var navBarLogo = document.getElementById('navBarLogo');

    if (themeName == 'style.css') {
        theme.setAttribute('href', 'dark.css');
        document.body.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        navBarLogo.src = 'assets/navBarLogoDark.png';
    } else {
        theme.setAttribute('href', 'style.css');
        document.body.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        navBarLogo.src = 'assets/navBarLogo.png';
    }
}

// Saves the current theme to local storage so theme will be stored across page reloads
var savedTheme = localStorage.getItem('theme');
var navBarLogo = document.getElementById('navBarLogo');

if (savedTheme === 'dark') {
    document.getElementById('theme').setAttribute('href', 'dark.css');
    document.body.setAttribute('data-bs-theme', 'dark');
    navBarLogo.src = 'assets/navBarLogoDark.png';
} else {
    document.getElementById('theme').setAttribute('href', 'style.css');
    document.body.setAttribute('data-bs-theme', 'light');
    navBarLogo.src = 'assets/navBarLogo.png';
}

// Gets form from its ID
var orderForm = document.getElementById("orderForm");
if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default submission behaviour
        alert("Order Submitted!"); // Displays this message in the alert when the form is submitted
    });
}

// Gets form from its ID
var bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default submission behaviour
        alert("Booking Confirmed"); // Displays this message in the alert when the form is submitted
    });
}

// Gets form from its ID
var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default submission behaviour
        alert("Thank you for your feedback."); // Displays this message in the alert when the form is submitted
    });
}