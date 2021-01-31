const parallax = document.querySelector('.parallax');
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function () {
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.7 + "px";
	console.log(window.pageYOffset);

	if (window.pageYOffset == 0) {
		document.querySelector(".site-header").style.background = "none"
	}
	else if (prevScrollpos > offset) {
		document.querySelector(".site-header").style.background = "linear-gradient(180deg, rgba(253,187,45,1)  0%, rgba(255,255,255,1) 100%)"
		document.querySelector(".site-header").style.top = "0";
	} 
	else{
		document.querySelector(".site-header").style.background = "none"
		document.querySelector(".site-header").style.top = "-10em";
	}
	prevScrollpos = offset;

})
