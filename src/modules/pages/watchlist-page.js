import {getWatchlist} from "../service/watchlist-service";
import {createWatchlistUI} from "../factories/watchlist-factory";

let initWatchlist = () => {
    console.log('Init Watchlist');
    const watchlistUI = document.getElementById('watchlist');
    const watchlist = getWatchlist();
    watchlist.forEach(movie => {
        createWatchlistUI(movie, watchlistUI);
    });
}

export {initWatchlist};
