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