'use strict';

const api_key = 'f17a629923fcb24e3d3b59fef710aa5f';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = (url,callback,optionalParam) => {
	fetch(url)
	.then(response => response.json())
	.then(data => callback(data,optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };