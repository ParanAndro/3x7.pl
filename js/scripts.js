//Responsive menu
document.getElementById('hamburger').addEventListener('click', function() {
	const menuResponsive = document.getElementById('navigation');
	if (menuResponsive.className === 'hide-menu') {
		menuResponsive.className += ' show-menu';
	} else {
		menuResponsive.className = 'hide-menu';
	}
})


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
 
