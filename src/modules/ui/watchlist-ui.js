import {getWatchlist} from "../service/watchlist-service";

let initWatchlist = () => {
    const watchlistUI = document.getElementById('watchlist');
    const watchlist = getWatchlist();
    watchlist.forEach(movie => {
        const movieUI = document.createElement('li');
        movieUI.textContent = movie;
        watchlistUI.appendChild(movieUI);
    })
}

export {initWatchlist};
