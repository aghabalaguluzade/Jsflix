'use strict';

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

const sideBar = document.querySelector("[sidebar]");
const menuButton = document.querySelectorAll("[menu-btn]");

searchTogglers.forEach(toggler => {
	toggler.addEventListener("click", () => {
		searchBox.classList.toggle("active");
	});
});

menuButton.forEach(toggler => {
	toggler.addEventListener("click", () => {
		sideBar.classList.toggle("active");
	});
});