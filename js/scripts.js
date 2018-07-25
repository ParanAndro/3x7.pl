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

//gallery variable
const allButtons = document.getElementsByClassName('show-buttons');

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

//switching hide/show description in gallery
for (i = 0; i < allButtons.length; i++) { 
	const button = allButtons[i];
	let arrows = button.querySelector(':scope span');
	let div = button.nextElementSibling;

	function buttonColorArrUp() {
		button.style.backgroundColor = '#8497b0';
		button.style.color = '#FF4500';
	}

	function buttonColorArrDown() {
		button.style.backgroundColor = '';
		button.style.color = '';
	}
	
	function showDiv() {
		window.setTimeout(function() {
			div.style.opacity = 1;
			div.style.transform = 'scale(1)';
			}, 0);
		div.style.display = 'flex';
		arrows.innerHTML = "\u25B3";
	};
	
	function hideDiv() {
		window.setTimeout(function() {
			div.style.opacity = 0;
			div.style.transform = 'scale(0)';
			}, 700);
		div.style.display = 'none';
		arrows.innerHTML = "\u25BD";
	};

	button.addEventListener('click', function() {
		if (div.style.display === 'none') {
			showDiv();
			buttonColorArrUp();
		} else {
			hideDiv();
			buttonColorArrDown();
		}
	}, hideDiv());
};


