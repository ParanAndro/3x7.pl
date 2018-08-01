//navigation variables
const menuButton = document.getElementById('hamburger');//responsive menu
const aboutMeMenu = document.getElementById('1');
const aboutMeTarget = document.getElementById('1-target');
const aboutThisPage = document.getElementById('2');
const aboutThisPageTarget = document.getElementById('2-target');
const galleryMenu = document.getElementById('3');
const galleryTarget = document.getElementById('3-target');
const contactMenu = document.getElementById('4');
const contactTarget = document.getElementById('4-target');

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
	let div = button.nextElementSibling;

	function buttonColorUp() {
		button.style.backgroundColor = '#8497b0';
		button.style.color = '#FF4500';
	}

	function buttonColorDown() {
		button.style.backgroundColor = '';
		button.style.color = '';
	}
	
	function showDiv() {
		window.setTimeout(function() {
			div.style.opacity = 1;
			div.style.transform = 'scale(1)';
			}, 0);
		div.style.display = 'flex';
	};
	
	function hideDiv() {
		window.setTimeout(function() {
			div.style.opacity = 0;
			div.style.transform = 'scale(0)';
			}, 700);
		div.style.display = 'none';
	};

	button.addEventListener('click', function() {
		if (div.style.display === 'none') {
			showDiv();
			buttonColorUp();
		} else {
			hideDiv();
			buttonColorDown();
		}
	}, hideDiv());
};
 

