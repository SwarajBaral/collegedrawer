// const parallax = document.querySelector('.parallax');
var prevScrollpos = window.pageYOffset;
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navlinks');
	const navLinks = document.querySelectorAll('.navlinks li');


	burger.addEventListener('click', () => {
		
		document.querySelector(".site-header").style.background = "rgba(253,187,45,1)";
		//Navbar slide

		nav.classList.toggle('nav-active');
		// console.log("Clicked");

		//Links fadein

		navLinks.forEach((link, index) => {
			var fadeStagger = index / 7;
			if (link.style.animation){
				link.style.animation = '';
				flag = 0;
				document.querySelector(".site-header").style.background = "rgba(253,187,45,1)";
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${fadeStagger + 0.3}s`;
			}
		});
	});
}
navSlide();

window.addEventListener("scroll", function () {
	let offset = window.pageYOffset;
	// parallax.style.backgroundPositionY = offset * 0.7 + "px";
	// console.log(window.pageYOffset);
	if (window.pageYOffset == 0) {
		document.querySelector(".site-header").style.background = "none";
	}
	else if (prevScrollpos > offset) {
		// document.querySelector(".site-header").style.background = "linear-gradient(180deg, rgba(253,187,45,1)  0%, rgba(255,255,255,1) 100%)";
		document.querySelector(".site-header").style.top = "0";
	} 
	else{
		document.querySelector(".site-header").style.background = "linear-gradient(180deg, rgba(253,187,45,1)  0%, rgba(255,255,255,1) 100%)";
		// document.querySelector(".site-header").style.top = "-10em";
	}
	prevScrollpos = offset;

})
