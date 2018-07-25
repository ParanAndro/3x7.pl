//navigation variables
const menuButton = document.getElementById('hamburger');//responsive menu

let aboutMeMenu = document.getElementById('1');
let aboutMeTarget = document.getElementById('1-target');
let aboutThisPage = document.getElementById('2');
let aboutThisPageTarget = document.getElementById('2-target');
let galleryMenu = document.getElementById('3');
let galleryTarget = document.getElementById('3-target');
let contactMenu = document.getElementById('4');
let contactTarget = document.getElementById('4-target');

//responsive menu: switching view
menuButton.addEventListener('click', function() {
    document.getElementById("menu").classList.toggle("show");
    return false;
});

//navigation: smooth scrolling
aboutMeMenu.addEventListener('click', function() {
	aboutMeTarget.scrollIntoView({behavior: 'smooth'});
});
aboutThisPage.addEventListener('click', function() {
	aboutThisPageTarget.scrollIntoView({behavior: 'smooth'});
});
galleryMenu.addEventListener('click', function() {
	galleryTarget.scrollIntoView({behavior: 'smooth'});
});
contactMenu.addEventListener('click', function() {
	contactTarget.scrollIntoView({behavior: 'smooth'});
});



