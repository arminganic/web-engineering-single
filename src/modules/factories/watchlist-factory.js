import {createWatchlistButtonUI} from "./watchlist-button-factory";

class WatchlistFactory {
    createWatchlistUI(movie) {
        const movieUI = document.createElement('li');
        movieUI.id = `movie-${movie.id}`;
        movieUI.classList.add('list__item');
        movieUI.setAttribute('data-movie-id', movie.id);

        const titleUI = document.createElement('h3');
        titleUI.classList.add('list__title');
        titleUI.textContent = movie.title;

        const buttonUI = createWatchlistButtonUI(movie, () => {
            const movieUI = document.getElementById(`movie-${movie.id}`);
            movieUI.classList.add('list__item--hide');
        });

        movieUI.appendChild(titleUI);
        movieUI.appendChild(buttonUI);

        return movieUI;
    }

    createNoItemsInfo() {
        const containerUI = document.createElement('li');
        containerUI.classList.add('alert');
        containerUI.textContent = 'There are no movies in your watchlist. Shhh, I\'ve heard that "Tenet" is a nice one! 🤫';
        return containerUI;
    }
}

export default WatchlistFactory;
