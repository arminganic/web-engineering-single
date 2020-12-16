import {createWatchlistButtonUI} from "./watchlist-button-factory";

let createWatchlistUI = (movie, container) => {
    const movieUI = document.createElement('li');
    movieUI.id = `movie-${movie.id}`;
    movieUI.classList.add('list__item');
    movieUI.setAttribute('data-movie-id', movie.id);

    const titleUI = document.createElement('h3');
    titleUI.classList.add('list__title');
    titleUI.textContent = movie.title;

    const buttonUI = createWatchlistButtonUI(movie, () => {removeFromWatchlist(movie, container)});

    movieUI.appendChild(titleUI);
    movieUI.appendChild(buttonUI);
    container.appendChild(movieUI);
}

let removeFromWatchlist = (movie, container) => {
    const movieUI = document.querySelectorAll(`[data-movie-id="${movie.id}"]`);
    container.removeChild(movieUI[0]);
}

export {createWatchlistUI};
