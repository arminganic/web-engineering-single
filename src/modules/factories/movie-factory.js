import {createWatchlistButtonUI} from "./watchlist-button-factory";

let createMovieUI = (movie, container) => {
    const containerUI = document.createElement('article');
    containerUI.classList.add('movie');

    const posterUI = document.createElement('img');
    posterUI.classList.add('movie__poster');
    posterUI.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const overviewUI = createOverviewUI(movie);
    const detailsUI = createDetailsUI(movie);

    containerUI.appendChild(posterUI);
    containerUI.appendChild(overviewUI);
    containerUI.appendChild(detailsUI);

    container.appendChild(containerUI);
}

let createOverviewUI = (movie) => {
    const containerUI = document.createElement('div');
    containerUI.classList.add('movie__footer');

    const titleUI = document.createElement('h3');
    titleUI.classList.add('movie__title');
    titleUI.textContent = movie.title;

    const ratingUI = document.createElement('span');
    ratingUI.classList.add('movie__rating');
    const vote = movie.vote_average;
    if (vote >= 0.0 && vote < 3.3) {
        ratingUI.classList.add('movie__rating--bad');
    } else if (vote >= 3.3 && vote < 6.6) {
        ratingUI.classList.add('movie__rating--okay');
    } else if (vote >= 6.6 && vote < 10.0) {
        ratingUI.classList.add('movie__rating--good');
    }
    ratingUI.textContent = vote.toFixed(1);

    containerUI.appendChild(titleUI);
    containerUI.appendChild(ratingUI);

    return containerUI;
}

let createDetailsUI = (movie) => {
    const containerUI = document.createElement('div');
    containerUI.classList.add('movie__details');

    const overviewUI = createOverviewUI(movie);

    const contentUI = document.createElement('p');
    contentUI.classList.add('movie__description');
    contentUI.textContent = movie.overview;

    const actionsUI = document.createElement('div');
    actionsUI.classList.add('movie__actions');

    const watchlistButtonUI = createWatchlistButtonUI(movie, () => {}, true);
    actionsUI.appendChild(watchlistButtonUI);

    containerUI.appendChild(overviewUI);
    containerUI.appendChild(contentUI);
    containerUI.appendChild(actionsUI);

    return containerUI;
}

export {createMovieUI};
