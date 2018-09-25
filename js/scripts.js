//Navigation
function navigation() {
	//navigation variables
	const aboutMeMenu = document.getElementById('1');
	const aboutMeTarget = document.getElementById('1-target');
	const aboutThisPage = document.getElementById('2');
	const aboutThisPageTarget = document.getElementById('2-target');
	const galleryMenu = document.getElementById('3');
	const galleryTarget = document.getElementById('3-target');
	const contactMenu = document.getElementById('4');
	const contactTarget = document.getElementById('4-target');

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

	//responsive menu: switching view
	document.getElementsByClassName('menu-icon')[0].addEventListener('click', function() {
		const menuResponsive = document.getElementById('navigation');
		if (menuResponsive.className === 'hidden-menu') {
			menuResponsive.className += ' show-menu';
		} else {
			menuResponsive.className = 'hidden-menu';
		}
	})
};
navigation();

//switching hide/show description in gallery
function showHide() {
	const allButtons = document.getElementsByClassName('show-buttons');
	for (i = 0; i < allButtons.length; i++) { 
		let button = allButtons[i];
		let div = button.nextElementSibling;

		const ShowHide = {
		    init: function() {
		        if (!div.hasAttribute('data-height')) {
		            div.dataset.height = div.offsetHeight+"px";
		            div.className = 'hidd';
		            div.style.height = 0;
		        }
		        return div;
		    },
		};
		
		button.addEventListener('click', function() {
				if (div.style.display === 'none') {
					div.style.display = 'flex';
					div.style.opacity = 1;
					button.style.backgroundColor = '#8497b0';
					button.style.color = '#FF4500';
			        let element = ShowHide.init();
			        setTimeout(function() { element.style.height = element.dataset.height; }, 30);
				} else {
					div.style.display = 'none';
					div.style.opacity = 0;
					button.style.backgroundColor = '';
					button.style.color = '';
			        let element = ShowHide.init();
			        element.style.height = 0;
			    }
		}, div.style.display = 'none');
	};
};
showHide();
 
