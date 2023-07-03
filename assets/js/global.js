'use strict';

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

searchTogglers.forEach(toggler => {
	toggler.addEventListener("click", () => {
		searchBox.classList.toggle("active");
	});
});