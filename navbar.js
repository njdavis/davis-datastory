function mobileNavbar() {
	var navbar = document.getElementById("navbar");
	if (!navbar.classList.contains("responsive")) {
		navbar.classList.add("responsive");
	} else {
		navbar.classList.remove("responsive");
	}
}

var navbar = document.getElementById("navbar");
var navbarAtTop = navbar.offsetTop;

window.onscroll = function() {ifNavBarAtTop()};

function ifNavBarAtTop() {	

	if (window.pageYOffset >= navbarAtTop) {
		navbar.classList.add("navbarAtTop")
	} else {
		navbar.classList.remove("navbarAtTop");
	}	
}

