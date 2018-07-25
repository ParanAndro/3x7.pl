//navigation variables
const menuButton = document.getElementById('hamburger');//responsive menu


//responsive menu: switching view
menuButton.addEventListener('click', function() {
    document.getElementById("menu").classList.toggle("show");
    return false;
});

