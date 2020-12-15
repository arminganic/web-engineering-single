let createMovieUI = (movie, container) => {
    const movieUI = document.createElement('article');
    movieUI.classList.add('movie');

    const posterUI = document.createElement('img');
    posterUI.classList.add('movie__poster');
    posterUI.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const overviewUI = createOverviewUI(movie);
    const footerUI = createFooterUI(movie);

    movieUI.appendChild(posterUI);
    movieUI.appendChild(footerUI);
    movieUI.appendChild(overviewUI);

    container.appendChild(movieUI);
}

let createOverviewUI = (movie) => {
    const containerUI = document.createElement('div');
    containerUI.classList.add('movie__details');

    const footerUI = createFooterUI(movie);

    const contentUI = document.createElement('p');
    contentUI.classList.add('movie__overview');
    contentUI.textContent = movie.overview;

    const actionsUI = document.createElement('div');
    actionsUI.classList.add('movie__actions');

    const watchlistButtonUI = createWatchlistButtonUI();
    actionsUI.appendChild(watchlistButtonUI);

    containerUI.appendChild(footerUI);
    containerUI.appendChild(contentUI);
    containerUI.appendChild(actionsUI);

    return containerUI;
}

let createWatchlistButtonUI = () => {
    const containerUI = document.createElement('button');
    containerUI.classList.add('btn');

    const iconUI = document.createElement('em');
    iconUI.classList.add('material-icons-outlined');
    iconUI.textContent = 'add';

    const titleUI = document.createElement('span');
    titleUI.textContent = 'Add to Watchlist';

    containerUI.appendChild(iconUI);
    containerUI.appendChild(titleUI);

    return containerUI;
}

let createFooterUI = (movie) => {
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

export {createMovieUI};
