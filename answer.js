const answerSlide = () => {
	const faqIcons = document.querySelectorAll("#faq-icon");
	const answers = document.querySelectorAll(".answer");
	faqIcons.forEach(item => {
		item.addEventListener('click', () => {
			for (var i = 0; i < 4; i++) {
				if (answers[i].style.maxHeight == "10rem") {
					answers[i].style.maxHeight = null;
				}
			}
		});
	})
}
answerSlide();