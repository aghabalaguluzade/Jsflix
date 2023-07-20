'use strict';

import { api_key, fetchDataFromServer } from "./api.js";


export sidebar = () => {
	const genreList = {};

	fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, ({genres}) => {
		for(const { id, name } of genres) {
			genreList[id] = name;
		}

		genreLink();

	});

	const sidebarInner = document.createElement("div");
	sidebarInner.classList.add("sidebar-inner");

	sidebarInner.innerHTML = html`
			<div class="sidebar-list">
				<span class="title">Genre</span>
			</div>

			<div class="sidebar-list">

				<span class="title">Language</span>

				<a href="./movie-list.html" class="sidebar-link" menu-close>English</a>

				<a href="./movie-list.html" class="sidebar-link" menu-close>French</a>

				<a href="./movie-list.html" class="sidebar-link" menu-close>German</a>
			</div>

			<div class="sidebar-footer">
				<p class="copyright">Copyright 2023 <a href="https://www.linkedin.com/in/aghabala-guluzade-077031188/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BCCYldvMDREq1LLLII1a8AQ%3D%3D">Aghabala Guluzade</a></p>

				<img src="./assets/images/tmdb-logo.svg" width="130" height="17" alt="the movie database logo" />
			</div>
			`;


	const genreLink = () => {
		for(const [genreId, genreName] of new Object.entries(genreList)) {
			const link = document.createElement("a");
			link.classList.add("slidebar-link");
			link.setAttribute("href", "./movie-list.html");
			link.setAttribute("menu-close", "");
			// link.setAttribute("onclick", `getMovieList("with_genres=${genreId}","${genreName}")`);
			link.textContent = genreName;

			sidebarInner.querySelector("slidebar-list")[0]
			.appendChild(link);
		}

		const sidebar = document.querySelector("[sidebar]");
		sidebar.appendChild(sidebarInner);
		toggleSidebar(sidebar);

	};

	const toggleSidebar = (sidebar) => {
		const side
	};

}

2:23:53