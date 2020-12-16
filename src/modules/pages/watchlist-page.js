import {getWatchlist} from "../service/watchlist-service";
import {createWatchlistUI} from "../factories/watchlist-factory";

let initWatchlist = () => {
    const watchlistUI = document.getElementById('watchlist');
    const watchlist = getWatchlist();
    watchlist.forEach(movie => {
        createWatchlistUI(movie, watchlistUI);
    });
    const filterUI = document.getElementById('watchlist-filter');
    filterUI.addEventListener('keyup', (event) => {
        const input = (event.target.value).toLowerCase();
        const filteredWatchlist = watchlist
            .filter(m => (m.title).toLowerCase().includes(input))
            .map(m => `movie-${m.id}`);
        const items = watchlistUI.children;
        for (let item of items) {
            if (!filteredWatchlist.includes(item.id)) {
                item.classList.add('list__item--hide');
            } else {
                item.classList.remove('list__item--hide');
            }
        }
    });
}

export {initWatchlist};
